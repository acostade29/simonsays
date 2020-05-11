/*------Constants------*/
// create panels colors as a const  
//colors: res, yellow, blue, green, orange, purple. const variables 


const panel = document.querySelector('.panel');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');


const teal = document.querySelector('.teal');
const gray = document.querySelector('.gray');
const purple = document.querySelector('.purple');
const orange = document.querySelector('.orange');


//sequence const creating and array of color.

const randomPanels = () => {
const panels = [
blue,
green,
yellow,
red,
gray,
teal,
orange,
purple,
teal
];

return panels[parseInt(Math.random() * panels.length)];
};

const sequence = [ 
randomPanels(),
randomPanels(),
randomPanels(),
randomPanels(),
randomPanels(),
randomPanels(),
randomPanels(),
randomPanels()
];


const flash = panel => {
    return new Promise((resolve,reject) => {
        panel.className += 'active';
        setTimeout(() => {
        panel.className.replace(
            'active',
            ''
        );
        setTimeout(() => {
    resolve();
        },250);
}, 1000);
});
};

const main= async () => {
    for (let panel of sequence) {
        await flash(panel)
    }
    flash ()
};

main();




  






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