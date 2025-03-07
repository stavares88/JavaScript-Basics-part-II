// 1. Define and invoke an anonymous function which takes a number and returns its square.
// If input is 2, output should be 4.

let result = (function (num) {
    return num * num;
})(2);
console.log(result); 

// 2. Define an IIFE function which takes a personName as input and displays a greeting message containing the personName.
// If input is "Harry", output should be "Hello Harry, Welcome to Great Learning!"

(function (name) {
    console.log("Hello " + name + ", Welcome to GreatLearning!");
})("Harry");

// 3. Define a global array variable containing 3 numbers. 
// Define a function which increments the value of each of the elements of this array by 2. 
// Display the array after you have invoked this function.

let globalArray = [1, 3, 5];
function incrementArrayValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 2;
    }
    console.log(arr);
}
incrementArrayValues(globalArray); 


// 4. Create a "course" object having following information - 
// courseName as "Computer Science", durationInMonths as 24, level as "Beginner". 
// Display object information.
// Change the value of level as "Intermediate". 
// Display object information again.
let course = {
    courseName: "ComputerScience",
    durationInMonths: 24,
    level: "Beginner"
};
console.log(course); 
course.level = "Intermediate";
console.log(course); 


// 5. Given an array "students" of JSON objects write a code to iterate through each of these codes and extract first name and last name of each students.

var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" },
    { firstName: "Draco", lastName: "Malfoy", hosue: "Slytherin" },
    { firstName: "Thomas", lastName: "Riddle", house: "Slytherin" },
];
students.forEach(function (student) {
    console.log(student.firstName + " " + student.lastName);
});

// 6. Given a function doubleNumber which takes a number as an argument and returns its double value.
// Write a function which takes 2 arguments- 1st an array of numbers and 2nd the doubleNumber function as a callback function
// This function should iterate through each of the array number and use the doubleNumber function to double it.
// In the end it should display the updated array

function doubleNumber(num) {
    return num * 2;
}

function doubleArray(arr, callback) {
    let doubledArray = arr.map(callback);
    console.log(doubledArray);
}
doubleArray([1, 2, 3], doubleNumber); 


// 7. Implement a function called `multiplyBy` that multiplies a number by a specific factor using an IIFE (Immediately Invoked Function Expression).

let multiplyBy = (function () {
    let factor = 4; 
    return function (number) {
        return number * factor;
    };
})();
console.log(multiplyBy(5)); 


//8. Using the `apply` method, write a function that finds the maximum number in an array. You can use Math class's built-in max() method for this task.

let numbers = [4, 2, 8, 6];
function findMax() {
    return Math.max.apply(null, this);
}
console.log(findMax.call(numbers)); // Output: 8

//9. Declare an object named "car" with an empty object as its initial value. 
// Add the properties "make" and "model" with values "Toyota" and "Camry" respectively.

let car = {};
car.make = "Toyota";
car.model = "Camry";
console.log(car); 


//10. Given an array "students" which is a collection of JavaScript objects where each object consists of information regarding one student.  
// Define a function displayByKey() which takes this array of objects and a keyName(as string) as arguments and displays the value of the key for each of the JavaScript objects.
var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];
function displayByKey(students, key) {
    students.forEach(function (student) {
        console.log(student[key]);
    });
}
displayByKey(students, "firstName"); 