# HackYourFuture

HYF JavaScript 2 / Week 2 classwork

## Topics

• [Functions](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Functions)

• [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

• [Basic Array Manipulations](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/array_manipulation.md)

• [Map, Filter and Reduce](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/map_filter.md)

• [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

### Functions

A function is a "subprogram" that can be called by code external (or internal in the case of _recursion_) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function and the function will return a value.

Functions in JavaScript are considered as first-class objects. They can have properties and methods just like any other object. By default, a function in JavaScript returns _undefined_ unless a return statement is explicitly specified.

#### Defining Functions

1. Function declaration

    ```JavaScript
    function helloWorld() {
      // statements
      // return;
    }
    ```

2. Function expression

    ```JavaScript
    const helloWorld = function() {
      // statements
      // return
    }
    ```

3. Arrow functions

    ```JavaScript
    const helloWorld = () => {
      // statements
      // return
    };
    ```

#### Parameters vs. Arguments

Parameters are used when defining a function. They are the names created inside the function definition and used in statements inside the function body.

```JavaScript
// num1 and num2 are function parameters
const sum = (num1, num2) => num1 + num2;
```

Arguments, on the other hand, are the values a function receives from each parameter when the function is executed(invoked).

```JavaScript
const sum = (num1, num2) => num1 + num2;

// 10 and 20 are arguments which is received by the function through num1 and num2.
sum(10,20);
```

#### arguments object

[`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is an *Array-like object* accessible inside functions that contains the values of the arguments passed to that function. That means, except for the `length` property, no other array functions like `pop`, `push`, `map`, `filter` etc aren't available.

It's a local variable available inside all *non-arrow* functions. It is useful for functions called with more arguments than they are formally declared to accept.

```JavaScript
function longestString() {
  let longest = '';
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}

longestString('Hello','World.','How','are','things?');
```

However, with ES6, it is preferred to use the rest parameters as we can then access all arguments as an array rather than Array-like object.

```JavaScript
function longestString(...strings) {
  let longest = '';
  for (let i = 0; i < strings.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = strings[i];
    }
  }
  return longest;
}

longestString('Hello','World.','How','are','things?');
```

#### Default parameters

With ES6, default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

In JavaScript, function parameters default to undefined. However, it's often useful to set a different default value. This is where default parameters can help.

For example,

```JavaScript
// no default parameters; num1 and num2 would be undefined by default
const multiply = (num1, num2) => num1 * num2;

multiply(10,20); // 200
multiply(10);  // NaN
```

```JavaScript
const multiply = (num1 = 1, num2 = 1) => num1 * num2;

multiply(10,20);  // 200
multiply(10); // 10
```

### Arrow functions

Starting ES6, there is an alternate way to create a function as a function expression which is using an arrow function.

#### Syntax

```JavaScript
const one = (param1, param2, ..., paramN) => {
  // function statements go here
};

const two = (param1, param2, ..., paramN) => expression;
// or
const two = (param1, param2, ..., paramN) => {
  return expression
};
```

Two factors influenced the introduction of arrow functions:

1. shorter functions

    ```JavaScript
    const elements = [
      'Hydrogen',
      'Helium',
      'Lithium',
      'Beryllium'
    ];

    // Using a regular function expression
    elements.map(function(element) {
      return element.length;
    });

    // rewrite above using arrow functions
    elements.map((element) => {
      return element.length;
    });

    // When there is only one parameter, we can remove the surrounding parentheses:
    elements.map(element => {
      return element.length;
    });

    // When the only statement in an arrow function is `return`, we can remove `return` and remove the surrounding curly brackets
    elements.map(element => element.length);
    ```

2. no existence of this keyword.

Until arrow functions, every new function defined its own this value based on how the function was called:

- A new object in the case of a constructor.
- undefined in _strict mode_ function calls.
- The base object if the function is called as an "object method".
- etc

    ```JavaScript
    function Person() {
      this.age = 0;

      setTimeout(function growUp() {
        /*
         * In non-strict mode, growUp() defines `this` as the global object.
         * This is because it's invoked from * the global environment.
         */
        this.age++;
      }, 1000);
    }

    const p = new Person();
    ```

    This is resolved using arrow functions

    ```JavaScript
    function Person(){
      this.age = 0;

      setInterval(() => {
        this.age++; // |this| now properly refers to the Person object
      }, 1000);
    }

    const p = new Person();
    ```

### JSON

In a typical web application, there is always a communication required between client(browser) and server(just another computer running a program). While we write client side applications using JavaScript, the program running on the server can be written in any other language(Java, .NET, PHP etc).

Thus, in order for both programs to communicate, there should be a method which is understandable by both. Previously, XML used to be one of the way of sharing information between client and server. But nowadays, JSON is considered as a preferable way of communicating and exchanging information.

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. Even though it closely resembles JavaScript object literal syntax, it can be used independently from it.

```JSON
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

#### Arrays as JSON

Although a JSON looks similar to a JavaScript object, it can also be look like an array.

```JSON
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

If you open [this](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) link in browser, you will see the response coming in a JSON format.

What this means is that there is a program running on a machine which is reachable via `mdn.github.io` and when it receives a request `learning-area/javascript/oojs/json`, it executes a function which returns us the JSON we see on browser.

Sometimes, there are situations when we receive a raw JSON as a string or need to convert a JSON to a string for easy transfer among programs. Thus, JavaScript provides a global [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object which provides two methods to fulfil the purpose.

1. **parse()** - Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
2. **stringify()** - Accepts an object as a parameter, and returns the equivalent JSON string form.

Notes:

1. JSON is purely a data format — it contains only properties, no methods.
2. JSON requires double quotes to be used around strings and property names. Single quotes are not valid.
3. Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work.
