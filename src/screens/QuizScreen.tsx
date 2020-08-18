import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '../../App';
import { fetchQuestions } from '../queries';
import { QuestionState, AnswerObject } from '../types';
import QuestionCard from '../components/QuestionCard';

// interface AppProps {}
type Props = StackScreenProps<RootStackParamList, 'Quiz'>;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		width: width,
		backgroundColor: '#06064F',
	},
});

const QuizScreen = ({ route }: Props) => {
	const { amount, difficulty, questionType } = route.params;
	const totalQuestions: number = +amount;
	// state values
	const [loading, setLoading] = useState<boolean>(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [gameOver, setGameOver] = useState<boolean>(true);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [error, setError] = useState(null);
	const setAnswerRef = useRef<string | null>(null);

	// functions
	const getQuestions = async () => {
		console.log('lets go!!!');
		setLoading(true);
		setGameOver(false);
		setScore(0);
		try {
			const newQuestions = await fetchQuestions(totalQuestions, difficulty, questionType);
			setQuestions(newQuestions);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setError(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getQuestions();
	}, []);

	const nextQuestion = () => {
		if (questionNumber === totalQuestions - 1) {
			return setGameOver(true);
		}

		setQuestionNumber((prev) => prev + 1);
	};

	const checkCorrectAnswer = () => {
		const userAnswer = setAnswerRef.current;

		// check correct answer
		const correct = questions[questionNumber].correct_answer === userAnswer;
		if (correct) {
			setScore((prev) => prev + 1);
		}

		const answerObject: AnswerObject = {
			question: questions[questionNumber].question,
			userAnswer: userAnswer,
			correct,
			correctAnswer: questions[questionNumber].correct_answer,
		};

		setUserAnswers((prev) => [...prev, answerObject]);
	};

	if (loading)
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" />
			</View>
		);

	if (error)
		return (
			<View style={styles.container}>
				<Text>Something went wrong</Text>
			</View>
		);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor="#06064F" />
			{/* <Text>Score: {score}</Text>
			<Text>Difficulty: {route.params.difficulty}</Text>
			<Text>
				Question: {questionNumber + 1} / {amount}
			</Text> */}
			{questions.length > 0 ? (
				<QuestionCard
					question={questions[questionNumber].question}
					answers={questions[questionNumber].answers}
					questionNumb={questionNumber}
					changeQuestion={nextQuestion}
					checkAnswer={checkCorrectAnswer}
					setSelectedAnswer={setAnswerRef}
				/>
			) : null}
		</SafeAreaView>
	);
};

export default QuizScreen;
