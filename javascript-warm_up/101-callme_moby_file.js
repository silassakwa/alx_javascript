const { callMeMoby } = require('./101-call_me_moby');

// Define a function to be called multiple times
function sayHello() {
  console.log("Hello, Moby!");
}

// Call the `callMeMoby` function to execute `sayHello` 5 times
callMeMoby(5, sayHello)