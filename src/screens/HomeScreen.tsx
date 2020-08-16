import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Picker } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Picker } from '@react-native-community/picker';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
// import { Difficulty, QuestionType } from '../types';

// interface AppProps {}
type Props = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
	const [totalQuestions, setTotalQuestions] = useState<string>('10');
	const [difficulty, setDifficulty] = useState<string>('easy');
	const [questionType, setQuestionType] = useState<string>('multiple');

	const onChangeHandler = (text: string) => {
		setTotalQuestions(text);
	};

	const onChangeDifficulty = (itemValue: any) => {
		setDifficulty(itemValue);
	};

	const onChangeQuestionType = (itemValue: any) => {
		setQuestionType(itemValue);
	};

	const onSubmit = () => {
		navigation.navigate('Quiz', {
			amount: totalQuestions,
			difficulty: difficulty,
			questionType: questionType,
		});
	};
	return (
		<SafeAreaView style={styles.container}>
			<Text>Ready for a Quiz Challenge</Text>
			<View>
				<Text>How many Questions would you like?</Text>
				<TextInput value={totalQuestions} onChangeText={onChangeHandler} />
				<Text>Select Difficulty</Text>
				<Picker selectedValue={difficulty} onValueChange={onChangeDifficulty}>
					<Picker.Item value="easy" label="Easy" />
					<Picker.Item value="medium" label="Medium" />
					<Picker.Item value="hard" label="Hard" />
				</Picker>
				<Text>Select Question Type</Text>
				<Picker selectedValue={questionType} onValueChange={onChangeQuestionType}>
					<Picker.Item value="multiple" label="Multiple Choice" />
					<Picker.Item value="boolean" label="True or False" />
				</Picker>
				<Button onPress={onSubmit} title="Start Quiz" />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default HomeScreen;
