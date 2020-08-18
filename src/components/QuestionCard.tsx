import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import HTMLView from 'react-native-htmlview';

import { Button } from './index';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#06064F',
	},
	textHeading: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center',
		marginTop: 20,
	},
	header: {
		flex: 1,
		backgroundColor: '#06064F',
		padding: 20,
		alignItems: 'center',
	},
	footer: {
		flex: 1,
		backgroundColor: '#fff',
		borderRadius: 50,
		padding: 30,
		justifyContent: 'center',
	},
});

const htmlStyle = StyleSheet.create({
	p: {
		color: '#fff',
		fontSize: 24,
		textAlign: 'center',
	},
});

type Props = {
	question: string;
	answers: string[];
	questionNumb: number;
	changeQuestion: () => void;
	checkAnswer: () => void;
	setSelectedAnswer: React.MutableRefObject<string | null>;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	questionNumb,
	changeQuestion,
	checkAnswer,
	setSelectedAnswer,
}) => {
	const html = `<p>${question}</p>`;
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.textHeading}>Question: {questionNumb + 1}</Text>
			<View style={styles.header}>
				<HTMLView value={html} stylesheet={htmlStyle} />
			</View>
			<View style={styles.footer}>
				{answers.map((answer) => (
					<Button
						key={answer}
						pressed={() => {
							setSelectedAnswer.current = answer;
							checkAnswer();
							changeQuestion();
						}}
						label={answer}
						bgColor="#fff"
						color="#06064f"
						borderColor="#06064f"
					/>
				))}
			</View>
		</SafeAreaView>
	);
};

export default QuestionCard;
