#!/usr/bin/node

function createClassRoom(numberOfStudents) {
    var studentSeats = [];

    function studentSeat(seat) {
        return seat;
    };

    for (var i = 0; i < numberOfStudents; i++) {
        var student = studentSeat(i + 1);
        studentSeats.push(student);
    }

    return studentSeats;
}

var classroom = createClassRoom(10);
console.log(classroom);