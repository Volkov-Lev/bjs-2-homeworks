//Задача № 1
const md5 = require('js-md5').md5; // Импорт библиотеки для MD5

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(JSON.stringify(args)); // Хеширование аргументов
    let objectInCache = cache.find(item => item.hash === hash); // Поиск в кеше

    if (objectInCache) {
      return `Из кеша: ${objectInCache.value}`; // Возвращение значения из кеша
    }

    let result = func(...args); // Вызов функции
    cache.push({ hash, value: result }); // Сохранение результата в кеше

    if (cache.length > 5) {
      cache.shift(); // Удаление первого элемента, если кеш переполнен
    }

    return `Вычисляем: ${result}`; // Возвращение строки с результатом
  }

  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let isTrottled = false;
    function wrapper(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout( () => {
        func(args);
        wrapper.count++;
      }, delay);
      if (!isTrottled) {
        func(...args);
        wrapper.count++;
        isTrottled = true;
      }
      wrapper.allCount++;
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
  }