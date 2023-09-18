#!/usr/bin/node

function divideBy(firstnumber) {
    return function(secondnumber) {
        return secondnumber / firstnumber;
    }
}

function addBy(firstnumber) {
    return function(secondnumber) {
        return firstnumber + secondnumber;
    }
}

addby100 = addBy(100);
addby1000 = addBy(1000);
divideby10 = divideBy(10);
divideby100 = divideBy(100);

console.log(addby100(20));
console.log(divideby10(20));
console.log(divideby100(200));
console.log(addby1000(20));