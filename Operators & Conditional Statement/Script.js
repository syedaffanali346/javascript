// Arithmetic Operaton
// let a = 5;
// let b = 2;
// console.log("a =",a ,"  b =",b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a + b =", a + b);
// //Modulus
// console.log("a % b =", a % b);
// //Exponentiation
// console.log("a ** b =", a ** b);

//Unary Operators
// let a = 5;
// let b = 2;
// console.log("a =",a ,"  b =",b);

// //Post Inc & Dec
// // a++; //a = a+1
// // b--; //a - a-1
// // console.log("a++ =",a);
// // console.log("b-- =",b);

// //Pre Inc & Dec
// console.log("++a =",++a);
// console.log("--b =",--b);

//Assignment Operators
// let a = 5;
// let b = 2;
// console.log("a =",a ,"  b =",b);
// // a += 4;
// // console.log("a =",a);
// // a -= 4;
// // console.log("a =",a);
// // a *= 4;
// // console.log("a =",a);
// a /= 4;
// console.log("a =",a);

//Comparision Operators

// let a = 5;
// let b = 2;
// console.log("5 greater than(>) 2,", a > b);
// console.log("5 less than(<) 2,", a < b);
// console.log("5 greater than is eqaul to(>=) 2,", a >= b);
// console.log("5 less than is eqaul to(<=) 2,", a<=b);

//Logical Operators

// let a = 5;
// let b = 7;
// console.log("a = ",a,"b = ",b);
// let cond1 = a > b;//false
// let cond2 = a === 5;//true
// console.log("condition 1 = a is greater than b");
// console.log("condition 2 = a is equal to 5");

// console.log("cond1 =",cond1);
// console.log("cond2 =",cond2);

// console.log("cond1 && cond2 =",cond1 && cond2);
// console.log("cond1 || cond2 =",cond1 || cond2);
// console.log("a is not greater than b",!(a > b), ",a is not equal to 5",!(a===5));

//Conditional Statement
// let num = 9;
// if (num % 2 === 0) {
//     console.log(num,"is even");
// }
// if (num % 2 !== 0) {
//     console.log(num,"is odd");
// }

// let age = 5;
// if (age >= 18) {
//     console.log("you can vote!");
// }else{
//     console.log("you cannot vote!");
// }

// let mode = "pink";
// let colour;
// if (mode ==="dark") {
//     colour = "black";
// } else if (mode === "light") {
//     colour = "white";
// }else if (mode === "blue") {
//     colour = "blue";
// }else{
//     colour = "default";
// }
// console.log("mode is",colour);

//Ternary Operator
// let age = 2;
// let res = age >= 18 ? "adult" : "not adult";
// console.log(res);


// let message = prompt("hello!");
// console.log(message);

// let num = prompt("Enter a number!");
// if (num % 5 ===0) {
//     console.log(num,"is multiple of 5");
// }else{
//     console.log(num,"is NOT multiple of 5");
// }

//||
// let score = prompt("Enter a score(0-100)");
// let grade;
// if (score >= 80 && score <= 100) {
//     grade = "A+";
// }else if(score >= 70 && score <= 79){
//     grade = "A";
// }else if(score >= 60 && score <= 69){
//     grade = "B";
// }else if(score >= 50 && score <= 59){
//     grade = "C";
// }else if(score >= 40 && score <= 49){
//     grade = "D";
// }else if(score < 40 ){
//     grade = "Fail";
// }else{
//     grade = "Enter a vaile score!";
// }
// console.log(grade);

//Nullish coalescing operator
let val1;
val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = undefined ?? 10 ?? 12;
// val1 = undefined ?? null ?? 65;
// console.log(val1);

// Terniary operator
//condition  ? true : false
const teaPrice = 100;
// teaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");

let Obj = {};
if (Object.keys(Obj).length === 0) {
    // console.log("object is empty!");
}