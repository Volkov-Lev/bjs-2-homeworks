// Функция для сравнения массивов
function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }
  
  // Функция для получения среднего возраста пользователей одного пола
  function getUsersNamesInAgeRange(users, gender) {
    const usersOfGender = users.filter(user => user.gender === gender);
    if (usersOfGender.length === 0) {
      return 0;
    }
    const ages = usersOfGender.map(user => user.age);
    return ages.reduce((sum, age) => sum + age, 0) / ages.length;
  }
  
  // Примеры использования функций
  console.log(compareArrays([8, 9], [6])); // false, разные значения
  console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
  console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
  console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
  console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
  
  console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
  console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
  console.log(getUsersNamesInAgeRange([], "женский")); // 0
  console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0