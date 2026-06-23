//1. bmi calculate
import promptSync from 'prompt-sync';
const prompt = promptSync({});

let weight = Number(prompt("Enter weight in kilograms: "));
let height = Number(prompt("Enter height in meters: "));

let bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));
console.log("-----------")

//2.score message
let score = Number(prompt("Game Score: "));
console.log("Your score is " + String(score) + ".");
console.log("-----------")

//3.average rating
let rating = Number(prompt("Average Rating: "));
console.log("Rounded Rating:", Math.round(rating));
console.log("-----------")

//4.list of products
let products = prompt("Enter product names separated by commas: ");
let productList = products.split(",");
console.log("List of Products:");
for (let item of productList) {
    console.log(item.trim());
}
console.log("-----------")

//5.string
let str1 = prompt("Enter a string: ");

console.log(str1.length);
console.log(str1.repeat(2));
console.log(str1[0]);
console.log(str1.slice(0, 3));