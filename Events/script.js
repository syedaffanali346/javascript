let btn1 = document.querySelector("#btn1");
// event handling in js seqrate file
// btn1.onclick = (evt)=>{
//     console.log("This is js event handling with separate file");
//     let a = 25;
//     a++;
//     console.log(a);
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
// }


//event handling with eventListener method
// btn1.addEventListener("click",(evt)=>{
//     console.log("click was clicked - handler 1");
//     console.log(evt.type);
// })
// btn1.addEventListener("click",(evt)=>{
//     console.log("click was clicked - handler 2");
// })

// const handler3 = ()=>{
//     console.log("click was clicked - handler 3");
// }

// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",(evt)=>{
//     console.log("click was clicked - handler 4");
// })

// btn1.removeEventListener("click",handler3);


//practice question --- dark mode & light mode theme
// let btn = document.querySelector("#btn");
// let body = document.querySelector("body");
// let currMode = "light";
// btn.addEventListener("click",()=>{
//     if (currMode === "light") {
//         currMode = "dark";
//         // body.style.backgroundColor = "black";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currMode = "light";
//         // body.style.backgroundColor = "white";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
    
// })

// const forEvent = document.querySelector("#forEvent")
// forEvent.addEventListener("click",(e)=>{
//     console.log("clicked");
//     console.log(e);
// })




//Event Propagation

//Capturing Mode -- Captuaring event
//pehle parent activate hoga phir child --- pehle ul wala chalega phir li wala
// const ul = document.querySelector("ul")
// ul.addEventListener("click",()=>{
//     console.log("ul(unorder list) clicked!");
// },true)

// const li = document.querySelector("li:nth-child(3)")
// li.addEventListener("click",(e)=>{
//     console.log("third li(list item) clicked!");
// },true)

//Bubbling Mode -- Bubbling event
//pehle child activate hoga phir parent --- pehle li wala chalega phir ul wala
// const ul = document.querySelector("ul")
// ul.addEventListener("click",()=>{
//     console.log("ul(unorder list) clicked!")
// },false)//false by default set hota he

// const li = document.querySelector("li:nth-child(3)")
// li.addEventListener("click",(e)=>{
//     console.log("third li(list item) clicked!");
//     e.stopPropagation(); //Bubbling rokdeta he mtlb sirf child activate hoga lekin parent nhi hoga
// })//false by default set hota he

// const a = document.querySelector("a");
// a.addEventListener("click",(e)=>{
//     e.preventDefault();
// })

const ul = document.querySelector("ul")
ul.addEventListener("click",(e)=>{
    ul.removeChild(e.target);
})