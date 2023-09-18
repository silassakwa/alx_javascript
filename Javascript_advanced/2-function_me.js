#!/usr/bin/node
function welcomeMessage(fullname)
{
    return function()
    {

    alert('Welcome'+fullname)
};
}

var guillaume=welcomeMessage("Guillaume");
var alex=welcomeMessage("Alex");
var fred=welcomeMessage("Fred")

guillaume();
alex();
fred();