console.log( -9*3 );
console.log( "value is" +50 );
console.log(  17 % 5 );
console.log( 5 % 17 );
console.log( 5/10 );
console.log( 4 != 5 );
console.log( 7 <= 8 );
let x= 6.5;
console.log( Math.ceil(x) - Math.floor(x)  );



// /////////////////////////////////////////

console.log( typeof(100) );
console.log( typeof(73.9) );
console.log( typeof(NaN) );
console.log( typeof("Water") );
console.log( typeof(false) );
console.log( typeof(9 != 11) );
console.log( "Orang" + "e" );
console.log( "Orange" - "s" );
console.log( "4" + "8" );
console.log( "4" - "8" );
console.log(  "name" + 3 );
console.log( "name" - 3 );
console.log( 82 * "word" );
console.log( 1 + "hello" );
console.log( "hello" + 1 );
console.log( 1 + true );
console.log( "hello" + true );
console.log( typeof(Infinity) );
console.log( 1 == '1' );
console.log( 1 === '1' );



////////////////////////////////////////////
let readnum = prompt("please enter a num");


alert("the num is "+" "+ readnum);


// ////////////////////////////////////////

let num1 = Number(prompt("enter the first number pls"));
let num2 = Number(prompt("enter the second number pls"));


if (num1<= num2){
    alert("Numbers in ascending order: " + num1 + ", " + num2);

}
else{
    alert("Numbers in ascending order: " + num2 + ", " + num1);
}

// ////////////////////////////////////////////////////////////


let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt(" Enter the second number:"));

if (number1>number2){
    alert("the largest num is: " + number1 );
}
else if(number1< number2){
    alert("the largest num is: " + number2 );

}
else{
    alert("both numbers are equal: "  );
}



// /////////////////////////////////////////////////////////////



let num3 = prompt("Enter first number"); 
let num4 = prompt("Enter second number"); 
let sum1 = num3 + num4; 
alert(sum1);//for example num3 =5  num4 =2 // sum2 = 52


let num5 = Number( prompt("Enter first number")); 
let num6 = Number(prompt("Enter second number")); 
let sum2 = num5 + num6; 
alert(sum2);//for example num5 =5  num6 =2 // sum2 = 7


// ////////////////////////////////////////////////////////////////

let num = 5;

if(num =1){
    console.log("ONE");
}
else if ( num=2){
    console.log("TWO");
}

else if ( num=3){
    console.log("THREE");
}

else if ( num=4){
    console.log("FOUR");
}

else if ( num=5){
    console.log("FIVE");
}

else if ( num=6){
    console.log("SIX");
}


else if ( num=7){
    console.log("SEVEN");
}


else if ( num=8){
    console.log("EIGHT");
}


else if ( num=9){
    console.log("NINE");
}

else {
    console.log(" PLEASE TRY AGAIN ");
}

/////////////////////////////////////////////////////

let birthyear = prompt("enter ur year of birth :");


let age = 2026 - birthYear;



if (age >= 18 && age <= 30) {
    message = "You are eligible. Start your application.";
} 

else if (age > 30) {
    message = "You are not eligible. You may join other programs.";
}

else if (age > 60) {
    message = "You may join the seniors' program.";
}

else {
    message = "You may join the kids' program.";
}


//////////////////////////////////////////////////

let input = prompt();
let result ="";

for(let char of input)
{
 if(char=== char.toUpperCase()){
    result+=char.toLocaleLowerCase();

 }

else{
    result += char.toUpperCase();

}

}

/////////////////////////////////////////
let text = "Coding Academy by Orange";
let result2 = '';
