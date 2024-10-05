//Array , objects, destructuring, import and export
//Map , Filter , Arrow fnc (implicit return),Spread Operator
//immutable vs mutable
//primitive and reference

//arrays✅

//Create an array with 5 elements
let arr = [1, 2, 3, 4, 5];
//Access the third element
console.log(arr[2]);



//reference✅
var state = [1, 2, 3, 4, 5];
var copy = state; //ye copy nahi ho raha hai ye reference hai state ka agar koi bhi value ham copy se hatayenge to wo state se bhi remove ho jayega
//example
copy.pop(); //per ye state se remove hoga kyunki ye reference hai copy nahi hua hai




//spread operator✅
var abc = ["a", "b", "c", "d", "e"];
var realCopy = [...abc]; //ye hua copy





//destructuring✅  destructuring usey kahte jab koi chiz mujhe baar baar use karni hoti hai main use sepretly use kar sakta huu

var account = {
  name: "string",
  social: {
    facebook: {
      firstAccount: "karan",
      secondAccount: "shyam",
    },
  },
};

//ab agar mujhe secondAccount ki value use karni hai to mujhe is tarah usey bahar nikalna hoga
account.social.secondAccount; //ab mujhe secondAccount ki value use karni hai baar baar  to mujhe secondAccount ko nikalna hoga

const { secondAccount } = account.social.facebook; //ab ise main direct secondAccount likh kar use kar sakta hoon

var obj = { name: "harsh", age: 25 };
const { age } = obj; //maine age ko bahar nikal diya ab

//agr mujhe do value ek saath nikalna ho to
var two = [12, function () {}];
var [first, sec] = two; //first mein 12 hai aur sec mein fnc aap kuch bhi naam de sakte hai

//agar mujhe teen value mein se sirf do nikaal ne hai tab is trah use karenge
var teen = [12, 14, 16];
var [firstTeen, , thirdTeen] = teen; //first mein 12 hai aur third mein 16 hai





//import and export ✅

//hum log components banaate hai, component matlab page ka hissa,
//navbar, sidebar, cart, landing, second, ab dikkat ye aati hia ki
// har hissa alag alag componets hai aur componets ko hum log alag
// alag files mein rakhte hai , to inko last mein jodna hi padta hai
// jodne ke liye use hota hai import and export

//naming export
export function cart() {}

//aur agli file jisme ham import karenge
import { cart } from "./cart.js"; //ye cart.js  mere file ka naam hai





//Arrow fnc (implicit fnc) ✅

function fnc() {} //ye normal fnc hai

const arrowFnc = (val) => {
  console.log(val);
}; //ye arrow fnc hai,

arrowFnc(12);

//fat arrow with one parameter
const arrow = (val) => {
  //agar value one parameter pass kar rahi hai to ham fat() ko hata sakte hai jo ki hamne yaha kiya hai
  console.log(val);
};
arrow(13);

const twoParam = (val, val2) => {}; // ye do parameter hai isme ham fat ko nahi hata sakte hai

//fat arrow with implicit return
const implicitReturn = () => 12;

console.log(implicitReturn() + 1); //ye answer 13 hoga

const bracketReturn = () => {
  //agar aapne bracket{} laga diye to aapko khud se return likhna padega
  return "harsh";
};
bracketReturn();

//ab object kaise return karne ke liye fnc
//object return karne mein problem hoti kyuni    const abcd = ()=>{ name: "harsh", age: 13}  isme problem ye hai ki isme jo braket{}hai wo fnc ka part magar compile/interpret samjh nahi pta hai ki fnc kar curlyBracket ya object ka

const objFnc = () => ({ name: "harsh", age: 13 }); //mujhe curly bracket hata kar small bracket use karna padega





//map and Filter ✅
//map and Filter dono hi array pe chalte hai, aur dono kaa kaam hai array par kuch perform karna and ek naya array return karna

var arrays = [1, 2, 3, 4, 5];
//map - har elements par kuch karo and naye array mein rakho
var ans= arrays.map((val) => val * 2); //map ke andar retun karna jarrori hai agar return nahi karoge to koi bhi elemnt naye arrays mein place nahi hoga
console.log(ans);


//question in map
//ek array hai saare numbers jo ki 5 se bade ho unme 5 jod dena and baaki numbers waise ke waise return karo naye array mein
var num = [1, 82, 33, 4, 5, 6, -7, 8, 9, -10, 11, 12, 13];
const numAns = num.map(val=> val>5 ? val+5 : val)
console.log(numAns);


//filter - map and filter  mein ek hi farak hai , map saare bande lautata hai mtlb count kam nahi hoga array mein and filter bando ko kam kar skta hai

//question in filter
//ek array mein se  saare numbers jo ki 5 se chote hai unko hata do
var nums = [1, 82, 33, 4, 5, 6, -7, 8, 9, -10, 11, 12, 13];
const fillAns = nums.filter(val=> val<5)
console.log(fillAns);

//second question filter
var fillArr = [
    {name: "kaif" , gender :"male"},
    {name: "shyam" , gender :"male"},
    {name: "rahul" , gender :"male"},
    {name: "roja" , gender :"female"},
    {name: "priya" , gender :"female"},
    {name: "rohit" , gender :"male"},
]
const newFillArr = fillArr.filter(elem => elem.gender === "male")
console.log(newFillArr);


//third question filter

var ProArr= [
    {product : "iphone", price: 120000},
    {product : "samsung", price: 100000},
    {product : "oppo", price: 80000},
    {product : "vivo", price: 90000},
    {product : "google pixel", price: 1100},
    {product : "onePlus", price: 1000},
]

const save = ProArr.filter(elem => elem.price<100000)
console.log(save);
