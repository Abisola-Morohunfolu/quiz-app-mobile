import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useQuery } from '@apollo/client';

import { GET_QUESTIONS } from '../queries';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
// import { Difficulty, QuestionType } from '../types';

// interface AppProps {}
type Props = StackScreenProps<RootStackParamList, 'Quiz'>;

const QuizScreen = ({ route, navigation }: Props) => {
	const { amount, difficulty, questionType } = route.params;
	const value: number = +amount;
	const { loading, error, data } = useQuery(GET_QUESTIONS, {
		variables: {
			amount: value,
			difficulty,
			questionType,
		},
	});

	if (loading)
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		);

	if (error) {
		console.log(error, 'new');
		return (
			<View style={styles.container}>
				<Text>Something went wrong</Text>
			</View>
		);
	}
	if (data) {
		console.log(data);
	}

	return (
		<View style={styles.container}>
			<Text>Hello From Screen</Text>
			<Text>Amount: {JSON.stringify(amount)}</Text>
			<Text>Difficulty: {route.params.difficulty}</Text>
			<Text>Type: {route.params.questionType}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default QuizScreen;
