function compareArrays(arr1, arr2) {
    // Проверяем, что массивы имеют одинаковую длину
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Используем метод every для сравнения элементов массивов
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    // Если все проверки пройдены, возвращаем true
    return true;
  }

  function getUsersNamesInAgeRange(users, gender) {
    // Фильтруем пользователей по полу
    const filteredUsers = users.filter(user => user.gender === gender);
  
    // Если пользователей нет, возвращаем 0
    if (filteredUsers.length === 0) {
      return 0;
    }
  
    // Преобразуем массив объектов в массив возрастов
    const ages = filteredUsers.map(user => user.age);
  
    // Вычисляем среднее значение возрастов
    const averageAge = ages.reduce((total, age) => total + age, 0) / ages.length;
  
    return averageAge;
  }

  // Пример вызова функции сравнения массивов
console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

// Пример вызова функции получения среднего возраста
console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0