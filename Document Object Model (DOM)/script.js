// let myClasses = document.getElementsByClassName("myClass");
// console.log(myClasses);
// console.dir(myClasses);

// let my_Id = document.getElementById("myId");
// console.log(my_Id);
// console.dir(my_Id);

// let parahs = document.getElementsByTagName("p");
// console.log(parahs);
// console.dir(parahs);
 

// Query Selector
// let id_querySel = document.querySelector("#myId");
// console.log(id_querySel);
// console.dir(id_querySel);

// let class_querySel = document.querySelector(".myClass");
// console.log(class_querySel);
// console.dir(class_querySel);

// let class_querySelAll = document.querySelectorAll(".myClass");
// console.log(class_querySelAll);
// console.dir(class_querySelAll);

// let parahsQuerySel = document.querySelector("p");
// console.log(parahsQuerySel);
// console.dir(parahsQuerySel);

// let parahsQuerySelAll = document.querySelectorAll("p");
// console.log(parahsQuerySelAll);
// console.dir(parahsQuerySelAll);
 
//DOM Manipulation --Properties
// let my_Class = document.querySelector(".myClass");
// console.log(my_Class.tagName);

// let fruits = document.querySelector("#fruitsName");
// console.log(fruits.innerHTML);

// let fruit = document.querySelector("#fruitsName");
// console.log(fruit.innerText);

// let frui = document.querySelector("#fruitsName");
// console.log(frui.textContent);

// Practice Question
// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + "! from Apna College students";
// console.log(h2);

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(let div of divs){
//     div.innerText = div.innerText + ` Affan ${idx}`;
//     idx++;
// }
// // divs[0].innerText = divs[0].innerText + " Ammar"; 
// // divs[1].innerText = divs[1].innerText + " Affan"; 
// // divs[2].innerText = divs[2].innerText + " Hassan"; 
// console.log(divs);


// let id = document.querySelector("#getAtt");
// let clas = document.querySelector(".setAtt");
// console.log(id);
// console.log(id.getAttribute("id"));
// console.log(clas);
// console.log(clas.setAttribute("class","setattr"));
// id.style.backgroundColor = "Purple";
// clas.style.backgroundColor = "pink";
// // clas.style.visibility = "hidden";


// let div = document.querySelector("div");
// let newEl = document.createElement("button");
// newEl.innerText = "Click me";
// div.append(newEl);
// //div.prepend(newEl);
// // div.after(newEl);
// // div.before(newEl);
// console.log(newEl);

// let h1 = document.createElement("h1");
// h1.innerHTML = "<i>Hi, I am New</i>";
// document.querySelector("body").prepend(h1);
// console.log(h1);

// let para = document.querySelector("p");
// para.remove();


//practice Question
// let body = document.querySelector("body");
// let newContent = document.querySelector("p");
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// newBtn.style.height = "50px";
// newBtn.style.width = "80px";
// newBtn.style.border = "0px";
// body.prepend(newBtn);

// newContent.classList.add("newContent");
// console.log(newBtn);


const addText = (languageName) => {
    const li = document.createElement("li");
    console.log(li);
    li.innerHTML = `${languageName}`;
    document.querySelector(".language").appendChild(li);
}
addText("python");

const addOptimizedText = (languageName) => {
    const li = document.createElement("li");
    console.log(li);
    li.appendChild(document.createTextNode(languageName))
    document.querySelector(".language").appendChild(li);
}
addOptimizedText("php");