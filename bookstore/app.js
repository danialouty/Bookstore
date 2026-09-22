let username = prompt("please enter your name :");

let membership = prompt("please enter your mimbership type:");

let membershipType = membership.toLowerCase();

let type = "";


function membershiphandler(membershipType){
while(membershipType !== "student" && membershipType !== "regular" ){

  membershipType =prompt("please enter your membership type ");

}
}


function arraydatasaver(data){
const data= [4];
data[0]=username;
data[1]= membershipType;
data [2]= bookGenre;
data [3]= titelbook;

}





alert ("Hello " + username + " you are a " + membershipType + " member.");

let bookGenre =prompt("do you prefer a fiction or non-fiction book genre");

let titelbook = prompt("please enter your book title:");


alert("your requested book" +" " +titelbook+ " "+"is being reserved");

console.log("dear "+username+" you ordered " + titelbook);

