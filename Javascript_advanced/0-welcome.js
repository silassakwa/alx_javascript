#!/usr/bin/node
function welcome(firstName, lastName) {
    // Concatenate firstName and lastName with a space in between
    let fullName = firstName + ' ' + lastName;
  
    // Define the inner function displayFullName
    function displayFullName() {
      alert('Welcome ' + fullName + '!');
    }
  
    // Call the inner function displayFullName
    displayFullName();
  }
  
  // Call the welcome function
  welcome('John', 'Doe');