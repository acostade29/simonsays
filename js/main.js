



//cached elements
// create the document element by id for enter name, start game, select color

const messageEl = document.getElementById("message");
const messageInput = document.getElementById('inputMessage');
const messageBtn = document.getElementById('messageButton');


//to select colors of the panels once the game start and start button 
const ColorSelectionBtn = document.getElementsByClassName("panel");
const startGame = document.getElementById("start");

//event handler
// write a function that change the H1 TITLE to the name of the user once the included the name to Welcome + name
messageBtn.addEventListener('click',function() {
    messageEl.innerText = `Welcome ${messageInput.value}`;
})


//assign a color lookup to numbers//
let colorLookup ={
    1:'Red',
    2:'Blue',
    3:'Yellow',
    4:'Purple',
    5:'Green',
    6:'Gray',
    7:'Orange',
    8:'teal'
}

//create a sequence 
let sequence = [1,5,4,6,2,3,7,8,1];
randonSequence = Math.random(sequence);

//create the  elements for each color 

const blue = document.querySelector('blueButton');
const red = document.querySelector('redButton');
const yellow = document.querySelector('yellowButton');
const green = document.querySelector('greenButton');
const teal = document.querySelector('tealButton');
const gray = document.querySelector('grayButton');
const purple = document.querySelector('purpleButton');
const orange = document.querySelector('orangeButton');


//setting timer  and function flash  
let timer = 1000;
function flash(){
    randonSequence.forEach(function(color) {
        timer += 1000;
        setTimeout(() => {
            // function to turn on/off background colors
            changeColor(colorLookup[color])
        }, timer);
        setTimeout(() => {
            // function to turn on/off background colors
            colorReset();
        }, timer + 500);  
    })
}    
flash();
function changeColor(color) {
    if (color === 'Red') {
        redButton.style.backgroundColor = 'white'
    }
    if (color === 'Yellow') {
        yellowButton.style.backgroundColor = 'white'
    }
    if (color === 'Green') {
        greenButton.style.backgroundColor = 'white'
    }
    if (color === 'Blue') {
        blueButton.style.backgroundColor = 'white'
    }

    if (color === 'Gray') {
        grayButton.style.backgroundColor = 'white'
    }
    if (color === 'Purple') {
        purpleButton.style.backgroundColor = 'white'
    }
    if (color === 'Teal') {
        tealButton.style.backgroundColor = 'white'
    }
    if (color === 'Orange') {
        orangeButton.style.backgroundColor = 'white'
    }
}

//create a fucntion to reset the color to original color 
function colorReset() {
    redButton.style.backgroundColor = 'red';
    greenButton.style.backgroundColor = 'green';
    yellowButton.style.backgroundColor = 'yellow';
    blueButton.style.backgroundColor = 'blue';
    grayButton.style.backgroundColor = 'gray';
    purpleButton.style.backgroundColor = 'purple';
    tealButton.style.backgroundColor = 'teal';
    orangeButton.style.backgroundColor = 'orange';
}


