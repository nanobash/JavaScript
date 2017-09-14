/*
 * JavaScript (Ecmascript 6) set of functions.
 */

/**
 * Function takes provided function with with n argument and convert
 *      it into a single argument.
 *
 * @param {Function} fn
 *
 * @example
 *      console.log(['1', '2', '3'].map(unaryArrow(parseInt)));
 *
 * @return {Function}
 */
const unary = function (fn) {
    return 1 === fn.length ? fn : function (arg) {
        return fn.call(this, arg);
    };
};

/**
 * Arrow style function, prototyping above defined "unary" function.
 *
 * @example
 *      console.log(['1', '2', '3'].map(unaryArrow(parseInt)));
 *
 * @param {Function} fn
 */
const unaryArrow = (fn) => 1 === fn.length ? fn : (arg) => fn.call(this, arg);

/**
 * Executes provided function only once.
 *
 * @example
 *      let fn = once(() => {
 *          console.log('Executes only once!');
 *      }); fn(); fn();
 *
 * @param {Function} fn
 *
 * @return {Function}
 */
const once = function (fn) {
    let done = false;

    return function () {
        return true === done ? undefined : (done = true, fn.apply(this, arguments));
    };
};

/**
 * Arrow style function, prototyping above defined "once" function.
 *
 * @example
 *      let fn = once(() => {
 *          console.log('Executes only once!');
 *      }); fn(); fn();
 *
 * @param {Function} fn
 *
 * @return {Function|undefined}
 */
const onceArrow = (fn) => {
    let done = false;

    return () => true === done ? undefined : (done = true, fn.apply(this, arguments));
};

/**
 * Function checks whether all the elements of the array are evaluated
 *      to true or not, by the passed function.
 *
 * @example
 *      console.log(every([2, 5, 7], (arg) => {
 *          return arg > 0;
 *      }));
 *
 * @param {Array}       items
 * @param {Function}    fn
 *
 * @return {Boolean}
 */
const every = function (items, fn) {
    let result = true;

    for (const item of items) {
        result = result && fn.call(this, item);
    }

    return result;
};

/**
 * Arrow style function, prototyping above defined "every" function.
 *
 * @example
 *      console.log(everyArrow([2, 5, 7], (arg) => {
 *          return arg > 0;
 *      }));
 *
 * @param {Array}       items
 * @param {Function}    fn
 *
 * @return {Boolean}
 */
const everyArrow = (items, fn) => {
    let result = true;

    for (const item of items) {
        result = result && fn.call(this, item);
    }

    return result;
};

/**
 * Returns true if either one of the elements in the array returns true
 *      for the passed function.
 *
 * @example
 *      console.log(any([2, 5, 10], (arg) => {
 *          return arg > 9;
 *      }));
 *
 * @param {Array}       items
 * @param {Function}    fn
 *
 * @return {Boolean}
 */
const any = function (items, fn) {
    let result = false;

    for (const item of items) {
        result = result || fn.call(this, item);
    }

    return result;
};

/**
 * Arrow style function, prototyping above defined "any" function.
 *
 * @example
 *      console.log(anyArrow([2, 5, 10], (arg) => {
 *          return arg > 9;
 *      }));
 *
 * @param {Array}       items
 * @param {Function}    fn
 *
 * @return {Boolean}
 */
const anyArrow = (items, fn) => {
    let result = false;

    for (const item of items) {
        result = result || fn.call(this, item);
    }

    return result;
};

/**
 * Function memorizes calculated results in object and upon second time
 *      execution retrieves them from cache.
 *
 * @example
 *      let memory = memorized((arg) => {
 *          return arg * 2;
 *      }); memory(10); memory(20); memory(30); console.log(memory(10, true));
 *
 * @param {Function} fn
 *
 * @return {Function}
 */
const memorized = function (fn) {
    const cached = {};

    /**
     * Closure function, which returns result either from cache if exists,
     *      either from passed anonymous function. If show flag sets to true,
     *      cached data is returned, otherwise result.
     *
     * @param {Number}  arg
     * @param {Boolean} [show = false]
     */
    return function (arg, show = false) {
        if (show) {
            return cached;
        }

        return cached[arg] || (cached[arg] = fn.call(this, arg));
    };
};

/**
 * Arrow style function, prototyping above defined "memorized" function.
 *
 * @example
 *      let memory = memorizedArrow((arg) => {
 *          return arg * 2;
 *      }); memory(10); memory(20); memory(30); console.log(memory(10, true));
 *
 * @param {Function} fn
 *
 * @return {Function}
 */
const memorizedArrow = (fn) => {
    const cached = {};

    /**
     * Closure function, which returns result either from cache if exists,
     *      either from passed anonymous function. If show flag sets to true,
     *      cached data is returned, otherwise result.
     *
     * @param {Number}  arg
     * @param {Boolean} [show = false]
     */
    return (arg, show = false) => {
        if (true === show) {
            return cached;
        }

        return cached[arg] || (cached[arg] = fn.call(this, arg));
    };
};

/**
 * Projecting (transforming) function, returning new array of results returned by user
 *      defined function, which accepts each argument of provided array.
 *
 * @example
 *      console.log(map([2, 4], (arg) => {
 *          return arg ** 2;
 *      }));
 *
 * @param {Array}       items
 * @param {Function}    fn
 *
 * @return {Array}
 */
const map = function (items, fn) {
    let results = [];

    for (const item of items) {
        results.push(fn.call(this, item));
    }

    return results;
};

/**
 * Arrow style function, prototyping above defined "map" function.
 *
 * @example
 *      console.log(mapArrow([2, 4, 6], (arg) => {
 *          return arg ** 3;
 *      }));
 *
 * @param {Array}       items
 * @param {Function}    fn
 *
 * @return {Array}
 */
const mapArrow = (items, fn) => {
    let results = [];

    for (const item of items) {
        results.push(fn.call(this, item));
    }

    return results;
};

/**
 * Projecting (transforming) function returns new array containing elements of the provided array,
 *      on which user defined function returned true.
 *
 * @example
 *      console.log(filter([2, 4, 6], (arg) => {
 *          return arg > 2;
 *      }));
 *
 * @param {Array}       items
 * @param {Function}    fn
 *
 * @return {Array}
 */
const filter = function (items, fn) {
    let results = [];

    for (const item of items) {
        (fn.call(this, item) ? results.push(item) : undefined);
    }

    return results;
};

/**
 * Arrow style function, prototyping above defined "map" function.
 *
 * @example
 *      console.log(filterArrow([2, 4, 6], (arg) => {
 *          return arg > 2;
 *      }));
 *
 * @param {Array}       items
 * @param {Function}    fn
 *
 * @return {Array}
 */
const filterArrow = (items, fn) => {
    let results = [];

    for (const item of items) {
        (fn.call(this, item) ? results.push(item) : undefined);
    }

    return results;
};

/**
 * Merges two array using user defined function and returns
 *      merged array of results.
 *
 * @example
 *      console.log(zip([2, 4], [5, 10], (x, y) => {
 *          return x * y;
 *      }));
 *
 * @param {Array}       leftArr
 * @param {Array}       rightArr
 * @param {Function}    fn
 *
 * @return {Array}
 */
const zip = function (leftArr, rightArr, fn) {
    let index, results = [];

    for (index = 0; index < Math.min(leftArr.length, rightArr.length); ++index) {
        results.push(fn.call(this, leftArr[index], rightArr[index]));
    }

    return results;
};

/**
 * Arrow style function, prototyping above defined "map" function.
 *
 * @example
 *      console.log(zipArrow([2, 4], [5, 10], (x, y) => {
 *          return x * y;
 *      }));
 *
 * @param {Array}       leftArr
 * @param {Array}       rightArr
 * @param {Function}    fn
 *
 * @return {Array}
 */
const zipArrow = (leftArr, rightArr, fn) => {
    let index, results = [];

    for (index = 0; index < Math.min(leftArr.length, rightArr.length); ++index) {
        results.push(fn.call(this, leftArr[index], rightArr[index]));
    }

    return results;
};
