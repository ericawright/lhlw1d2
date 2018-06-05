// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. if any arguement is not a whole number, skip it.
// Do support negative numbers

// We used this code to do benchmarking testing a for loop vs a for...of loop. the foor loop won.
// var longListOfNumbers = [];
// for (i = 0; i < 99999; i++) {
//   longListOfNumbers.push(1);
// }
// var startTime = Date.now();


// break code into tiny reusable chunks
function isWholeNumber(number) {
  return (!isNaN(number) && number % 1 === 0);
};

// use a function so that it is reusable
function sumNumbers(arrayOfNumbers) {
  var sum = 0;
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    var number = Number(arrayOfNumbers[i]);
    if (isWholeNumber(number)) {
      sum += number;
    }
  }
  return sum;
};

var argvNumbers = process.argv.slice(2);
console.log("The result is: ", sumNumbers(argvNumbers));
console.log("The result is: ", sumNumbers([0, 10, "apple"]));

// console.log("time the program took", Date.now() - startTime)

// the for...of way of looping through the numbers
// benefits, named variables are more readable vs number[i].
// for (var number of arrayOfNumbers) {
//   var realNumber = Number(number);
//   if(!isNaN(realNumber) && realNumber % 1 === 0) {
//     sum += realNumber;
//   }
// }
