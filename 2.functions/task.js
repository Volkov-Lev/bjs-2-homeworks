"use strict";

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const current = arr[i];
    if (current > max) {
      max = current;
    }
    if (current < min) {
      min = current;
    }
    sum += current;
  }

  return {
    min: min,
    max: max,
    avg: sum / len
  };
}

console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }

function summElementsWorker() {
  return 0;
}

function differenceMaxMinWorker() {
  return 0;
}

function differenceEvenOddWorker() {
  return 0;
}

function averageEvenElementsWorker() {
  return 0;
}

// Реализация функций...
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const len = arrOfArr.length;

  for (let i = 0; i < len; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
