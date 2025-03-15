const form = document.querySelector("form");
const card = document.querySelector(".card");

form.addEventListener("submit",(event)=>{
    let name = event.target.uname.value;
    let email = event.target.uemail.value;
    let phone = event.target.uphone.value;
    checkEmail = 0;
    
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    for (const item of userData) {
        if (item.email === email) {
            checkEmail = 1;
        }
    }
    if (checkEmail == 1) {
        alert("Email already exists!");
    }else{
        userData.push({
            "name":name,
            "email":email,
            "phone":phone
        });
        localStorage.setItem("userDetails",JSON.stringify(userData));
        displayData();
        event.target.reset();
    }
    
    event.preventDefault();
})

const displayData = () =>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    userData.reverse();
    console.log(userData)
    let finalData = "";
        userData.forEach((element,i) => {
            finalData+=`
                <div class="container">
                <h4><b>Name :-</b></h4>
                <p>${element.name}</p>
    
                <h4><b>Email :-</b></h4>
                <p>${element.email}</p>
    
                <h4><b>Phone :-</b></h4>
                <p>${element.phone}</p>
                <button class="deleteBtn" onclick="removeData(${i})">Delete</button>
                </div>
            `;
        });
        
    card.innerHTML = finalData;
}

const removeData = (index) =>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    userData.splice(index,1);
    localStorage.setItem("userDetails",JSON.stringify(userData));
    displayData();
}
displayData();