//cached elements
// create the document element by id for enter name, start game, select color

const messageEl = document.getElementById("message");
const messageInput = document.getElementById('inputMessage');
const messageBtn = document.getElementById('messageButton');

// defined message 
//event handler
// write a function that change the H1 TITLE to the name of the user once the included the name to Welcome + name
messageBtn.addEventListener('click',function() {
    messageEl.innerText = `Welcome ${messageInput.value}!`;
})


// define variables
let strict = false;
let noice = true;
let on = false;
let win;
let turn;
let compTurn;
let intervalId;

//create the  elements for each color 

const blue = document.querySelector('blueButton');
const red = document.querySelector('redButton');
const yellow = document.querySelector('yellowButton');
const green = document.querySelector('greenButton');
const teal = document.querySelector('tealButton');
const gray = document.querySelector('grayButton');
const purple = document.querySelector('purpleButton');
const orange = document.querySelector('orangeButton');

// turn count  and start  //
const turnCounter = document.querySelector("#turn");
const startBtn = document.querySelector("#start")
const strictButton = document.querySelector("#Strict")
const onButton = document.querySelector('#on')


// if the strict Button is check the strick funtion will be true or activated.  
strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
   strict = true;
   } else { 
   strict = false;
   }
   });
   
   //On Button with Score setting 
   onButton.addEventListener('click' , (event) => {
       if (onButton.checked == true) {
           on = true;
           turnCounter.innerHTML = "-";
       } else {
           on = false;
           turnCounter.innerHTML = "--";
           clearInterval(intervalId)
       }
   });
   
   //start button 
   
   startBtn.addEventListener('click',(event) => {
    if (on || win) {
    flash();
    } else if (
      on = false) { clearInterval(flash())
      }
   });
   
   function play() {
       win = false;
       Order =[];
       player = [];
       flash = [];
       intervalId = 0;
       turn = 1;
       turnCounter.innerHTML = 1;
       good =true;
   
  
   


















// this way will show you a second option to create the game. however it only flash once the press start button and the on button is on 

// //assign a color lookup to numbers//
// let colorLookup ={
//     1:'Red',
//     2:'Blue',
//     3:'Yellow',
//     4:'Purple',
//     5:'Green',
//     6:'Gray',
//     7:'Orange',
//     8:'teal'
// }

// //create a sequence [1,5,4,6,2,3,7,8,1];
// let arry = [0,1,2,];



//setting timer  and function flash  
// let timer = 1000;
// function flash(){
//     newSquence.forEach(function(color) {
//         timer += 1000;
//         setTimeout(() => {
//             // function to turn on/off background colors
//             changeColor(colorLookup[color])
//         }, timer);
//         setTimeout(() => {
//             // function to turn on/off background colors
//             colorReset();
//         }, timer + 500);  
//     })
// }    

//  //the sequence is not random we need to shuffle with a shuffle function 
//  let arrayshuffle = function(arr) {
//     let newPos,
//     temp; 
//     for (let i = arr.length -1; i > 0; i--) {
//     newPos = Math.floor(Math.random() * (i + 1));   
//     temp = arr[i];
//     arr[i] = arr[newPos];
//     arr[newPos] = temp;
//     }
//     return arr;
//  };

 
//  var newSquence = arrayshuffle(arry);
// //give the flash a background color of white 

// //  flash();
//  function changeColor(color) {
//      if (color === 'Red') {
//          redButton.style.backgroundColor = 'white'
//      }
//      if (color === 'Yellow') {
//          yellowButton.style.backgroundColor = 'white'
//      }
//      if (color === 'Green') {
//          greenButton.style.backgroundColor = 'white'
//      }
//      if (color === 'Blue') {
//          blueButton.style.backgroundColor = 'white'
//      }
 
//      if (color === 'Gray') {
//          grayButton.style.backgroundColor = 'white'
//      }
//      if (color === 'Purple') {
//          purpleButton.style.backgroundColor = 'white'
//      }
//      if (color === 'Teal') {
//          tealButton.style.backgroundColor = 'white'
//      }
//      if (color === 'Orange') {
//          orangeButton.style.backgroundColor = 'white'
//      }
//  }
 
//  //create a fucntion to reset the color to original color 
//  function colorReset() {
//      redButton.style.backgroundColor = 'red';
//      greenButton.style.backgroundColor = 'green';
//      yellowButton.style.backgroundColor = 'yellow';
//      blueButton.style.backgroundColor = 'blue';
//      grayButton.style.backgroundColor = 'gray';
//      purpleButton.style.backgroundColor = 'purple';
//      tealButton.style.backgroundColor = 'teal';
//      orangeButton.style.backgroundColor = 'orange';
//  }
 
