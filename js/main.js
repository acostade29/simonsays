/*------Constants------*/
// create panels colors as a const  
//colors: res, yellow, blue, green, orange, purple. const variables 


const panel = document.getElementsByClassName('panel');
const blue = document.getElementsByClassName('blue');
const red = document.getElementsByClassName('red');
const yellow = document.getElementsByClassName('yellow');
const green = document.getElementsByClassName('green');


const white = document.getElementsByClassName('white');
const gray = document.getElementsByClassName('gray');
const purple = document.getElementsByClassName('purple');
const orange = document.getElementsByClassName('orange');


//sequence const

const sequence = [ blue,red, yellow,green,white,gray,purple,orange

]







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
//
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