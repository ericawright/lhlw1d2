# The Dev Workflow

- Approach as a puzzle
- Break your problem down into small pieces
- look up for syntax (MDN, stack overflow)
- test what you've found (in the node repl or in your code, use lots of `console.log`)
- What over How
  - What is happening?
  - What did you want to have happen?
- always try to break your own code (entering unexpected inputs, users rarely behave)

we want to write functions that make sense,  so
   addTwoNumbersTogether(3) //bad
doesn't make sense

Your code lies to you. The outcome tells you the truth. When you have an error, read the error. Use diagnostic tools a lot, like console.log

## Googling Tips
 search for MDN something - great resource for Javascript
 Example: Let's say I want to convert a string to uppercase, so I google "mdn string uppercase". The first result was right on the money!

 If you want to know about what you can do with a particular kind of variable - Array or String, for example - google "mdn array" and look on the left-hand side for definitions of Array.prototype.<function here>.

 Think of prototype as master definition of a particular type. Everything attached to prototype is available to all things based on it. In other words, Array.prototype.push() means that you can use push() with all arrays.

## What we did
We worked slowly through each step of creating the problem.
1. how to get the inputs from the terminal (process.argv)
2. how to remove the first two elements (.slice(2))
3. how to turn the elements from strings to numbers (Number(element))
4. how to how to check if the result is a real number or NaN (isNaN)
5. adding the numbers together
6. returning the numbers
7. benchmarking (console.log and Date.now(), to test which type of loop was more efficient)
8. refactoring (splitting into functions, make dry)

For each problem you come across, search for the answer, test out what is suggested, and test it in your own code.

Good luck in the rest of week 1!

Erica
