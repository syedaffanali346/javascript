const URL = "https://cat-fact.herokuapp.com/facts";
let para = document.querySelector("#para");
let btn = document.querySelector("button");

//Using Async Await
// const getApiData = async ()=>{
//     console.log("getting data....");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     para.innerText = data[1].text;
// }

//Using Promise
const getApiData = ()=>{
    console.log("getting data....");
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        para.innerText = data[1].text;
    })
}
btn.addEventListener("click",getApiData);