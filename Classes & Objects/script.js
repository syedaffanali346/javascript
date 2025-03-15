//Prototypes
// const company = {
//     calcTax(){
//         console.log("The tax rate is 10%");
//     }
// }
// const emp = {
//     fullName : "Zaid",
//     marks : 94.85,
//     calcTax(){
//         console.log("The tax rate is 20%");
//     }
// }
// emp.__proto__ = company;
// console.log(emp.calcTax());

//Classes
// class toyotaCar{
//     constructor(){
//         console.log("Creating new object");
//     }

//     start(){
//         console.log("start!");
//     }

//     stop(){
//         console.log("stop!");
//     }

//     // setBrand(brand){
//     //     this.brand = brand;
//     // }
// }
// //Making object from class
// let fortuner = new toyotaCar();
// let lexus = new toyotaCar();

// // fortuner.setBrand("Fortuner");
// console.log(fortuner);
// console.log(fortuner.start());

// // lexus.setBrand("Lexus");
// console.log(lexus);
// console.log(lexus.stop());

// Inheritance
//Example 1
// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{

// }
// let obj = new Child()
// console.log(obj.hello());

//Example 2
// class person {
//     constructor(){
//         console.log("This is constructor!");
//     }
//     eat(){
//         console.log("Eat!");
//     }
//     sleep(){
//         console.log("Sleep!");
//     }
//     work(){
//         console.log("nothing");
//     }
// }
// class engineer extends person{
//     work(){
//         console.log("solve problems!");
//     }
// }
// let obj1 = new engineer();
// let obj2 = new engineer();
// console.log(obj1.work());
// console.log(obj2);

//Super keyword
//Example without parameterize constructor
// class A {
//     constructor() {
//         console.log("Parent Constructor!");
//     }
// }
// class B extends A{
//     constructor() {
//         super(); //It calling parent class constructor
//         console.log("Clild Constructor!");
//     }
// }
// let obj = new B();

//Example with parameterize constructor
// class A {
//     constructor(name) {
//         console.log(`Parent Constructor! ${name}`);
//     }
// }
// class B extends A{
//     constructor(name) {
//         super("Affan"); //It calling parent class constructor
//         console.log(`Clild Constructor! ${name}`);
//     }
// }
// let obj = new B("Ali");

//Practice Question
// let data = "Secret Information"
// class User {
//     constructor(name,email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log(`Data = ${data}`);
//     }
// }
// let stu1 = new User("Affan","affan@gmail.com");
// console.log(stu1);
// console.log(stu1.viewData());
 
// let teac1 = new User("Dean","dean@gmail.com");
// console.log(teac1);
// console.log(teac1.viewData());
