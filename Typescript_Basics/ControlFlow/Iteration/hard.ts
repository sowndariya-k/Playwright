import fs from "fs";

const inputs = fs.readFileSync(0, "utf8")
                 .trim()
                 .split(/\s+/);

let index = 0;

// 1. Ding Dong
let start = Number(inputs[index++]);
let end = Number(inputs[index++]);

for (let i = start; i <= end; i++) {
    if (i % 10 === 0) {
        process.stdout.write("dong ");
    } else if (i % 5 === 0) {
        process.stdout.write("ding ");
    } else {
        process.stdout.write(i + " ");
    }
}
console.log("\n-----------");


// 2. Armstrong Number
let num = Number(inputs[index++]);
let temp = num;
let digits = num.toString().length;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = Math.floor(temp / 10);
}

console.log(sum === num);
console.log("-----------");


// 3. Min, Max and Average
let min = 100;
let max = 0;
let total = 0;
let count = 0;

while (true) {
    let price = Number(inputs[index++]);

    if (price === -1) {
        break;
    }

    if (price < min) {
        min = price;
    }

    if (price > max) {
        max = price;
    }

    if (price >= 5 && price <= 30) {
        total += price;
        count++;
    }
}

let average = count > 0 ? total / count : 0;

console.log("Maximum:", max);
console.log("Minimum:", min);
console.log("Average:", average);
console.log("-----------");


// 4. Amicable Pair
let x = Number(inputs[index++]);
let y = Number(inputs[index++]);

let sumX = 0;
let sumY = 0;

for (let i = 1; i < x; i++) {
    if (x % i === 0) {
        sumX += i;
    }
}

for (let i = 1; i < y; i++) {
    if (y % i === 0) {
        sumY += i;
    }
}

console.log(sumX === y && sumY === x);
console.log("-----------");


// 5. Prime Factors
let number = Number(inputs[index++]);

for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
        process.stdout.write(i + " ");
        number = number / i;
    }
}
console.log();