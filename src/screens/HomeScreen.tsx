import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Picker, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import { Button } from '../components';

// types
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

// interface AppProps {}
type Props = StackScreenProps<RootStackParamList, 'Home'>;

// styles
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#06064F',
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		backgroundColor: '#06064F',
		flex: 0.4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 24,
	},
	main: {
		flex: 4,
		backgroundColor: '#fff',
		borderRadius: 40,
		width: width,
		paddingHorizontal: 20,
		paddingVertical: 20,
		justifyContent: 'center',
		alignContent: 'center',
	},
	textHeading: {
		fontSize: 18,
		color: '#06064f',
		fontWeight: '600',
	},
	textInput: {
		fontSize: 16,
		padding: 5,
		borderWidth: 1,
		borderColor: '#06064f',
		marginTop: 10,
		marginBottom: 10,
	},
	picker: {
		margin: 0,
	},
});

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
			<StatusBar barStyle="light-content" backgroundColor="#06064F" />
			<View style={styles.header}>
				<Text style={styles.headerText}>Ready for a Quiz Challenge</Text>
			</View>
			<View style={styles.main}>
				<Text style={styles.textHeading}>How many Questions would you like?</Text>
				<TextInput
					value={totalQuestions}
					onChangeText={onChangeHandler}
					keyboardType="numeric"
					returnKeyType="done"
					style={styles.textInput}
				/>
				<Text style={styles.textHeading}>Select Difficulty</Text>
				<Picker
					selectedValue={difficulty}
					onValueChange={onChangeDifficulty}
					itemStyle={styles.picker}
				>
					<Picker.Item value="easy" label="Easy" />
					<Picker.Item value="medium" label="Medium" />
					<Picker.Item value="hard" label="Hard" />
				</Picker>
				<Text style={styles.textHeading}>Select Question Type</Text>
				<Picker selectedValue={questionType} onValueChange={onChangeQuestionType}>
					<Picker.Item value="multiple" label="Multiple Choice" />
					<Picker.Item value="boolean" label="True or False" />
				</Picker>
				<Button pressed={onSubmit} label="Start Quiz" bgColor="#06064F" color="#fff" />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
