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
let order =[]; //order of the lights//
let strict = false; 
let noice = true;
let on = false;
let win;
let good; //if the player is doing a good move//
let turn; //whos turn is going//
let compTurn; // computer turns 
let intervalId; 
let playerOrder = []; //player order to track 

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
           turnCounter.innerHTML = "";
           clearColor()
           clearInterval(intervalId)
       }
   });
   
   //start button 
   
   startBtn.addEventListener('click',(event) => {
    if (on || win) {
    play();
    } 
});
   
// to get random number in the play game 
function play() {
    win = false;
    order = [];
    playerOrder =[];
    flash = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 8) + 1) //get a random number 1-8 
}
compTurn = true;
intervalId = setInterval(gameTurn, 800)  // this fuction will the help the tetermine the flashing withing a certain amount of seconds 

}
   
  
// define game turn function 

function gameTurn() {
    on = false; // this will help to the player to turn or click any buttons 
if (flash == turn) { //computer turns 
    clearInterval(intervalId);
    compTurn = false; 
    clearColor;
    on = true; 
}
   if (compTurn) {
       clearColor();
       setTimeout(() => {
if (order[flash] == 1) one();
if (order[flash] == 2) two();
if (order[flash] == 3) three();
if (order[flash] == 4) four();
if (order[flash] == 5) five();
if (order[flash] == 6) six();
if (order[flash] == 7) seven();
if (order[flash] == 8) eight();
flash++;
       },200);
    }
}

function one() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    redButton.style.backgroundColor = "white";


}
function two() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    yellowButton.style.backgroundColor = "white";


}
function three() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    blueButton.style.backgroundColor = "white";


}
function four() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    greenButton.style.backgroundColor = "white";


}
function five() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    purpleButton.style.backgroundColor = "white";


}
function six() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    grayButton.style.backgroundColor = "white";


}
function seven() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    orangeButton.style.backgroundColor = "white";


}
function eight() {
    if (noice) {
        let audio = document.getElementById("clickTurn")
        audio.play();
    }
    noise = true;
    tealButton.style.backgroundColor = "white";


}

 // clear color function 
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



redButton.addEventListener('click',(event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win) {
            setTimeout(( ) => {
                clearColor();
            }, 300);
        }
    }       
})        


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
})    

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
})    

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
})    

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
})    

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
})    

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
})    

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
})    





function check() {
    if ( playerOrder[playerOrder.length - 1] !== order[playerOrder.length -1]) 
    good = false;

if (playerOrder.length == 8 && good ) {
    winGame();
}
if (good == false) {
    flashColor();
    turnCounter.innerHTML = "Loser!";
    setTimeout (() =>  {
        turnCounter.innerHTML = turn;
        clearColor();
    
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

if(turn == playerOrder.length && good && !win) {
    turn ++;
    playerOrder = [];
    compTurn = true;
    flash =0 ;
    turnCounter.innerHTML = turn;
    intervalId = setInterval( gameTurn, 800)
}
}



function winGame () {
    flashColor(); 
        turnCounter.innerHTML =  "winner!!"
        on = false;
        win = true;  
    }








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