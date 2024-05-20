function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
    sum += element;
  }
  
  const avg = sum / arr.length;
  return { min, max, avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, val) => acc + val);
}

function differenceMaxMinWorker(...arr) {
  let max = -Infinity;
  let min = Infinity;
  arr.forEach(val => {
    if (val > max) {
      max = val;
    }
    if (val < min) {
      min = val;
    }
  });
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEven = 0;
  let sumOdd = 0;
  arr.forEach(val => {
    if (val % 2 === 0) {
      sumEven += val;
    } else {
      sumOdd += val;
    }
  });
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  let sumEven = 0;
  let countEven = 0;
  arr.forEach(val => {
    if (val % 2 === 0) {
      sumEven += val;
      countEven++;
    }
  });
  return countEven ? sumEven / countEven : 0;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  arrOfArr.forEach(subArr => {
    const result = func(...subArr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  });
  return maxWorkerResult;
}