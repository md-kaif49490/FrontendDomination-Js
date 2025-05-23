//functions

//es5 and es6

//es5- function statement , function expressions, anonymous function

//es6- fat arrow function but teen tariko se likha ja sakta hai
//a) basic fat arrow
//b) fat arrow with one parameter
//c) fat arrow with implicit return


//what is function :- koi aisa code jo aapko baar baar use karna ho, ya fir 
//koi aisa code jisko turant na chalana ho par kabhi chalana ho, usey function mein daal sakte hain
function chalao(params) {
    console.log("1st");
    console.log("2nd");
    console.log("3rd");
    console.log("4th");
    console.log("5th ");
    
}
chalao();


//parameter and arguments
function abcd(val) { //Parameter
    console.log(12+val); //24
    
}
abcd(12); //arguments


//types of functions
function state(params) {  
    //its called function statements
}

var expres = function exp(params) { //jab aap function ko var mein rakhte ho to usey kahte hain function expression
    //its called function expression
}

function(){ //jab aap function ko koi naam na dete hain tab usey annoymous function kahte hain
    //its called anonymous function
}


//es6 version of function

//fat arrow function
//  fat() 
//  arrow=> 
// function{}

var a = ()=>{}; //basic fat arrow

//fat arrow with one parameter
var g = ab =>{}  //fat arrow with one parameter mein fat ko hata sakte ho 
g(12);


// fat arrow with implicit retrun
var xyz = ()=> "harsh";  //implicit return mein aap function ke arrow{} ko hata sakte ho aur jo bhi value likhi hogi wo return ho jayegi jaise ki harsh wo return hogi jiski wajah se function run hota hai

var ans = xyz(); //return ho gayi value ans mein agar ham ans ko print karenge to hame harsh milega


function yzx () {
    return 12;
}
var a = yzx();  //a ko agar print karenge to usmein 12 hoga to ye return ho raha jiske wajah se function call hua tha 
console.log(a);

   //note:- aisa function jo kuchh return nahi karta wo bhi undefined return karta hai

   
