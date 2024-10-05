//SYNC AND ASYNC JS TECHNICAL NAME

// SYNC:- Main callStack technical name
// ASYNC :- call back queue technical name



//ASYNC CODE 
/* 
1. setTimeout
2. setInterval
3. fetch API
4. Axios (or other HTTP libraries)
5. Promise
 
// ye sabhi use hi tab kiye jaate hai jab aapko kuchh aisa karna ho jismein time lagega

6. callBacks
7. Async/Await
8. Event Loop
9. Callbacks vs Promises vs Async/Await
10. Generator
11 Error Handling in Asynchronous Code
12. Web Workers
13. AJAX

*/


//1. setTimeout ✅  :- setTimeout ka code kuchh der baad chalta hai

setTimeout(()=>{
    console.log("ye 2 second baad chalega");
    
},2000)


//2. setInterval ✅ :- setInterval ka code kuchh der baad chalta hai baar baar ek
// particula time mein

var inter = setInterval(()=>{
    console.log("har 1 second mein chalega");
    
},1000)

clearInterval(inter)

//3. fetch API✅ :- ye kisi aur url par jaa kar kuchh data laayega ya data humaare
// pass se us url par lekar jaayega
/* 
kyunki ye internet pe jaayega aur fir data lekar aayega to ismein time 
lagta hai to by default hi js mein fetch ko async banaaya gaya hai 
kyunki fetch ka kaam hai data laana wo bhi kisi url se ab aisa ho sakta 
hai us url ki website slow ho, to data laame mein time lage aur agar 
fetch synchrounous hota to uske baad ka code tab tak nahi chalta jab tak uska dta
 nahi aajata, which is a big problem  */
fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())  // .then tabhi chalta hai jabtak fetch data lekar nahi aata
.then(res =>{
    console.log(res.results[0].location);
    
})


//4. Axios (or other HTTP libraries)✅ :- ye bhi wahi karega jo fetch karta hai 
//bas ye thoda jyaada developer friendly hai
axios.get(`https://randomuser.me/api/`)
.then(res => console.log(res.data.results[0].name.first))


//5. Promise ✅ :- ye janaab ke andar jo code likhoge wo apna kaam karega aur ye 
//khud side stack mein chale jaayega us code ko lekar aur jab andar se code 
//resolve kiya jaayega tab ye chalenge

/* Promises kiya hai? */

/*  kuch code socho man mein, jo ki async code ho, matlb ki ye side stack mein 
jaayega aur baad mein chalega main stack ke, ab ye socho ki aapne is code ko 
likha hai to iska answer kabhi aayega aur aisa bhi ho sakta hai ki asnwer naa
 aaye, promises kya hai aisa samjho ki aap promise ke andar koibhi async code 
 likhdo jo man mein aaye aur promise aapko ek parchi dedeta hai and wo parchi par
 by default likha hota hai waiting , parchi par do events hote hai mainly ek 
 event ka naam hai then aur ek event ka naam hai catch, agar aapka data aagaya to
  parchi pe resolve likh  jayega waiting ki jagah and then chalega aur agar data 
  mein dikkat aayi to catch chalega and waiting ki jagah rejected likh jaayega 
 */


const parchi = new Promise(function(resolve , reject){
     fetch(`https://randomuser.me/api/`)
     .then(raw => raw.json())
     .then (res => {
     if(res.results[0].gender === "male") resolve();
       else reject();
     })
})

//ye mera part hai promise chalne ke baad mujhe resolve aur reject ke saath kiya 
//karna hai agar resolve ka part chalta hai to hara button daba do matlb .then 
//chalega  aur reject ka part chale to laal button daba do mtlb .catch  chalega 

parchi 
.then(function(){
    console.log("hara button daba");
    
})
.catch(function(){
    console.log('laal button daba');
    
})

//...................................................................................
// NOTE:-  promise ka mtlb hota hai ki data jab aajaye to data ke saath kiya karna hai 
// aur callback ka mtlb hota data aane ke baad data ke saath kuch perform karna 

//promise ka mltb hai data ke saath aur call back mtlb hai data aane ke baad
//...................................................................................

//6. callBacks ✅ :- callback kuch khaaas nahi balki sirf ek function hota hai
// jise paas kiya gaya ho kisi aur function mein aur jab wo function chale to aap 
//us paas kiye gaye callback fnc ko chala paayenge

function abcd(a, b) {
     b();
}

abcd(1, function(){console.log("callback chala");
})

/* One More Example with use cases */
/* callback pahli cheej to ek function hai, aap is function mein wo sab likhdo jo
aaapko chalana ho jab answer aayaje , aur ise tab chalao jab aapka async code chal chuka ho */


function doSomeAsyncTask(url , callback){  //fnc mein do parameter pass kiye hain 

    fetch(url)
    .then(raw => raw.json())
    .then (res => {
        callback(); //phir uske baad callback chalega 
    })
}

doSomeAsyncTask("some url" , function xyz() {  //fnc call hoga 
    console.log(" data aagya hai ab chalo");
    
})

// maine fnc mein do parameter pass kiya hai url and callback and jab fnc call hoga to wo 
// some url behejega param mein (maanlo wo random user url bheje ga param mein)  to fetch 
// chalega aur fetch user leke aayega aur uske baad .then chalega aur phir raw file ko human
// redable format mein convertkarega aur uske baad callback function call hoga kunki argument
// mein maine function create kiya tha aur jab wo callback call hoga to function chaelga aur 
// phir print karega console wala part 



//7. Async/Await✅ :- 
//with async await aap async code bhi aise likh sakte ho jaise ki aap normal synchronous code likh rahe ho 
//await ko chalane ke liye await ke parent fnc pe async ko likha padta hai aur ek baat 
// await ka kaam hota hai jabtak ye line naa chale tabtak aagli line nahi chaelga
async function AsyncAwaitLearning(params) {
    let a = await fetch('some url'); // fetch ek asynchronous hai to jabtak ye user leke nahi aata tabtak agli line nahi chaelgi
    a = await a.json()  //jab wo user leke aajaayega tab ye line chalegi
    console.log(a); //and then ye line chalegi 
    
}

AsyncAwaitLearning()



//8. Event Loop✅:- basically js mein do tarike se code run hota ek main stack and ek side stack
                 //jise ham synchronous and Asynchronous bhi bolte hai sync code pahle excute hota 
                 //kuunki wo main stack mein perform karta and async code wo side stack mein hota and then 
                 //uske baad jabtak sync(main stack) khali nahi hota tab tak async code main stack mein nahi aa sakta
                 //Event loop wahi pe kaam mein aata hai event loop pta karta hai ki main stack khali hua ya nahi

//mtlb event loop check karta hai ki main stack khali hai ya nahi 






// 9. Callbacks vs Promises vs Async/Await ✅




//10. Generator ✅:- genretor ek normal fnc hi hota but fnc ke aage ek star laga do to wo generator ban jaata hai
//aap program ke excution ko pause kar sakte ho  

function* printNums() {
    console.log("pehla chal chuka");
    yield 1;  //ye value hai

    console.log("dusra chal chuka");
    yield 2; //ye value hai
    
    console.log("teesra chal chuka");
    yield 3; //ye value hai 
}

const ans = printNums()
ans.next()  //to ye pahla hi sirf print karega 
ans.next()//to ye dusra print karega 
console.log(ans.next().value); //ye teesra chaelga aur yield ki value bhi print karega


//Question Generator ke thorow 1 se 10 tak print karao
function* allNums(){
for(let i= 1; i<=10; i++){
    yield i; //kyunki yeild value provide karta hai to i ki value jo bhi loop chalega
}

}

const generatorAccepted = allNums() //jabtak aagla next nahi chalayenge tab tak loop nahi chalega 
console.log(generatorAccepted.next().value);
console.log(generatorAccepted.next().value);
console.log(generatorAccepted.next().value);
console.log(generatorAccepted.next().value);
console.log(generatorAccepted.next().value);
console.log(generatorAccepted.next().value);


//11 Error Handling in Asynchronous Code✅

//12. Web Workers✅

