// function myFunction() {
//     console.log("Hellow World!");
//     console.log("I'm learning Js");
// }

// myFunction();
// myFunction();

// function add(a,b) {
//     console.log("Function with parameter",a+b);
// }

// add(2,6);
// add(6565,5454);

// function sub(x,z) {
//     s = x + z;
//     console.log("before return");
//     return s;
//     console.log("after return");
// }
// let val = sub(6,9);
// console.log(val);

// Arrow Functions  
// const arrowSum = (a, b) => {
//     console.log(a + b);
// };
// arrowSum(5,66);

// const arrowMul = (x,y)=>{
//     return x*y;
// }
// let val = arrowMul(5,8);
// console.log(val);

// const printHello = ()=>{
//     console.log("hellow");
// }
// printHello();


// Find vowels in the given string which taken from user by prompt
// let getString = prompt("Enter a Text for finding vowels in it!");
// function countVowels(str) {
//     let count = 0;
//     for(let char of str){
//         if (char.toLowerCase() === "a" || 
//         char.toLowerCase() === "e" || 
//         char.toLowerCase() === "i" || 
//         char.toLowerCase() === "o" || 
//         char.toLowerCase() === "u") {
//             console.log(char);
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels(getString);

// Find vowels in the string using Arrow Function
// const countVowels = (str)=>{
//     let count = 0;
//     for(let char of str){
//         if (char.toLowerCase() === "a" ||
//         char.toLowerCase() === "e" ||
//         char.toLowerCase() === "i" ||
//         char.toLowerCase() === "o" ||
//         char.toLowerCase() === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("apna college");

// forEach Loop 
// let arr = [1, 2, 3, 4, 5];
// console.log("forEach Loop -- callbackfunction -- simple function");
// arr.forEach(function myFunc(val) { //callBackFunction --Simple Function
//     console.log(val);
// })
// console.log("forEach Loop -- callbackfunction -- arrow function");
// arr.forEach((val,index,array)=> { //callBackFunction --Arrow Function
//     console.log(val,index,array);
// })

// find square values of each given values using for each loop with different syntax
// let array = [1, 2, 3, 4, 5];
// let calcSquare = (val)=>{
//     let res = val * val;
//     console.log(`The square of ${val} is ${res}`);
// }
// array.forEach(calcSquare);

// Map Method
// let array = [1, 2, 3, 4, 5];
// // // array.map((val)=>{
// // //     console.log(val * 2);
// // // })
// let newArr = array.map
// ((val)=>{
//     return val*2;
// })
// console.log(newArr);
// console.log(array);

// Filter Method
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = array.filter((val=>{
//     return val % 2 == 0;
// }))
// console.log(newArr);

// Reduce Method
// let array = [1, 2, 3, 4];
// const newArr = array.reduce((prev,curr)=>{
//     return prev + curr;
// })
// console.log(newArr);

// let array = [1, 2, 3, 4];
// const newArr = array.reduce((prev,curr)=>{
//     return prev > curr ? prev : curr;
// })
// console.log(newArr);

const redArray = [1,2,3,4];
const myTotal = redArray.reduce( (acc,currVal) => {
    // console.log(`accumulator : ${acc} and currentValue : ${currVal}`);
    return acc + currVal;
},0)
// console.log(myTotal);

const shoppingCart = [
    {
        courseName : "js course",
        price : 299
    },
    {
        courseName : "python course",
        price : 6000
    },
    {
        courseName : "java course",
        price : 3999
    },
    {
        courseName : "flutter course",
        price : 8000
    },
    {
        courseName : "data science course",
        price : 10000
    },
]
const totalPrice = shoppingCart.reduce( (acc, item)=> acc + item.price,0);
// console.log(totalPrice);

// find the marks which is above 90
// let array = [91, 87, 65, 56, 99];
// const newArr = array.filter((val)=>{
//     return val >90;
// })
// console.log(newArr);
// console.log(array);

//Practice question
// let n = prompt("Enter a number");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr[i-1] = i;
// }
// let sum = arr.reduce((prev, curr)=>{
//     return prev + curr;
// })
// let mul = arr.reduce((prev, curr)=>{
//     return prev * curr;
// })
// console.log(`Real value ${arr}`);
// console.log(`sum = ${sum}`);
// console.log(`mul = ${mul}`);


//forEach
let myCoding = [
    {
        languageName: "Javascript",
        languageFileExt:"js"
    },
    {
        languageName:"Python",
        languageFileExt:"py"
    },
    {
        languageName:"C Sharp",
        languageFileExt:"cs"
    }
]
myCoding.forEach( (item)=>{
    // console.log(`Language name is ${item.languageName} and file extesion is ${item.languageFileExt}`);
} )

const myArray = [1,2,3,4,5,6,7];
// myArray.forEach( (item) => console.log(item + 10));

const yourArr = [1,2,3,4,5,6,7];
const yourNewArr = yourArr
                    .map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((numm)=>numm>40)
// console.log(yourNewArr);
