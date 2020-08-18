import { gql } from '@apollo/client';
import { Question, QuestionType } from './types';
import { shuffleArray, arrangeBooleanArray } from './utils';

export const GET_QUESTIONS = gql`
	query Questions($amount: int!, $difficulty: String, $questionType: String) {
		questions(amount: $amount, difficulty: $difficulty, type: $questionType) {
			difficulty
			questionText
			category
			correctAnswer
			incorrectAnswers
			type
		}
	}
`;

export const fetchQuestions = async (amount: number, difficulty: string, questionType: string) => {
	const request = await fetch(
		`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${questionType}`
	);
	const response = await request.json();
	console.log(response);
	// check question type and decide whether to shuffle
	const questionObj = response.results.map((question: Question) => {
		let answers: string[];
		if (question.type === QuestionType.MULTIPLE_CHOICE) {
			answers = shuffleArray([...question.incorrect_answers, question.correct_answer]);
		} else {
			answers = arrangeBooleanArray([...question.incorrect_answers, question.correct_answer]);
		}
		return {
			...question,
			answers,
		};
	});
	console.log(questionObj);
	return questionObj;
};
