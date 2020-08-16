import { gql } from '@apollo/client';

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
