//For Loop
// for(let i = 1; i<=5; i++){
//     console.log("My Loop");
// }

// for(let i = 1; i<=10; i++){
//     const num = i
//     if (num == 5) {
//         console.log("5 is best number!")
//     }
//     console.log(num);
// }

for(let i = 1; i<=10; i++){
    const num = i
    if (num == 5) {
        // console.log("5 is best number!")
        break; // jab num ko 5 milega tw aage se print nhi hoga yani sirf 4 tak print hoga
    }
    // console.log(num);
}

for(let i = 1; i<=10; i++){
    const num = i
    if (num == 5) {
        // console.log("5 is best number!")
        continue; // jab num ko 5 milega tw sirf 5 print nhi hoga baki sab print hoga
    }
    // console.log(num);
}

// let sum = 0;
// for (let i = 1; i <=5; i++) {
//     sum = sum+i;
// }
// console.log(sum);

//While Loop
// let i = 1;
// while (i<=5) {
//     console.log("i = ",i);
//     i++;
// }

//Do While
// let i = 1;
// do{
//     console.log("from do while,i = ",i);
//     i++;
// }while(i<=5);

//for of loop
// let str = "Syed Affan Ali";
// let size = 0;
// for(let val of str){
//     console.log("value = ",val);
//     size++;
// }
// console.log("Digits of",str,"is",size);

let arr = [1,2,3,4,5];
for (const val of arr) {
    // console.log(val);
}

//for in loop
// let student = {
//     fullName : "Affan",
//     age : 18,
//     cgpa : 2.7,
//     isPass : true,

// }
// for(let key in student){
//     console.log("Key =",key,"Value =",student[key]);
// }

//Find even numbers of between 0 and 100
// for (let i = 0; i <=100; i++) {
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }

//Creating a game
// let gameNum = 25;
// // let userNum = prompt("Enter A number amoung 1 to 50");
// while (userNum != gameNum) {
//     // userNum = prompt("You entered wrong number, Please try again!");
// }
// console.log("Congratulations! You entered right number..");

//String 
// let str = "ApnaCollege!";
// lent = str.length;
// console.log(lent,str[5]);

//Template Literals
// let obj = {
//     item : "Pen",
//     price : 10,
// }
// let templiteral = `The cost of ${obj.item} is ${obj.price}Rs.`;
// console.log(templiteral);
// console.log("The cost of", obj.item,"is",obj.price,"Rs.");
// let calc = `This is a template literal ${2+2+6}.`;
// console.log(calc);

//Escape Character
//console.log("This\tis an\nEscape Character!");

// Methods in String
// let str = "     This Is Buit-in Method Of String In JavaScript.     ";
// let str1 = "This is";
// let str2 = " concatinate";
// let str3 = " method.";
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(8,15));
// console.log(str.slice(15));
// console.log(str.replace("JavaScript","Js"));
// console.log(str.replaceAll("i","R"));
// console.log(str1.concat(str2,str3));
// console.log(str.charAt(15));

//Giving generated username to user about his full name
// let fullName = prompt("Enter Your Full Name Without Spaces!");
// // let lent = fullName.length;
// generatedName = `@${fullName.toLowerCase()}${fullName.length}`;
// console.log(generatedName);


//Map
const map = new Map();
map.set("PK","Pakistan");
map.set("USA","United States of America");
map.set("FR","France");
// map.set("PK","Pakistan");  // ye unique value nhi he islye set nhi hogi
// console.log(map);
for (const key of map) {
    // console.log(key);
}
for (const [key] of map) {
    // console.log(key);
}
for (const [key,value] of map) {
    console.log(key,":-",value);
}