/*
 * JavaScript (Ecmascript 6) set of functions.
 */

/**
 * Function takes provided function with n argument and converts
 *      it into a single argument.
 *
 * @example
 *      console.log(['1', '2', '3'].map(unary(parseInt)));
 *
 * @param {Function}    fn
 * @param {Object}      [context = null]
 *
 * @return {Function}
 */
const unary = function (fn, context = null) {
    return 1 === fn.length ? fn : function (arg) {
        return fn.call(context, arg);
    };
};

/**
 * Arrow style function, prototyping above defined "unary" function.
 *
 * @example
 *      console.log(['1', '2', '3'].map(unaryArrow(parseInt)));
 *
 * @param {Function}    fn
 * @param {Object}      [context = null]
 *
 * @return {Function}
 */
const unaryArrow = (fn, context = null) => 1 === fn.length ? fn : (arg) => fn.call(context, arg);

/**
 * Executes provided function only once.
 *
 * @example
 *      let fn = once(() => {
 *          console.log('Executes only once!');
 *      }); fn(); fn();
 *
 * @param {Function} fn
 * @param {Object}   [context = null]
 *
 * @return {Function}
 */
const once = function (fn, context = null) {
    let done = false;

    return function () {
        return true === done ? undefined : (done = true, fn.apply(context, arguments));
    };
};

/**
 * Arrow style function, prototyping above defined "once" function.
 *
 * @example
 *      let fn = onceArrow(() => {
 *          console.log('Executes only once!');
 *      }); fn(); fn();
 *
 * @param {Function}    fn
 * @param {Object}      [context = null]
 *
 * @return {Function|undefined}
 */
const onceArrow = (fn, context = null) => {
    let done = false;

    return () => true === done ? undefined : (done = true, fn.apply(context, arguments));
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
 * @param {Object}      [context = null]
 *
 * @return {Boolean}
 */
const every = function (items, fn, context = null) {
    let result = true;

    for (const item of items) {
        result = result && fn.call(context, item);
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
 * @param {Object}      [context = null]
 *
 * @return {Boolean}
 */
const everyArrow = (items, fn, context = null) => {
    let result = true;

    for (const item of items) {
        result = result && fn.call(context, item);
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
 * @param {Object}      [context = null]
 *
 * @return {Boolean}
 */
const any = function (items, fn, context = null) {
    let result = false;

    for (const item of items) {
        result = result || fn.call(context, item);
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
 * @param {Object}      [context = null]
 *
 * @return {Boolean}
 */
const anyArrow = (items, fn, context = null) => {
    let result = false;

    for (const item of items) {
        result = result || fn.call(context, item);
    }

    return result;
};

/**
 * Function memorize calculated results in the object and upon second time
 *      execution retrieves them from the cache.
 *
 * @example
 *      let memory = memorized((arg) => {
 *          return arg * 2;
 *      }); memory(10); memory(20); memory(30); console.log(memory(10, true));
 *
 * @param {Function}    fn
 * @param {Object}      [context = null]
 *
 * @return {Function}
 */
const memorized = function (fn, context = null) {
    const cached = {};

    /**
     * Closure function, which returns result either from cache if exists,
     *      either from passed anonymous function. If show flag sets to true,
     *      cached data is returned, otherwise result.
     *
     * @param {Number}  arg
     * @param {Object}  [contextInner = null]
     * @param {Boolean} [show = false]
     */
    return function (arg, contextInner = null, show = false) {
        if (show) {
            return cached;
        }

        return cached[arg] || (cached[arg] = fn.call(null !== contextInner ? contextInner : context, arg));
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
 * @param {Function}    fn
 * @param {Object}      [context = null]
 *
 * @return {Function}
 */
const memorizedArrow = (fn, context = null) => {
    const cached = {};

    /**
     * Closure function, which returns result either from cache if exists,
     *      either from passed anonymous function. If show flag sets to true,
     *      cached data is returned, otherwise result.
     *
     * @param {Number}  arg
     * @param {Object}  [contextInner = null]
     * @param {Boolean} [show = false]
     */
    return (arg, contextInner = null, show = false) => {
        if (true === show) {
            return cached;
        }

        return cached[arg] || (cached[arg] = fn.call(null !== contextInner ? contextInner : context, arg));
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
 * @param {Object}      [context = null]
 *
 * @return {Array}
 */
const map = function (items, fn, context = null) {
    let results = [];

    for (const item of items) {
        results.push(fn.call(context, item));
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
 * @param {Object}      [context = null]
 *
 * @return {Array}
 */
const mapArrow = (items, fn, context = null) => {
    let results = [];

    for (const item of items) {
        results.push(fn.call(context, item));
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
 * @param {Object}      [context = null]
 *
 * @return {Array}
 */
const filter = function (items, fn, context = null) {
    let results = [];

    for (const item of items) {
        (fn.call(context, item) ? results.push(item) : undefined);
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
 * @param {Object}      [context = null]
 *
 * @return {Array}
 */
const filterArrow = (items, fn, context = null) => {
    let results = [];

    for (const item of items) {
        (fn.call(context, item) ? results.push(item) : undefined);
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
 * @param {Object}      [context = null]
 *
 * @return {Array}
 */
const zip = function (leftArr, rightArr, fn, context = null) {
    let index, results = [];

    for (index = 0; index < Math.min(leftArr.length, rightArr.length); ++index) {
        results.push(fn.call(context, leftArr[index], rightArr[index]));
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
 * @param {Object}      [context = null]
 *
 * @return {Array}
 */
const zipArrow = (leftArr, rightArr, fn, context = null) => {
    let index, results = [];

    for (index = 0; index < Math.min(leftArr.length, rightArr.length); ++index) {
        results.push(fn.call(context, leftArr[index], rightArr[index]));
    }

    return results;
};

/**
 * Higher-Order function, loops through array and executes user defined
 *      function for each element with specified context.
 *
 * @example
 *      forEach([2, 3, 5], (item) => {
 *          console.log(item ** 2);
 *      });
 *
 * @param {Array}     array
 * @param {Function}  fn
 * @param {Object}    [context = null]
 */
const forEach = function (array, fn, context = null) {
    for (let i = 0; i < array.length; ++i) {
        fn.call(context, array[i]);
    }
};

/**
 * Arrow style function, prototyping above defined "forEach" function.
 *
 * @example
 *      forEachArrow([2, 3, 5], (item) => {
 *          console.log(item ** 2);
 *      });
 *
 * @param {Array}     array
 * @param {Function}  fn
 * @param {Object}    [context = null]
 */
const forEachArrow = (array, fn, context = null) => {
    for (let i = 0; i < array.length; ++i) {
        fn.call(context, array[i]);
    }
};
