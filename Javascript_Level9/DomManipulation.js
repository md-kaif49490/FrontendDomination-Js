//Dom = document object model
//jo bhi hum website par dekhte hai wo sab kuchh body tag ke andar banta hai, ab jo body mein banta hai wahi humein wesite par dikhta hai , dom actually hota hai thoda aasaan shabdo mein html tag aur uska poora control js mein

// Accesing Elements:✅
// document.querySelector()


//selection options
document.getElementById('#something')  //id select
document.getElementsByClassName('.something') //class select
document.getElementsByTagName('h3') //tag select
document.querySelector     //universal selector
document.querySelectorAll   //all selector


//accesing elements
var btn = document.querySelector('button');
    btn.textContent = 'download'



//Modifying Elements:✅
//   innerHTML, textContent
var p = document.querySelector('p')
p.textContent += "harsh"   

//textContent 
//  + lagane se hota hai kii pichli value ko rakho aur isme harsh jod do to answer aayega hey, harsh
//  = lagane se hota hai kii pichli value ko replace karke isme ye rakhdo

//innerHtml
var h1 = document.querySelector('h1');

h1.innerHTML =  '<i>Everyone</i>';  // innerhtml mein ye tag ki trah kaam karta hia iska italic mein everyone likh kar aayega
h1.textContent = '<i>Everyone</i>' //textContent mein ye agar likh denge to ye waise hi show kardega jaise likha hua hai

//Manipulating Styles and Classes:✅
        //style
       //classList

var span = document.querySelector('span');
span.style.color ='red';
span.style.fontFamily = 'Helvetica';
span.style.fontSize = '10px';


var h4 = document.querySelector('h4');
h4.classList.add('highlight'); //class add
h4.classList.remove('highlight'); // class romoved


// Creating and Deleting Elements: ✅                
// createElement()
// appendChild()
// removeChild()

var h5 = document.createElement('h5');
h5.textContent = 'Creating a element with the help of js';
h5.classList.add('element') //adding a class

//ab append ki madad se ise ham html mein rakh sakte hain jahan ham chahen
document.querySelector('div').appendChild(h5);

//ab removechild  ki madad se ise ham html mein se hata sakte hain
document.querySelector('div').removeChild(h5);

//ek aur hota hai sirf remove to and removechild ye dono alag hai



// Event Handling:
//     addEventListener()    

//jab bhi koi action hota to wahan by default event perform hota
var listner = document.querySelector('#listner');

listner.addEventListener('click', function(event){
    console.log(event.target); //event.target pe click karene ke liye humne target bhi click karene element hai
});


// Event Object          
document.querySelector('body')
.addEventListener('mousemove', function(event){
     console.log(event.clientX, event.clientY); //clientX and clientY mein mouse ko position ko nikal diye hai

});




