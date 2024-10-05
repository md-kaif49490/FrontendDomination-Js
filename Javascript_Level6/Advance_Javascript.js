// Understanding this ✅
// Call aplly bind ✅
// Prototypal Inheritance ✅
// Closures ✅
// event delegation ✅
// Higher-Order Function ✅
// Error Handling (try...Catch Blocks) ✅
// Custom Events ✅

/* .................................... **..................................... */

// Understanding this ✅
//this keyword js mein one of the most suspenseful keyword hai
//keyword ka matlab hota hai aisa word jiska koi matlab ho programming lang mein ex:- var let if else if function etc.

//this ki value badalti rahti hai for example :-
//global - window
//function - window
// method - object
// fnc inside method (es5) - window
// fnc inside method (es6) - object
//Constructor fnc mein this ki value - new blank object
// event listner mein this ki value - that element jispar event listner laga ho


//global - window
console.log(this);

//function - window
function abcd() {
    console.log(this);  
}
abcd();

// method - object
// method ka matlab hota ki maine ek object banaya aur uss object ke andar
//maine function  create kiya to usey ham method kahte hai for example:-

var obj = {
    name : function (){ //its called method 
        console.log(this); //this ki value hogi object 
    }
}
obj.name()


// fnc inside method (es5) - window
var obj2 = {
    sayName: function() {
        function childfnc (){  //its called fnc inside method
            console.log(this);//this ki value hogi window
            
        }
        childfnc();
    }
}

obj2.sayName()


// fnc inside method (es6) - object
//es6 mein fnc inside method mein wo apne parents fnc ko refer karta hai mtlb agr parents function object
//hai to child fnc bhi object hoga exammple:-

var obj3 = {
    sayName : function(){  //its called method 
        console.log(this); //this ki value object hogi
        
        const child = ()=> {  //es6 varient fnc hai ye
            console.log(this); // isme bhi this ki value object hogi
            
        }
        child();
    }
}

obj3.sayName();


//Constructor fnc mein this ki value - new blank object
function add(){
    console.log(this);  //blank object hai ye kyunki new ek blank obj create karta hai 
    
}
const ans = new add(); //jis fnc ko aap new ki madad se chalate hai usey constructor fnc kahte hai 



// event listner mein this ki value - that element jispar event listner laga ho
document.querySelector("button").addEventListener("click", function(){
    console.log(this);  //button  hi this ki value hai kyunki button pe hi event ho raha hia 
    
})


/* .................................... **..................................... */


//Call aplly bind ✅
// ye teen tareeke hai function ko call karne ke kisi object ko this maan kr

const dets = {name: "harsh"}

function abcd() {
    console.log(this);
    
}
abcd.call(dets) //call ke andar aap jo bhi  paas karoge wo this ko convert karke wo value this ki jagah le legi
//ab yahan pe maine dets paas kiya to this ki value ab harsh ho gayi hai


//apply 
function app(a,b,c) { //agar fnc parameter maang raha ho to 
    console.log(this,a,b,c);  //agr app ko print karna hai to pahli value harsh aayegi kyunki maine dets paas kiya and second main 1 2 3 aaayegi 
    
}
app.apply(dets,[1,2,3]) //apply mein pahli value this hoti hai baaki sari value arrays mein hoti hia 


//bind
function binds(){
    console.log(this);
    
}

var baadmechalanekeliyefnc = binds.bind(dets); //bind bilkul call ki tarah hota hia per bind turnat nahi chaltaa hai bind ko agar aap call
                                              // karoge to wo nahi chalega usko chalane ke kisi variable mein save karna padega aur us variable ko chalana
                                              // padega tab bind kaam karge for example
  baadmechalanekeliyefnc();                   // var baadme chalanekeliyefnc = binds.bind(dets);
                                              //ab aap isko call kar sakte ho  baadmechalanekeliyefnc() ab ye chalega 




/* .................................... **..................................... */


// Prototypal Inheritance ✅

function makeHuman(){
    this.name = "kaif";
    this.age = 21;
}

let answer = new makeHuman();  //new ki wajah se this ki value blank object hai .
//aisa koi bhi function jismein aap this ka upyog kar rahe ho aur us function
//ko call karte waqt aap new ka upyog karein to new ka matlb whaa par ek blank object hojaata hai


//ek function jo ki this ka upyog kar raha ho and new ke dwaara naye naye objects bana kar deta ho aisa functon ko constructor function kahte hia
function constr(name ,age) {
    this.nameSomething = name ;
    this.ageSomething = age  ;
}

constr.prototype.chacha = 12; //ye prototype hia  prototype ka matlab hota hai ki jo bhi this banega fnc mein un sab ke andar ye chacha 12 hoga 
                              // iske pass bhi hoga this.nameSomething = name ; aur iske paas bhi hoga this.ageSomething = age  ;

const constructors = new constr("neha" , 22);//fnc ko call karte waqt ham new ka upyog karte hai to use constructor fnc kahte hain
const constructors2 = new constr("varun" , 28); //aur ye blank object create karta hai fnc mein blank object ko use karne ke liye ham thiska upyog karte hain



/* .................................... **..................................... */

// Closures ✅           
//ek function jo return kare doosra function, aur use kare parent function  ka koi varaible

function fnc() {  //ek function hai ye
    var a = 10;
    return function(){  //aur ye dusra function hai jo return ho raha hai
      console.log(a); //aur ye use kar raha hai parents function ke variable ko
      
                
    }
    
}

var chalalo = fnc();  //maine fnc ko save kar liya chalao var main 
chalalo(); //and usey call kar diya 


/* .................................... **..................................... */

//event delegation ✅

/* Html parts

<div id = "parents">
<button id = "play">play</button>
<button id = "pause">pause</button>
</div>

*/

var parent = document.querySelector("#parents");

parent.addEventListener("click", function(dets){  //maine listner parents pe lagaya hai but target uske children hi honge wo buttons hia 
                                                  //aur yahan dets collect karga ki target konsa button hua hai uske basis pe agli line chalegi
if(dets.target.id === "play") { //agar target(click) play ho raha hai to play song)
console.log("play song");

}else if(dets.target === "pause"){ //agar target(click) pause ho raha hai to pause song)
console.log("pause song");

}

})


//maine parents pe listner lagaya hai but browser pe hame  2 buttons show honge play and pause 
//but parents pe listner lagane ki wajah se wo kaam unke children pe  karega



/* .................................... **..................................... */

//Higher-Order Function ✅
//aisa koi fnc jo ki ek fnc ko parameter mein accept karle and/or ek function return karder

function high() {  //aisa koi fnc jo ki ek fnc ko parameter mein accept ( aur ye accept kar raha hai )
    
}

high(function(){})  //ye maine function bhej diya parameter mein 

//dusra question ka answer  and/or ek function return karder
function retrn (){
    return function() { //ye retrun kar raha hai function {aur ye return karega jiski wajah se function chelega}
        
    }
}

retrn()

/* .................................... **..................................... */

//Error Handling (try...Catch Blocks) ✅

function devide(a,b) {
    try {
        if(b==0){
            throw error ("koi gadbad hui")
        }

        console.log(a/b);  //ye tab chalega jab thorw nahi chalega 
        
    } catch (error) {
        console.log(error);
        
    }
}

devide(12,0)  /* kyunki 12 a mein jaayega and 0 b mein aur if (b==0) jo ki hai fir throw chalega usme jo bhi likha hai
                 // wo catch mein jaayega catch mein consle mein print ho jaaayga */




/* .................................... **..................................... */

//Custom Events ✅
const evt = new Event("clickHOJaao");  //making event

document.querySelector("button")      //attch event to some dom element perform
.addEventListener("clickHoJaao",function(){
    alert("Click ho raha hu")
})

document.querySelector("button").dispatchEvent(evt)  //fire event