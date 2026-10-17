// let username = prompt("please enter your name :");

// let membership = prompt("please enter your mimbership type:");

// let membershipType = membership.toLowerCase();

// let type = "";

// if (membershipType === "student"){
//     type = "Student";
// } 
// else if(membershipType === "regular"){
//     type = "regular";  
// }     




// alert ("Hello " + username + " you are a " + type + " member.");

// let functional =prompt("do you prefer a fiction or non-fiction book genre");

// let titelbook = prompt("please enter your book title:");


// alert("your requested book" +" " +titelbook+ " "+"is being reserved");

// console.log("dear "+username+" you ordered " + titelbook);




let inputform = document.getElementById("input-form");

let result= document.querySelector("result-card");

let arr=[];


inputform.addEventListener("submit",function(event) {

event.preventDefault();


    const usernamefield = document.getElementById("usernamefield");
    const membershipfield = document.getElementById("membershipfield");
    const genrefield = document.getElementById("genrefield");
    const titlefield = document.getElementById("titlefield");

    const username = usernamefield.value;
    const membership = membershipfield.value;
    const genre = genrefield.value;
    const title = titlefield.value;

if (membershipfield == "student" || membershipfield == "regular" ){
    
let username = document.getElementById("username");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");

let form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required!";
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required!";
    }

    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Confirm Password is required!";
    }

});

}

  let arr=[usernamefield,membershipfield,genrefield,titlefield]

})

function renderUsers (){

    result.innerhtml = "";
    arr.forEach(element => {

        let userelement =document.createElement("p");

        userelement .textContent=
        user.username + " | " +
            user.membership + " | " +
            user.genre + " | " +
            user.title;

        resultCard.appendChild(userElement);

        
    });
}







if (
    password.value !== "" &&
    confirmPassword.value !== "" &&
    password.value !== confirmPassword.value
) {
    confirmPasswordError.textContent = "Passwords do not match!";
}








let registerButton = document.getElementById("registerButton");

function validateForm() {

    if (
        username.value.trim() !== "" &&
        password.value.trim() !== "" &&
        confirmPassword.value.trim() !== "" &&
        password.value === confirmPassword.value
    ) {
        registerButton.disabled = false;
    } else {
        registerButton.disabled = true;
    }

}

username.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);





let successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    successMessage.textContent = "Registration successful!";

});


form.addEventListener("submit", function(event) {

    event.preventDefault();

    successMessage.textContent = "Registration successful!";

});


