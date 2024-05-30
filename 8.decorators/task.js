//Задача № 1
const md5 = require('js-md5').md5;

function cachingDecoratorNew(func) {
  let cache = []; // Массив для хранения хешей и результатов

  function wrapper(...args) {
    // Получаем хеш для аргументов функции
    const hash = md5(JSON.stringify(args));

    // Ищем хеш в кеше
     let objectInCache = cache.find(item => item.hash === hash);

    if (objectInCache) { // Если нашли, возвращаем значение из кеша
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }

    // Вычисляем результат функции
    let result = func(...args);

    // Добавляем новый элемент в кеш
    cache.push({ hash, value: result });

    // Удаляем первый элемент, если кеш переполнен
    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
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