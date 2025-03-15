// let marks = [97,82,64,75,34];
// console.log("All arrays:- ",marks);
// console.log("Length of arrays:- ",marks.length);
// console.log("Type of array:- ",typeof marks);
// console.log("Printed by index:- ",marks[3]);
// marks[2] = 60;
// console.log("Changing in value 64 to 60:- ",marks[2]);

// let heroes = ["Affan","Ammar","Aalyan","Hassan","Rehan","Imran","Haziq"];
//Using For loop
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

//Using For-of loop
// for(let hero of heroes){
//     console.log(hero);
// }

// Average of all marks
// let marks = [85,97,44,37,76,60];
// let add = 85+97+44+37+76+60;
// let divide = add/marks.length;
// console.log(divide);

// let sum = 0;
// for(let val of marks){
//     sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`The average marks = ${avg}`);

// 10% off offer on all items using For-of loop
// let items = [250,645,900,300,990];
// let i = 0;
// for(let item of items){
//     console.log(`Original price of Index ${i} = ${item}`);
//     let offer = items[i]/10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer ${items[i]}, Discount of ${offer}Rs on this item`);
//     i++;
// }

//10% off offer on all items using For loop
// let items = [250,645,900,300,990];
// for(let i=0; i<items.length; i++){
//     console.log(`This is original price ${items[i]}`);
//     let offer = items[i] / 10;
//     items[i] -= offer;
//     console.log(`Price after discount ${items[i]}, You get ${offer}Rs off`);
// }
// console.log(items);

//Array Methods
// let foodItems = ["Potato","Tomato","Apple","Banana","Mango"];
// let clothesItems = ["T-shirt","Pent","Coats"];
// let numbers = [1,2,3,4,5,6,7,8,9];
// console.log(foodItems);
// foodItems.push("Dates");
// console.log(foodItems);

// console.log(foodItems);
// let del = foodItems.pop();
// console.log(foodItems);
// console.log(del);

// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);

// console.log(foodItems);
// let toInOne = foodItems.concat(clothesItems);
// console.log(toInOne);

// console.log(foodItems);
// foodItems.unshift("Chilli");
// console.log(foodItems);

// console.log(foodItems);
// let del = foodItems.shift();
// console.log(foodItems);
// console.log(del);

// console.log(foodItems);
// console.log(foodItems.slice(1,4));
// console.log(foodItems);

// Splice Method
// console.log(numbers);
// numbers.splice(2,1,101,102);
//Add Element
// numbers.splice(2,0,101);

//Delete Element
// numbers.splice(3,1,);

//Replace Element
// numbers.splice(5,1,101);

// console.log(numbers.splice(4));
// console.log(numbers);


// Practice Question
let companies = ["Google","Microsoft","ibex","Uber","Netflix","Bloomberg"];
console.log(companies);
// companies.shift();
// companies.splice(3,1,"Ola");
companies.push("Amazon");
console.log(companies);