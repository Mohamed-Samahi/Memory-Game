// ---- start controling the name and start screen ---- //

// select the game cover screen
let controlScreen = document.querySelector('.control-buttons');

// select the start button to start game
let startButton = document.querySelector('.control-buttons span');

// declaring a variable to hold the player's name
let playerName;

let playerNameSpan = document.querySelector('.info-container .name span');

// adding click event to the start button
startButton.addEventListener('click', () => {

    // getting the player's name by prompt window and storing it in the variable
    playerName = window.prompt('Enter Your Name');

    // appending the player's name to the name span
    if (playerName == "") {

        playerNameSpan.innerHTML = 'unknown';

    } else {

        playerNameSpan.innerHTML = playerName;

    }

    // removing the control screen from the document page
    controlScreen.style.display = 'none';

});

// ---- end controling the name and start screen ---- //


// ---- start controling the cards ----//

let cards = document.querySelectorAll('.memory-game-blocks .game-block');

let blocksContainer = document.querySelector('.memory-game-blocks');

let triesSpan = document.querySelector('.tries span');

let isFlipped;

let arrIndex = Array.from(Array(blocksContainer.children.length).keys());

shuffle(arrIndex);

cards.forEach((e, index) => {

    e.style.order = arrIndex[index];

    e.addEventListener('click', () => {

        e.classList.add('is-flipped');

        isFlipped = Array.from(blocksContainer.children).filter(e => e.classList.contains('is-flipped'));

        if (isFlipped.length === 2) {

            blocksContainer.classList.add('no-clicking');

            if (isFlipped[0].dataset.technology === isFlipped[1].dataset.technology){

                isFlipped[0].classList.remove('is-flipped');
                isFlipped[1].classList.remove('is-flipped');

                isFlipped[0].classList.add('has-match');
                isFlipped[1].classList.add('has-match');

                setTimeout(() => {

                    blocksContainer.classList.remove('no-clicking');

                }, 1000);

            } else {

                triesSpan.innerHTML = parseInt(triesSpan.innerHTML) + 1;

                setTimeout(() => {

                    isFlipped[0].classList.remove('is-flipped');
                    isFlipped[1].classList.remove('is-flipped');
                    blocksContainer.classList.remove('no-clicking');

                }, 1000);

            }

        }

    });

});


// ---- start controling array shuffles ----//

function shuffle(array) {
    let arrayLength = array.length
    let random;
    
    while (arrayLength > 0) {

        random = Math.floor(Math.random() * arrayLength);

        [array[arrayLength], array[random]] = [array[random], array[arrayLength]];

        arrayLength--;

    }

    // return array;

}

// ---- end controling array shuffles ----//