// Первая задача
function getArrayParams(...arr) {
  let min = Infinity; // Инициализация минимального значения как бесконечность
  let max = -Infinity; // Инициализация максимального значения как отрицательная бесконечность
  let sum = 0; // Инициализация суммы элементов
  const len = arr.length; // Получение длины массива

  // Проход по массиву и определение минимального, максимального и суммы элементов
  for (let i = 0; i < len; i++) {
    const element = arr[i];
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
    sum += element;
  }

  // Вычисление среднего арифметического
  const avg = sum / len;
  return { min, max, avg: avg.toFixed(2) }; // Возвращение объекта с результатами
}

// Примеры использования функции
console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }

// Вторая задача
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

// Третья задача
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

// Примеры использования функции
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 