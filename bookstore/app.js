let username = prompt("please enter your name :");

let membership = prompt("please enter your mimbership type:");

let membershipType = membership.toLowerCase();

let type = "";

if (membershipType === "student"){
    type = "Student";
} 
else if(membershipType === "regular"){
    type = "regular";  
}     




alert ("Hello " + username + " you are a " + type + " member.");

let functional =prompt("do you prefer a fiction or non-fiction book genre");

let titelbook = prompt("please enter your book title:");


alert("your requested book" +" " +titelbook+ " "+"is being reserved");

console.log("dear "+username+" you ordered " + titelbook);

