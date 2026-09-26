
for(i=0 ;i<=5 ;i++){

 alert( i);

}

///////////////////////////////////////

let result = "";
for(let i=0 ; i <= 5 ; i++){
result +=i;
}
 alert(result);


/////////////////////////////////////

let result2 ="";
for (let i=0 ; i<=20 ; i++){

    if(i%3==0){
        result2 +=i;

    }


}
console.log(result2);



/////////////////////////////////////

let num =prompt("please enter a number btween 0 and 100: ");
while(num <0 || num >100 ){
  num=prompt("enter a number btween 0 and 100");

}


///////////////////////////////////////



let num1 =prompt("please enter a number btween 0 and 100: ");

if(isNaN(num1)===false ){
while(num1 <0 || num1 >100 ){
  num1=prompt("enter a number btween 0 and 100");

}
alert("Thank you! You entered: " + num1);
}
else{
    alert("not a number")
}



/////////////////////////////////////////////////////


let num3=prompt("please enter a number:");
let sum=0;
num3=Number(num3);

for (let i=0 ; i<= num3 ;i++ ){


    sum+=i;

}

alert(sum);

//////////////////////////////////////////////////




let num4=prompt("please enter a number:");
let avg=0;
num4=Number(num4);

for (let i=0 ; i<= num4 ;i++ ){


    avg+=i;

}
avg=avg/(num4+1);

alert(avg);
