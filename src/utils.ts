export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export const arrangeBooleanArray = (array: string[]) => {
	//get index of each item
	const truthIndex = array.findIndex((boolval) => boolval === 'True');
	const falseIndex = array.findIndex((boolval) => boolval === 'False');
	let newArray: string[] = [array[truthIndex], array[falseIndex]];
	return newArray;
};
