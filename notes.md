# The Dev Workflow

* Approach as a puzzle
* Break your problem down into small pieces
* look up for syntax (MDN, stack overflow)
* test what you've found (in the node repl or in your code, use lots of console.log)
* What over How:
  - What is happening?
  - What did you want to have happen?
* always try to break your own code (entering unexpected inputs, as users rarely behave)

Your code lies to you. The outcome tells you the truth. When you have an error, read the error. Use diagnostic tools a lot, like console.log

## Googling Tips
 search for MDN something - great resource for Javascript
 Example: Let's say I want to convert a string to uppercase, so I google "mdn string uppercase". The first result was right on the money!

 If you want to know about what you can do with a particular kind of variable - Array or String, for example - google "mdn array" and look on the left-hand side for definitions of Array.prototype.<function here>.

 Think of prototype as master definition of a particular type. Everything attached to prototype is available to all things based on it. In other words, Array.prototype.push() means that you can use push() with all arrays.

## What we did
We worked slowly through each step of creating the problem.
* how to get the inputs from the terminal (process.argv)
* how to remove the first two elements (.slice(2))
* how to turn the elements from strings to numbers (Number(element))
* how to how to check if the result is whole number (number % 1)
* adding the numbers together
* returning the numbers
* benchmarking (console.log and Date.now(), to test which type of loop was more efficient)
* refactoring (splitting into functions, make dry, add comments)

For each problem you come across, search for the answer, test out what is suggested, and test it in your own code in small pieces. Make sure you test regularly after adding or changing anything, if you make a lot of changes all at once you might not know what is causing the error.

Good luck in the rest of week 1!

Erica
