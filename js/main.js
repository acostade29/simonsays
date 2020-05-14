
//1--------------------------------------Message element -----------------------//

// cached elements
// create the document element by id for enter name, start game, select color

const messageEl = document.getElementById("message");
const messageInput = document.getElementById('inputMessage');
const messageBtn = document.getElementById('messageButton');

// defined message 
//event handler
// write a function that change the H1 TITLE to the name of the user once the included the name to Welcome + name
messageBtn.addEventListener('click',function () {
    messageEl.innerText = `Welcome ${messageInput.value}!`;
})

//------------------------------------------------------------------------------//





//2--------------------------------------variables-------------------------------//
// define variables
let order =[]; // keep track and order of the lights//
let strict = false; // function that dont allow the player to repeat the sequeance and start over 
let noice = true;
let on = false;
let flash;
let win;
let good; //if the player is doing a good move or not  //
let turn; //whos turn is going//
let compTurn; // computer turns 
let intervalId; // is a function that runs after certain amount of miliseconds 
let playerOrder = []; //player order to track 
//-----------------------------------------------------------------------------//





//3------------------------------------const and buttons assigment-----------------//
//create the  button for each color 

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

//---------------------------------------------------------------------------------//






//4---------organize the program based on the buttons you have firts----------------// 

//Strick Button
// if the strict Button is check the strick funtion will be true or activated.  
//if we check the button will be true and we use the strick to be equal true if not we wont be using  strick feature. 
strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
   strict = true;
   } else { 
   strict = false;
   }
   });
   
   //On Button with Score setting 
   //if the on button is on or check  the counter will be on 
   onButton.addEventListener('click' , (event) => {
       if (onButton.checked == true) {
           on = true;
           turnCounter.innerHTML = "-";
       } else {
           on = false;// if the counter is off no message 
           turnCounter.innerHTML = "";
           clearColor()// this will clear the colors if the game is playing 
           clearInterval(intervalId);
       }
   });
   
   //start button 
   
   startBtn.addEventListener('click',(event) => {
       //if the game is on or if there is a win we are going (call play function) to play//
    if (on || win) {
    play(); //play function will be the render and it will call below 
    } 
});
   

//---------------------------------------------------------------------------//





//5----------------- set the random numbers  , play function ---------------------------//
// play function 
function play() {
    win = false; // we start without winning 
    order = []; // we start with zero order. 
    playerOrder =[];
    flash = 0;// no flashes 
    turn = 1; // this will be the firts round of the game 
    turnCounter.innerHTML = 1; // as soon as we play the counter is going to turn one 
    good = true; // the player has not hit any  incorrect.



// we need to create a for loop in the function to determine the numbers of the game  which it have to be in random numbers //


for (var i = 0; i < 10; i++) {  // this will determine the number of the round of the game starting with i as a 0  but the  max number of round is 10. Also I is increasing  

order.push(Math.floor(Math.random() * 8) + 1) //get a random number 1-8 or 8 colors 
}


compTurn = true;// we start with the computers turn 
intervalId = setInterval(gameTurn, 800)  // this fuction will the help the determine the flashing withing a certain (800) amount of seconds 
// interval id will be call below 
}
 //-----------------------------------------------------------------------------------------------------------------------------//  
  








//6 --------------------------------------------define game turn function--------------------------------------------------- 

function gameTurn() {
    on = false; // this will help to the player to NOT turn or click any buttons 
if (flash == turn) { // if flash equal turn  it will be turn of the next one and the computer turn is over . 
    clearInterval(intervalId);
    compTurn = false; 
    clearColor;
    on = true; // the player will be able to play and touch a button 
}
   if (compTurn) {
       clearColor();
       setTimeout(() => { // this is similar to interval but it will stop after an amount of seconds
if (order[flash] == 1) one();// if the first order is one or up to eight  this will flash. functions  from one to eight will be defined below. 
if (order[flash] == 2) two(); 
if (order[flash] == 3) three();
if (order[flash] == 4) four();
if (order[flash] == 5) five();
if (order[flash] == 6) six();
if (order[flash] == 7) seven();
if (order[flash] == 8) eight();
flash++; // the computer turn this will make the buttons flash one by one   with an timeout of 200 miliseconds 
       }, 200);
    }
}
//--------------------------------------------------------------------------------------------------------------------//




 //7 -----------------------------clear color function to be define initial color for the clear back & flash function  -------------------------------
 function clearColor() { 
    redButton.style.backgroundColor = "red" ;
    yellowButton.style.backgroundColor = "yellow";
    blueButton.style.backgroundColor = "blue";
    greenButton.style.backgroundColor = "green";
    purpleButton.style.backgroundColor = "purple";
    grayButton.style.backgroundColor = "gray";
    orangeButton.style.backgroundColor = "orange";
    tealButton.style.backgroundColor = "teal";
}


// flash color function 
function flashColor() { 
    redButton.style.backgroundColor = "white" ;
    yellowButton.style.backgroundColor = "white";
    blueButton.style.backgroundColor = "white";
    greenButton.style.backgroundColor = "white";
    purpleButton.style.backgroundColor = "white";
    grayButton.style.backgroundColor = "white";
    orangeButton.style.backgroundColor = "white";
    tealButton.style.backgroundColor = "white";
}
//-------------------------------------------------------------------------------------//






// 8----------------------------------define number of function or button including the noise action + selection of the flash color-------------------//
function one() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    redButton.style.backgroundColor = "white";
};
function two() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    yellowButton.style.backgroundColor = "white";
};
function three() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    blueButton.style.backgroundColor = "white";
};
function four() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    greenButton.style.backgroundColor = "white";
};
function five() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    purpleButton.style.backgroundColor = "white";
};
function six() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    grayButton.style.backgroundColor = "white";
};
function seven() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    orangeButton.style.backgroundColor = "white";
};
function eight() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    tealButton.style.backgroundColor = "white";
};
//----------------------------------------------------------------------------------------------//


// 9 ---------------------------add event listener---------------------------------------------//
// this will determine if the console is on and is the players turn, the user can press a button 
redButton.addEventListener('click',(event) => {
    if (on) {
        playerOrder.push(1);// player can push one on the player order. 
        check();// this will check is the player is correct 
        one();
        if(!win) { // if the players win set a time out and clear the color after x amound of seconds 
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }       
});        
yellowButton.addEventListener('click',(event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if(!win) {
            setTimeout(( ) => {
                clearColor();
            }, 300);
        }
    }       
});    

blueButton.addEventListener('click',(event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if(!win) {
            setTimeout(( ) => {
                clearColor();
            }, 300);
        }
    }       
});    

greenButton.addEventListener('click',(event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if(!win) {
            setTimeout(( ) => {
                clearColor();
            }, 300);
        }
    }       
});    

purpleButton.addEventListener('click',(event) => {
    if (on) {
        playerOrder.push(5);
        check();
        five();
        if(!win) {
            setTimeout(( ) => {
                clearColor();
            }, 300);
        }
    }       
});    

grayButton.addEventListener('click',(event) => {
    if (on) {
        playerOrder.push(6);
        check();
        six();
        if(!win) {
            setTimeout(( ) => {
                clearColor();
            }, 300);
        }
    }       
});    

orangeButton.addEventListener('click',(event) => {
    if (on) {
        playerOrder.push(7);
        check();
        seven();
        if(!win) {
            setTimeout(( ) => {
                clearColor();
            }, 300);
        }
    }       
});    

tealButton.addEventListener('click',(event) => {
    if (on) {
        playerOrder.push(8);
        check();
        eight();
        if(!win) {
            setTimeout(( ) => {
                clearColor();
            }, 300);
        }
    }       
});    


// Function check is below 
//----------------------------------------------------------------------------------------




//  11---------------------------------------Function Check Function and calling a winner function ------------------------------

function check() { // if the player order is not the same as the player order 
    if ( playerOrder[playerOrder.length - 1] !== order[playerOrder.length -1]) 
    good = false; // the player is not correct 

if (playerOrder.length == 3 && good ) { // if player order is equal to x number of rounds  so is correct or call the win function 
    winGame();
}

//--------------------------------------------------------------------------------------------------------------------------------



// --------------------------------------------calling the loser  and strict mode------------------------------------------------------------------
if (good == false) {
    flashColor();
    turnCounter.innerHTML = "Loser!";
    let audio = document.getElementById("Loser")
        audio.play();
    setTimeout (() =>  {
        turnCounter.innerHTML = turn;
        clearColor();
 // -----------------------------------render ---------strict mode will make the user start from the beginning --------------------------
    if(strict) {
        play();
    } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
    }
}, 800);
noise = false;
}



//---------------------------render  ------------if the player wins  to turn to the next  turn --------------------------
if(turn == playerOrder.length && good && !win) {
    turn ++;
    playerOrder = [];
    compTurn = true;
    flash =0 ;
    turnCounter.innerHTML = turn;
    intervalId = setInterval( gameTurn, 800)
}
}
//----------------------------------------------------------------------------------



//----------------------------------setting a flash function ---------------------------



// 12 ---------------------------------win game function with message in the counter -----------
function winGame () {
    flashColor(); 
        turnCounter.innerHTML ="Yay!";
        on = false;
        win = true;  
        let audio = document.getElementById("Winner")
        audio.play();
    }

//-----------------------------------------------------------------------------------------------



 



//-----*****Initial Drawings of the code. ***-------------------------------
// The game is not functioning with this code. However it has a different way TO APPROACH to the random, color selection and flash.  



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