function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	min = Math.min.apply(null, arr);
	max = Math.max.apply(null, arr);
	const initialValue = 0;
	sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue,
	);

	let avg = Number((sum / arr.length).toFixed(2));
	return {
		min,
		max,
		avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Math.min.apply(null, arr);
	let max = Math.max.apply(null, arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfarr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfarr.length; i++) {
		const result = func(...arrOfarr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}