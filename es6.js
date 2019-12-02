console.time("JavaScript Execution Time");

// Immediately Invoked JavaScript Function Expression
(function () {
    const JAVASCRIPT_VERSION_FEATURES = 6;

    // Template string
    console.log(`Welcome to ECMAScript${JAVASCRIPT_VERSION_FEATURES} (ES${JAVASCRIPT_VERSION_FEATURES})\n`);

    console.log("-----------------------------------------------------------------------\n");

    /**
     * Array function with one parameter, that returns the result directly.
     *
     * @param num
     *
     * @returns {number}
     */
    const arrowFunctionSquare = num => num ** 2;

    /**
     * Arrow function with more than one parameter and more than one lines of function body.
     *
     * @param x
     * @param y
     */
    const arrowFunctionAdd = (x, y) => {
        console.log(`${arrowFunctionAdd.name}...\n`);

        console.log(`${x} + ${y} equals to ${x + y}`);

        console.log("-----------------------------------------------------------------------\n");
    };

    /**
     * Block level scoping is supported by let and const keywords.
     *      const can't be re-declared or re-assigned.
     *
     * @type {Function}
     */
    const letConstKeyword = (function () {
        console.log(`${letConstKeyword.name}...\n`);

        var x = 100;
        const y = 200;

        if (10 / 2 === 5) {
            let x = 300;
            const y = 400;

            console.log("Inside if statement block");
            console.log(`x => ${x} and y => ${y}\n`);
        }

        console.log("Outside if statement block");
        console.log(`x => ${x} and y => ${y}`);
        console.log("-----------------------------------------------------------------------\n");
    });

    /**
     * Generator that yields value to the called function by pausing it's execution.
     *
     * @param list
     *
     * @returns {IterableIterator<*>}
     */
    const generator = function* (list) {
        for (let i = 0; i < list.length; ++i) {
            yield list[i];
        }
    };

    /**
     * Invokes generator function.
     */
    const invokeGenerator = () => {
        console.log(`${invokeGenerator.name}...\n`);

        let fruitsList = [
            "Apple",
            "Apricot",
            "Avocado",
            "Banana",
            "Blackberry",
            "Cherry",
            "Lemon",
        ];

        const fruits = generator(fruitsList);

        let interval = setInterval(() => {
            let fruit = fruits.next();

            if (true === fruit.done) {
                clearInterval(interval);

                console.log("-----------------------------------------------------------------------\n");
            } else {
                console.log(fruit.value);
            }

        }, 1000);
    };

    /**
     * Example of spread operator.
     *
     * @param wildAnimals
     */
    const spreadOperator = (...wildAnimals) => {
        console.log(`${spreadOperator.name}...\n`);

        const homeAnimals = [
            "dog",
            "cat",
            "cow"
        ];

        const animals = [...homeAnimals, ...wildAnimals];

        console.log(animals);
        console.log("-----------------------------------------------------------------------\n");
    };

    /**
     * JavaScript Set data type.
     *
     * @param list
     */
    const setDataType = (list = [22, 2, 2, 4, 5, 6, 5, 8, 10, 2]) => {
        console.log(`${setDataType.name}...\n`);

        const set = new Set(list);
        set.add(2);
        set.add(404);

        set.delete(6);

        console.assert(
            list.length === set.size,
            "Elements quantity in ordinary list and in set is different",
            list,
            set
        );

        console.log("-----------------------------------------------------------------------\n");
    };

    /**
     * JavaScript Map data type.
     *
     * @param list
     */
    const mapDataType = (list = [101, 303, 202, 505, 404]) => {
        console.log(`${mapDataType.name}...\n`);

        const mappings = new Map([
            [
                new Date(), "today",
            ],
            [
                num => Math.pow(num, 3),
                "This is a function, that squares 3 times the specified number",
            ],
            [
                "sample",
                [
                    "one",
                    "two",
                    "three",
                ]
            ]
        ]);

        mappings.set(9, list);

        console.log(mappings);

        for (let key of mappings.keys()) {
            if (typeof key === "function") {
                console.log(key(5));
            } else {
                console.log(key);
            }
        }

        for (let value of mappings.values()) {
            console.log(value);
        }

        for (let entry of mappings.entries()) {
            console.log(entry);
        }

        console.log("-----------------------------------------------------------------------\n");
    };

    /**
     * Enhanced object literals, namely:
     *
     * Before:
     *      @example
     *      var obj = {
     *          getNumber: function(n) {
     *              return ...;
     *          }
     *      };
     *
     * After:
     *
     *      @example:
     *      let obj = {
     *          getNumber(n) {
     *              return ...;
     *          }
     *      };
     */
    const enhancedObjectLiterals = () => {
        console.log(`${enhancedObjectLiterals.name}...\n`);

        const obj = {
            author: "John Doe",
            skills: [
                "PHP",
                "Python",
                "GoLang",
                "JavaScript",
                "MySQL",
                "PostgreSQL",
                "Node",
                "React",
                "Vue",
            ],
            action() {
                this.skills.forEach((v) => {
                    console.log(`${this.author} knows ${v}`);
                });
            }
        };

        obj.action();

        console.log("-----------------------------------------------------------------------\n");
    };

    /**
     * Scope enhancement by arrow functions
     */
    const scopeEnhancement = () => {
        console.log(`${scopeEnhancement.name}...\n`);

        const obj = {
            husband: "James Smith",
            wife: "Jannie Smith",
            cars: [
                "BMW",
                "Mercedes",
                "Porsche",
            ],
            actionOldWay() {
                // Bind is needed if not using arrow function inside forEach
                this.cars.forEach(function (v) {
                    console.log(`${this.wife} ownes ${v}`);
                }, this);
            },
            actionArrowWay() {
                this.cars.forEach((v) => console.log(`${this.husband} ownes ${v}`));
            }
        };

        obj.actionOldWay();
        obj.actionArrowWay();

        console.log("-----------------------------------------------------------------------\n");
    };

    /**
     * Symbol new type of JavaScript primitive, such are number, string, etc...
     *      Often used as unique IDs.
     */
    const SymbolPrimitive = () => {
        console.log(`${SymbolPrimitive.name}...\n`);

        const obj = {
            id: "software-developer",
            author: "Jannie Smith",
            age: 30,
            profession: "Programmer",
        };

        const id = Symbol();

        obj[id] = 2001;

        console.log(obj);

        console.log("-----------------------------------------------------------------------\n");
    };

    // Function calls starts from below

    console.log(`${arrowFunctionSquare.name}...\n`);
    console.log(`4 in square equals to ${arrowFunctionSquare(4)}`);
    console.log("-----------------------------------------------------------------------\n");

    arrowFunctionAdd(5, 10);
    letConstKeyword();
    spreadOperator("Lion", "Tiger", "Wolf");
    setDataType();
    mapDataType();
    enhancedObjectLiterals();
    scopeEnhancement();
    SymbolPrimitive();
    invokeGenerator();

    const spacePeople = () => {
        return new Promise((resolve, reject) => {
            const API_URL = "http://api.open-notify.org/astros.json";

            const request = new XMLHttpRequest();
            request.open("GET", API_URL);
            request.onload = () => {
                if (request.status === 200 && request.readyState === 4) {
                    resolve(JSON.parse(request.response));
                } else {
                    reject(Error(request.statusText));
                }
            };

            request.onerror = err => reject(err);

            request.send();
        });
    };

    const getPeopleFromSpace = () =>
        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(list => list.people)
            .then(people => people.forEach((v) => console.log(v.name)));
})();

console.timeEnd("JavaScript Execution Time");
console.log("\n");

const stuff = seconds => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const callAsync = async function () {
    console.log("Zero seconds");

    await stuff(2).then(() => console.log("First Finished"));
    console.log("Two seconds");

    await stuff(5).then(() => console.log("Second Finished"));
    console.log("Six seconds");
};

(() => {
    class Human
    {
        constructor(name, surname, age) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this._names = [];
        }

        set nickName(nick) {
            this._names.push(nick);
        }

        get nickName() {
            return this._names.join(", ");
        }
    }

    const o = new Human("John", "Doe", 30);

    o.nickName = "Jannie";
    o.nickName = "Smith";

    console.log(o.nickName);
})();