"use strict";

/**
 * JavaScript is not a class based language like Java for example. In class based language, building objects using classes
 *      and each of the object receives set of properties and methods from the class constructor. This seems similar to
 *      prototype inheritance in JavaScript, but it's a fundamentally different model.
 *
 * New class & extends keywords give possibility to build out objects using syntax that's similar to class based languages, however
 *      under the hood, JavaScript classes provide easier syntax creating a constructor functions and prototypes. So to
 *      say, that is referred to as syntactic sugar. Still building out constructors and prototypes, but with easier syntax,
 *      which is already a win in terms of code organization.
 *
 * Immediately Invoked Function Expression (IIFE)
 */
(function () {
    /**
     * Object Literal
     * Defined directly, that leads to a duplicated and redundant code in case another objects are needed with the same
     *      properties and methods.
     */
    const objectLiteral = {
        name: "John",
        surname: "Doe",
        age: 30,
        getInfo() {
            return (
                console.log(this.name),
                console.log(this.surname),
                console.log(this.age)
            );
        }
    };

    console.log("Object literal example: ");
    objectLiteral.getInfo();
    console.log("---------------------------------------------------------------------------");
    console.log();

    // Creating an object via constructor function
    const Human = function (name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    };

    /**
     * Prototype of an object gives possibility to reduce impact on the memory usage, by not copying the functionality
     *      throughout different objects, but rather inheriting it from a prototype object.
     */
    Human.prototype.getInfo = function () {
        return (
            console.log(this.name),
            console.log(this.surname),
            console.log(this.age)
        );
    };

    const person = new Human("John", "Doe", 30);
    console.log("Creating an object via constructor function");
    person.getInfo();
    console.log("---------------------------------------------------------------------------");
    console.log();
})();

/**
 * Creates modularity examples code (not to repeat code) with help of Immediately Invoked Function Expression (IIFE)
 *
 * @type {function(*, *, *): *}
 */
const examplesExecutionModule = (function (Figure, Square, Triangle) {
    const fig = new Figure();
    const square = new Square(5);
    const triangle = new Triangle(8, 4);

    return (
        console.log(`Definition of a ${fig.type}: ${fig.getFigureDefinition()}`),
        console.log("---------------------------------------------------------------------------"),
        console.log(),

        console.log(`Area of the ${square.type} with the side length of ${square.side} is ${square.area()}`),
        console.log("---------------------------------------------------------------------------"),
        console.log(),

        console.log(`Area of the ${triangle.type} with the side length of ${triangle.side} and height of ${triangle.height} is ${triangle.area()}`),
        console.log("---------------------------------------------------------------------------"),
        console.log()
    );
});

(function (examples) {
    /**
     * Creates Figure constructor, that has type prototype property
     *
     * @constructor
     */
    const Figure = function () {};
    Figure.prototype.type = "Figure";
    Figure.prototype.getFigureDefinition = () => {
        return "Formally, a geometric figure is any set of points on a plane or in space."
    };
    Figure.prototype.area = () => "Area is the quantity that expresses the extent of a two-dimensional figure or shape or planar lamina, in the plane.";

    const Square = function (side) {
        this.side = side;
    };
    // Extends Figure object, hence inherits its properties and methods
    Square.prototype = new Figure();
    // Overwrites parent property
    Square.prototype.type = "Square";
    Square.prototype.area = function () {
        return this.side * 4;
    };

    const Triangle = function (side, height) {
        this.side = side;
        this.height = height;
    };

    // Extends Figure object, hence inherits its properties and methods
    Triangle.prototype = new Figure();
    // Overwrites parent property
    Triangle.prototype.type = "Triangle";
    Triangle.prototype.area = function () {
        return this.height * this.side / 2;
    };

    examples(Figure, Square, Triangle);
})(examplesExecutionModule);

(function (example) {
    class Figure
    {
        constructor(type = "Figure") {
            this.type = type;
        }

        getFigureDefinition() {
            return "Formally, a geometric figure is any set of points on a plane or in space."
        }

        area() {
            return "Area is the quantity that expresses the extent of a two-dimensional figure or shape or planar lamina, in the plane.";
        }
    }

    class Square extends Figure
    {
        constructor(side, type = "Square") {
            super(type);
            this.side = side;
        }

        area() {
            return this.side * 4;
        }
    }

    class Triangle extends Figure
    {
        constructor(side, height, type = "Triangle") {
            super(type);
            this.side = side;
            this.height = height;
        }

        area() {
            return this.height * this.side / 2;
        }
    }

    example(Figure, Square, Triangle);
})(examplesExecutionModule);
