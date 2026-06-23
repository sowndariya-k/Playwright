import fs from 'fs';

const inputs = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\r?\n/);

let index = 0;

// --------------------------------------------------
// 1. Movie Club
// --------------------------------------------------

let age = Number(inputs[index++]);

if (age < 0) {
    console.log("Invalid Age");
}
else if (age < 13) {
    console.log("Cartoon Club");
}
else if (age < 20) {
    console.log("Teens Club");
}
else {
    console.log("Not Allowed");
}

console.log("-----------");

// --------------------------------------------------
// 2. Odd / Even Transformation
// --------------------------------------------------

let currentNumber = Number(inputs[index++]);

if (currentNumber % 2 !== 0) {
    currentNumber = (3 * currentNumber) + 1;
}
else {
    currentNumber = currentNumber / 2;
}

console.log(currentNumber);

console.log("-----------");

// --------------------------------------------------
// 3. Code Based Operation
// --------------------------------------------------

let code = Number(inputs[index++]);

if (code === 1) {

    let num1 = Number(inputs[index++]);
    let num2 = Number(inputs[index++]);

    console.log(num1 + num2);

}
else if (code === 2) {

    let num1 = Number(inputs[index++]);
    let num2 = Number(inputs[index++]);

    console.log(num1 * num2);

}
else if (code === 3) {

    let str1 = inputs[index++];
    let str2 = inputs[index++];

    console.log(str1 + str2);
}
else {
    console.log("Invalid Code");
}

console.log("-----------");

// --------------------------------------------------
// 4. Baby Lion
// --------------------------------------------------

let totalAnimals = Number(inputs[index++]);
let rabbits = Number(inputs[index++]);
let deer = Number(inputs[index++]);
let birds = Number(inputs[index++]);
let squirrels = Number(inputs[index++]);

let countedAnimals = rabbits + deer + birds + squirrels;

if (countedAnimals > totalAnimals) {

    console.log("Counted wrongly");

}
else if (countedAnimals < totalAnimals) {

    console.log("Baby lion is mischievous");

}
else {

    console.log("Baby lion is well behaved");

}

console.log("-----------");

// --------------------------------------------------
// 5. Store Cost Calculation
// --------------------------------------------------

let customerName = inputs[index++];
let quantity = Number(inputs[index++]);

let costPerItem = 0;

if (quantity < 10) {
    costPerItem = 12;
}
else if (quantity < 100) {
    costPerItem = 10;
}
else {
    costPerItem = 7;
}

let totalCost = quantity * costPerItem;

console.log(customerName, totalCost);