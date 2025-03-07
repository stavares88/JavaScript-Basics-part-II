// 1. Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and the checkEven function as arguments.
// This filterEvens function will filter out  only even numbers using the checkEven function and generate a new array of the even numbers.

function checkEven(number) {
    return number % 2 === 0;
}
function filterEvens(numbers, checkEven) {
    return numbers.filter(checkEven);
}
let numbersArray = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
console.log(filterEvens(numbersArray, checkEven)); 

//2. Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.

let number = 6;
let factorial = (function (n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * arguments.callee(n - 1);
    }
})(number);
console.log(factorial); 


//3. The product1 object (which is already given) consists of title, price and category information of Nike Shoes.
// The description() method describes the product using its properties.
// Your task is to create a product2 object which consists of the title, price and category information of Sony TV.
// Next, use the call() method to invoke the description() method of product1 on product2.
// This should display the details of product2 on the console. 

var product1 = {
    title: "Nike Shoes",
    price: 30,
    category: "Shoes",
    description: function (){
        return "Title: " + this.title + " Price: " + this.price + " Category: " + this.category;
    }
}

var product2 = { 
    title: "Sony TV",
    price: 100, 
    category: "Electronics",
};

console.log(product1.description.call(product2));


//4. Given an araay of person objects, define a function to find oldest person object.
let persons = [
    { name: "Harry", age: 12 },
    { name: "Ron", age: 11 },
    { name: "Hermione", age: 13},
];
let oldestPerson = persons.reduce(function (prev, current) {
    return (prev.age > current.age) ? prev : current;
}, {});
console.log(oldestPerson); 

//5.  Create a function that calculates the sum of an array using IIFE function.

let sum = (function () {
    let numbers = [1, 2, 3, 4, 5];
    return numbers.reduce(function (acc, current) {
        return acc + current;
    }, 0);
})();
console.log(sum);