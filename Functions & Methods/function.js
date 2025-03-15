const loginUserMessage=(userName = "Affan")=>{
    return `${userName} just logged in`;
}
//console.log(loginUserMessage("Ammar"));
//console.log(loginUserMessage(123));
//console.log(loginUserMessage()); //jab khali chor denge tw Affan print hogaye ga -- or jab koi value pass karenge tw wo override hojaye gi

const calculateCartPrice=(val1,val2,...num)=>{ //rest paramerter/operator --- val1=200, val2=600 ...num=800,500
    return num;
}
// console.log(calculateCartPrice(200,600,800,500)); //return array


//function with object
const user = {
    name:"shoes",
    price:999
}
const handleObject=(anyObj)=>{
    // console.log(`Product name is ${anyObj.name}, Price is ${anyObj.price}`);
}
handleObject(user);
handleObject({
    name:"pen",
    price:99.9
});

//function with array
let myArr = [100,200,600,800];
const handleArray=(anyArray)=>{
    // console.log(anyArray);
    // console.log(anyArray[2]);
}
handleArray(myArr);
handleArray([
    "apple",
    "mango",
    "banana"
]);

//Nested function and global and local scope
const one=()=>{
    let username = "Affan";
    const two=()=>{
        let website = "YouTube";
        // console.log(username);
    }
    //console.log(website);//it will show error becouse it declared in local scope
    two();
}
one();


//console.log(addOne(5)); //don't show error
function addOne(num) { //when func is defined by this syntax so we can call it upon it 
    return num + 1;
}

//console.log(addTwo(5)); //showing error
const addTwo = function (num) { //when func is defined by this syntax so we can not call it upon it 
    return num + 2;
}

// this keyword
let myUser = {
    userName:"Affan",
    price:999,
    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to our website!`);
        //is wale this ko context mila tw current context return kardia 
        console.log(this)
    }
} 
// myUser.welcomeMessage();
// myUser.userName = "Ammar";
// myUser.welcomeMessage();
//is wale this ko koi context nhi mila tw window object return kardia lekin agar node se code run karenge tw empty object return karega 
// console.log(this);

//this keyword function men nhi chalta
function rand() {
    let a = "abc"
    console.log(this.a); //return undefined
}
// rand();

//explicit return
// const random = (num1,num2) => {
//     return num1 + num2;
// }
//implicit return
// const random = (num1,num2) => num1 + num2;
//implicit return
// const random = (num1,num2) => (num1 + num2);
// console.log(random(2,3));
const random = () => ({username:"abcxyz"});
// console.log(random());


//IIFE -- Immediately invoked Function Expressions
( function chai(){
    console.log("DB Connected!");
} )(); //agar yahan semicolon nhi lagayenge tw doosre function men error ayega

( (name) =>{
    console.log("hello,",name);
} )("affan")