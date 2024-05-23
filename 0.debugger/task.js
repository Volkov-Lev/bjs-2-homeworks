// Функция для расчета налоговых отчислений
function calculateTax(salary) {
  return Math.floor(salary * 0.2); // Округляем в меньшую сторону до целого числа
}

// Массив зарплат
const salaries = [];

// Заполняем массив зарплатами
salaries.push(...Array(5).fill(10000)); // 5 человек получают по 10 тыс. рублей
salaries.push(...Array(15).fill(25000)); // 15 человек получают по 25 тыс. рублей
salaries.push(...Array(40).fill(50000)); // 40 человек получают по 50 тыс. рублей
salaries.push(...Array(10).fill(100000)); // 10 человек получают по 100 тыс. рублей

// Суммарные налоговые отчисления
let totalTax = 0;

// Пробегаемся по зарплатам и считаем налоги
salaries.forEach((salary) => {
  totalTax += calculateTax(salary);
});

// Средние налоговые отчисления на человека
const averageTaxPerPerson = totalTax / salaries.length;


// Выводим результаты
console.log(`Суммарные налоговые отчисления: ${totalTax} рублей`);
console.log(
  `Средние налоговые отчисления на человека: ${averageTaxPerPerson.toFixed(2)} рублей`,
);
