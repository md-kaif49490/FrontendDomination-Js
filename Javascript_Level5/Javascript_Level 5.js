 //Undefined is a value

 //ye value tab di jaati hai jab variable ko koi value naa mili ho, iska matlab hai,
 //ye ek garbage value ki tarah treat ki jaati hai, aap isey default value bhi kah sakte ho
 //example:- var a; iski value undifined hogi


//not defined is an error
//console.log(b); kyunki maine b kahi bhi defined nahi kiya hai aur use main print kar raha hoon to not defined error show karega


//null is also a value
//null is recieved when something is not found



//arrays
//array matlb jab bhi aaapko ek ya ek se jaada value ek saah rakhni ho to ham arrays use karte hian
var arr = ["kaif", "aman", "sharaddha", "afzal"];
console.log(arr[3]);

//Loop in arrays
arr.forEach(function(val){
console.log(val.toUpperCase());

})




//Objects
//objects ek tareeka hai jisse ki ham ek identity ki details ko ek saath rakh skte hain
var obje = new Object(); //isse bhi object banta hai ye dusra tarika object ko create karne ka

var obj = {
    name: "harsh",
    age: 112,
    Symbol: '@',
    email: "kuchhKucchh@gmail.com"
};

console.log(obj);



// synchronous and asynchrounous
//sychrounous code mein code humesha line by line chalta hai and async
// code line by line nahi chalta ,saare asynch code ek saath shuru kar diya jaata hai and jo pahle complete hojaaye uska answer dediya jaata hai

//synchronous ko mainStack bhi kahte hain aur asynchrounous ko sideStack bhi kahte hain
