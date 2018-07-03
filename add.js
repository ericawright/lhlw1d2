// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. if any argument is not a whole number, skip it.
// Do support negative numbers


// Get the time now for benchmarking purposes
// var startTime = Date.now();
// console.log(startTime);

function addNumbers(arrayOfNumbers) {
  var tempsum = 0;
  for( var i = 0; i < arrayOfNumbers.length; i++) {
    // Turn argv strings into a number
    var newNumber = Number(arrayOfNumbers[i]);
    if (newNumber % 1 === 0) {
      tempsum += newNumber;
    }
  };
  return tempsum;
}

// make sure to slice off the first two elements as they are references to node and the file locations
var numbers = process.argv.slice(2);

// for benchmarking use a large array instead of the argv entry
// var numbers =  Array(100000000).fill(1);

console.log("The result is: ", addNumbers(numbers)); // from argv
console.log("The result is: ", addNumbers([1, 1])); // run again using different numbers

// for benchmarking, subract the start time from the current time to see how much time has passed.
// var difference = Date.now() - startTime;
// console.log("the number of milliseconds: ", difference);


// the for...of way of looping through the numbers
// benefits, named variables are more readable vs arrayOfNumbers[i].
// for (var number of arrayOfNumbers) {
//   var realNumber = Number(number);
//   if(realNumber % 1 === 0) {
//     sum += realNumber;
//   }
// }

// the forEach way of looping through the numbers
// pro: named variables are more readable vs arrayOfNumbers[i].
// con: we benchmarked this, and it is slower than a for loop.
// arrayOfNumbers.forEach(function(number){
//   var realNumber = Number(number);
//   if(realNumber % 1 === 0) {
//     sum += realNumber;
//   }
// }
