#!/usr/bin/node
const { addMeMaybe } = require('./102-add_me_maybe');

// Define a function that adds 1 to the given number
function addOneAndLog(number) {
  console.log(number + 1);
}

// Call the `addMeMaybe` function to execute `addOneAndLog` with an incremented number
addMeMaybe(5, addOneAndLog);