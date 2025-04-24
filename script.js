const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
let selectedNumber = 0;
let winPts = 0;
let lossPts = 0;
let currentWrongGuesses = 0;

// Store the submit guess handler to allow removal
let submitGuessHandler = null;
let enterKeyHandler = null;
let clueHandler = null;

document.getElementById('starterBtn').addEventListener('click', () => {
    document.getElementById('starterBtn').classList.add('d-none');
    document.getElementById('easyBtn').classList.remove('d-none');
    document.getElementById('mediumBtn').classList.remove('d-none');
    document.getElementById('hardBtn').classList.remove('d-none');
    document.getElementById('impossibleBtn').classList.remove('d-none');
    document.getElementById('howTo').textContent = 'Select your mode...';
});

function selectedEasy() {
    document.getElementById('howTo').classList.remove('d-none');
    document.getElementById('howTo').textContent = 'Type in your number (1-10) and click enter to check if your guess is correct. Note: There is a limit of 6 guesses';
    let easyNumbers = numbers.filter(number => number <= 10);
    selectedNumber = Math.floor(Math.random() * easyNumbers.length) + 1;
    console.log(`Selected Easy Number: ${selectedNumber}`);
    startGame();
}

function selectedMedium() {
    document.getElementById('howTo').classList.remove('d-none');
    document.getElementById('howTo').textContent = 'Type in your number (1-20) and click enter to check if your guess is correct. Note: There is a limit of 6 guesses';
    let mediumNumbers = numbers.filter(number => number <= 20);
    selectedNumber = Math.floor(Math.random() * mediumNumbers.length) + 1;
    console.log(`Selected Medium Number: ${selectedNumber}`);
    startGame();
}

function selectedHard() {
    document.getElementById('howTo').classList.remove('d-none');
    document.getElementById('howTo').textContent = 'Type in your number (1-35) and click enter to check if your guess is correct. Note: There is a limit of 6 guesses';
    let hardNumbers = numbers.filter(number => number <= 35);
    selectedNumber = Math.floor(Math.random() * hardNumbers.length) + 1;
    console.log(`Selected Hard Number: ${selectedNumber}`);
    startGame();
}

function selectedImp() {
    document.getElementById('howTo').classList.remove('d-none');
    document.getElementById('howTo').textContent = 'Type in your number (1-50) and click enter to check if your guess is correct. Note: There is a limit of 6 guesses';
    let impNumbers = numbers.filter(number => number <= 50);
    selectedNumber = Math.floor(Math.random() * impNumbers.length) + 1;
    console.log(`Selected Impossible Number: ${selectedNumber}`);
    startGame();
}

function startGame() {
    // Hide mode buttons and show game elements
    document.getElementById('easyBtn').classList.add('d-none');
    document.getElementById('mediumBtn').classList.add('d-none');
    document.getElementById('hardBtn').classList.add('d-none');
    document.getElementById('impossibleBtn').classList.add('d-none');
    document.getElementById('inputZone').classList.remove('d-none');
    document.getElementById('imgs').classList.add('d-none');
    document.getElementById('clueBtn').classList.remove('d-none');
    document.getElementById('wrongGuesses').classList.remove('d-none');
    document.getElementById('clueContent').classList.remove('d-none');
    document.getElementById('wrongGuessTitle').classList.remove('d-none');


    // Reset wrong guesses
    currentWrongGuesses = 0;
    document.getElementById('wrongGuesses').textContent = currentWrongGuesses;

    // Remove existing listeners if they exist
    if (submitGuessHandler) {
        document.getElement-ById('submitGuessBtn').removeEventListener('click', submitGuessHandler);
    }
    if (enterKeyHandler) {
        document.getElementById('inputZone').removeEventListener('keypress', enterKeyHandler);
    }

    // Define new handlers
    submitGuessHandler = () => {
        let userGuess = document.getElementById('inputZone').value;
        console.log(`User Guess: ${userGuess}`);
        handleGuess(userGuess);
    };

    enterKeyHandler = (event) => {
        if (event.key === 'Enter') {
            document.getElementById('submitGuessBtn').click();
        }
    };

    // Add new listeners
    document.getElementById('submitGuessBtn').addEventListener('click', submitGuessHandler);
    document.getElementById('inputZone').addEventListener('keypress', enterKeyHandler);

    document.getElementById('inputZone').focus();

    clueProcess();
}

function clueProcess() {
    // Remove existing clue listener if it exists
    if (clueHandler) {
        document.getElementById('clueBtn').removeEventListener('click', clueHandler);
    }

    // Define new clue handler
    clueHandler = () => {
        let numberInfo = '';
        if (selectedNumber > 20) {
            numberInfo = 'The number is greater than 20.';
        } else if (selectedNumber > 10) {
            numberInfo = 'The number is greater than 10 and less than or equal to 20.';
        } else {
            numberInfo = 'The number is between 1 and 10.';
        }
        document.getElementById('clueContent').textContent = numberInfo;
    };

    // Add new clue listener
    document.getElementById('clueBtn').addEventListener('click', clueHandler);
}

function handleGuess(userGuess) {
    if (userGuess == selectedNumber) {
        alert('You win!');
        winPts++;
        document.getElementById('winsAm').textContent = winPts;
        resetUI();
    } else {
        currentWrongGuesses++;
        document.getElementById('wrongGuesses').textContent = currentWrongGuesses;
        document.getElementById('inputZone').value = '';
        document.getElementById('inputZone').focus();

        if (currentWrongGuesses >= 6) {
            alert('You lose! The correct number was ' + selectedNumber);
            lossPts++;
            document.getElementById('LossesAm').textContent = lossPts;
            resetUI();
        } else {
            alert('Wrong guess. Try again!');
        }
    }
}

function resetUI() {
    // Show mode buttons and hide game elements
    document.getElementById('easyBtn').classList.remove('d-none');
    document.getElementById('mediumBtn').classList.remove('d-none');
    document.getElementById('hardBtn').classList.remove('d-none');
    document.getElementById('impossibleBtn').classList.remove('d-none');
    document.getElementById('inputZone').classList.add('d-none');
    document.getElementById('clueBtn').classList.add('d-none');
    document.getElementById('imgs').classList.remove('d-none');
    document.getElementById('howTo').classList.add('d-none');
    document.getElementById('inputZone').value = '';
    document.getElementById('clueContent').textContent = '';
    currentWrongGuesses = 0;
    document.getElementById('wrongGuesses').textContent = currentWrongGuesses;
    document.getElementById('wrongGuessTitle').classList.add('d-none');
    document.getElementById('wrongGuesses').classList.add('d-none');
    document.getElementById('clueContent').classList.add('d-none');
    document.getElementById('clueBtn').classList.add('d-none');
    document.getElementById('wrongGuessTitle').classList.add('d-none');

    // Remove event listeners
    if (submitGuessHandler) {
        document.getElementById('submitGuessBtn').removeEventListener('click', submitGuessHandler);
        submitGuessHandler = null;
    }
    if (enterKeyHandler) {
        document.getElementById('inputZone').removeEventListener('keypress', enterKeyHandler);
        enterKeyHandler = null;
    }
    if (clueHandler) {
        document.getElementById('clueBtn').removeEventListener('click', clueHandler);
        clueHandler = null;
    }
}

