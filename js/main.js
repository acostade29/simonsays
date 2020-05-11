/*------Constants------*/
// create panels colors as a const  
//colors: res, yellow, blue, green, orange, purple. const variables 


const panel = document.querySelector('panel');
const blue = document.querySelector('blue');
const red = document.querySelector('red');
const yellow = document.querySelector('yellow');
const green = document.querySelector('green');


const teal = document.querySelector('teal');
const gray = document.querySelector('gray');
const purple = document.querySelector('purple');
const orange = document.querySelector('orange');


const flash =document.querySelectorAll(panel);

//sequence const creating and array of color.

const lightsequence = [ 
    { color: 'blue',time:1000},
    { color: 'yellow',time:1000},
    { color: 'green',time:1000},
    { color: 'teal',time:1000},
    { color: 'gray',time:1000},
    { color: 'purple',time:1000},
    { color: 'orange',time:1000},
    { color: 'gray',time:1000}
]

const gameOn = document.querySelectorAll('panel');


// //variable to track the current light 
// let curLightIdx = -1;

// function renderLight(cb) {
//     // Turn all lights off
//     lightEls.forEach(el => el.style.backgroundColor = 'black');
//     lightEls[curLightIdx].style.backgroundColor = lightSequence[curLightIdx].color;
//     // Invoke the callback when this light's time has expired
//     setTimeout(cb, lightSequence[curLightIdx].time);
//   }
  
//   function renderNextLight() {
//     // Increment and reset to zero when 3 is reached
//     curLightIdx = ++curLightIdx % 8;
//     renderLight(renderNextLight);
//   }
  
//   // Make it start!
//   renderNextLight();


// one function that can work but still need to understand. flash function  with a promise event loop with async function with a wait time 
// const flash = panel => {
// return new Promise ((resolve, reject) =>  {
//     panel.querySelector += 'flash';
//     setTimeout(() => {
//         panel.className =panel.querySelector.replace('flash','');
//         resolve();
//     }, 1000)
// });
// };

// const main =async () => {
//     for (const panel of sequence) {
//         await flash(panel);
//     }
// };


  






//cached elements
// create the document element by id for enter name, start game, select color

const messageEl = document.getElementById("message");
const messageInput = document.getElementById('inputMessage');
const messageBtn = document.getElementById('messageButton');


//to select colors of the panels once the game start and start button 
const ColorSelectionBtn = document.getElementsByClassName("panel")
const startGame = document.getElementById("start");

//event handler
// write a function that change the H1 TITLE to the name of the user once the included the name to Welcome + name
messageBtn.addEventListener('click',function() {
    messageEl.innerText = `Welcome ${messageInput.value}` ;
})
//write the init function to random select colors sequence
//write a function to hide the extra colors and only appears after x amount of sequence is comprete 



/*------Variables------*/
//level of difficulty will increase as the game goes 


// array for storage sequence 



/*------Functions------*/

//init function 
//random selection of button color.
// create a sequence function  with the variable to storage panel. 
//flash  function and add the time out for memorization. 
//flash function for user select the panel. 


// call back function that will let user to see if they click on the right panel of color else message game over. 


//render function will group the game to start over 

/*------Cached Element References------*/

/*------Event Listeners------*/