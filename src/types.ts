export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionState = Question & {
	answers: string[];
};

export type AnswerObject = {
	question: string;
	userAnswer: string | null;
	correct: boolean;
	correctAnswer: string;
};

export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

export enum QuestionType {
	MULTIPLE_CHOICE = 'multiple',
	TRUE_OR_FALSE = 'boolean',
}
