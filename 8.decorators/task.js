//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1) { // если элемент не найден
      console.log("Из кэша: " + cache[idx].value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({ hash: hash, value: result }); // добавляем элемент с правильной структурой
      if (cache.length > 5) {
        cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
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