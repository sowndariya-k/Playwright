import fs from 'fs';

const inputs = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\r?\n/);

let index = 0;

// --------------------------------------------------
// 1. Exam Eligibility Based on Attendance
// --------------------------------------------------

let classesHeld = Number(inputs[index++]);
let classesAttended = Number(inputs[index++]);

let attendance = (classesAttended / classesHeld) * 100;

if (attendance >= 75) {
    console.log(`${attendance}% Allowed`);
}
else {
    let medicalCause = inputs[index++];

    if (medicalCause.toUpperCase() === 'Y') {
        console.log(`${attendance}% Allowed`);
    }
    else {
        console.log(`${attendance}% Not Allowed`);
    }
}

console.log("-----------");

// --------------------------------------------------
// 2. Days in a Month
// --------------------------------------------------

let month = Number(inputs[index++]);
let year = Number(inputs[index++]);

let monthName = "";
let days = 0;

switch (month) {
    case 1:
        monthName = "January";
        days = 31;
        break;

    case 2:
        monthName = "February";

        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
            days = 29;
        } else {
            days = 28;
        }
        break;

    case 3:
        monthName = "March";
        days = 31;
        break;

    case 4:
        monthName = "April";
        days = 30;
        break;

    case 5:
        monthName = "May";
        days = 31;
        break;

    case 6:
        monthName = "June";
        days = 30;
        break;

    case 7:
        monthName = "July";
        days = 31;
        break;

    case 8:
        monthName = "August";
        days = 31;
        break;

    case 9:
        monthName = "September";
        days = 30;
        break;

    case 10:
        monthName = "October";
        days = 31;
        break;

    case 11:
        monthName = "November";
        days = 30;
        break;

    case 12:
        monthName = "December";
        days = 31;
        break;
}

console.log(`${monthName} ${year} has ${days} days`);

console.log("-----------");

// --------------------------------------------------
// 3. Season Finder
// --------------------------------------------------

let seasonMonth = Number(inputs[index++]);

if (seasonMonth >= 3 && seasonMonth <= 5) {
    console.log("Spring");
}
else if (seasonMonth >= 6 && seasonMonth <= 8) {
    console.log("Summer");
}
else if (seasonMonth >= 9 && seasonMonth <= 11) {
    console.log("Autumn");
}
else if (seasonMonth === 12 || seasonMonth === 1 || seasonMonth === 2) {
    console.log("Winter");
}
else {
    console.log("Invalid month");
}

console.log("-----------");

// --------------------------------------------------
// 4. Income Tax Calculator
// --------------------------------------------------

let income = Number(inputs[index++]);
let tax = 0;

if (income <= 250000) {
    console.log("You are exempted from tax");
}
else if (income <= 500000) {

    tax = (income - 250000) * 0.10;
    console.log("Tax amount is", tax);

}
else if (income <= 1200000) {

    tax = (250000 * 0.10) +
          ((income - 500000) * 0.20);

    console.log("Tax amount is", tax);

}
else {

    tax = (250000 * 0.10) +
          (700000 * 0.20) +
          ((income - 1200000) * 0.30);

    console.log("Tax amount is", tax);
}