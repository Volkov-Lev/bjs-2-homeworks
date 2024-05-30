"use strict"

//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',')
        let objectInCache = cache.findIndex((item) => item.hash === hash)
        if (objectInCache !== -1) {
            console.log("Из кэша: " + cache[objectInCache].value);
            return "Из кэша: " + cache[objectInCache].value;
        }
        let result = func(...args);
        cache.push({
            hash: args.join(','),
            value: result
        })
        if (cache.length > 5) {
            cache.splice(0, 1);
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let checkFunc = false;
    return function(...args) {
        if (checkFunc == false) {
            func(...args);
            checkFunc = true;
            setTimeout(() => {
                checkFunc = false, func(...args)
            }, delay);
        }
    }
}

function debounceDecorator2(func) {
    let checkFunc = false;

    function wrapper(...args) {
        wrapper.count++;
        if (checkFunc == false) {
            func(...args);
            checkFunc = true;
            wrapper.count.push(i += 1)
            setTimeout(() => {
                checkFunc = false, func(...args)
            }, delay);
        }
    }
    wrapper.count = 0;
    return wrapper
}