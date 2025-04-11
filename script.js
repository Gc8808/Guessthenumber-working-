const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
let selectedNumber = '';
let winPts = 0
let lossPts = 0


document.getElementById('starterBtn').addEventListener('click', () => {
    
    document.getElementById('starterBtn').classList.add('d-none');
    
    document.getElementById('easyBtn').classList.remove('d-none');
    document.getElementById('mediumBtn').classList.remove('d-none');
    document.getElementById('hardBtn').classList.remove('d-none');
    document.getElementById('impossibleBtn').classList.remove('d-none');
    document.getElementById('howTo').textContent = 'Select your mode...';

});

function selectedEasy() {
    console.log(document.getElementById('howTo')); 
    document.getElementById('howTo').classList.remove('d-none');
    document.getElementById('howTo').textContent='Type in your number (1-10) and click enter to check if your guess is correct. Note: There is a limit of 6 guesses';
    let easyNumbers = numbers.filter(number => number <= 10);
    selectedNumber = Math.floor(Math.random() * easyNumbers.length);
    console.log(`Selected Easy Number: ${selectedNumber}`);
    document.getElementById('easyBtn').classList.add('d-none');
    document.getElementById('mediumBtn').classList.add('d-none');
    document.getElementById('hardBtn').classList.add('d-none');
    document.getElementById('impossibleBtn').classList.add('d-none');
    document.getElementById('inputZone').classList.remove('d-none');
    //document.getElementById('submitGuessBtn').classList.remove('d-none');
    document.getElementById('imgs').classList.add('d-none');
    document.getElementById('clueBtn').classList.remove('d-none');
    startUpProcess();
}

function selectedMedium() {
    let easyNumbers = numbers.filter(number => number <= 20);
    selectedNumber = Math.floor(Math.random() * easyNumbers.length);
    console.log(`Selected Easy Number: ${selectedNumber}`);
    document.getElementById('howTo').classList.remove('d-none');
    document.getElementById('easyBtn').classList.add('d-none');
    document.getElementById('mediumBtn').classList.add('d-none');
    document.getElementById('hardBtn').classList.add('d-none');
    document.getElementById('impossibleBtn').classList.add('d-none');
    document.getElementById('inputZone').classList.remove('d-none');
   // document.getElementById('submitGuessBtn').classList.remove('d-none');
    document.getElementById('imgs').classList.add('d-none');
    document.getElementById('clueBtn').classList.remove('d-none');
    document.getElementById('howTo').textContent='Type in your number (1-20) and click enter to check if your guess is correct. Note: There is a limit of 6 guesses';
    startUpProcess();
}


function selectedHard() {
    let easyNumbers = numbers.filter(number => number <= 35);
    selectedNumber = Math.floor(Math.random() * easyNumbers.length);
    console.log(`Selected Easy Number: ${selectedNumber}`);
    document.getElementById('howTo').classList.remove('d-none');
    document.getElementById('easyBtn').classList.add('d-none');
    document.getElementById('mediumBtn').classList.add('d-none');
    document.getElementById('hardBtn').classList.add('d-none');
    document.getElementById('impossibleBtn').classList.add('d-none');
    document.getElementById('inputZone').classList.remove('d-none');
    //document.getElementById('submitGuessBtn').classList.remove('d-none');
    document.getElementById('imgs').classList.add('d-none');
    document.getElementById('clueBtn').classList.remove('d-none');
    document.getElementById('howTo').textContent='Type in your number (1-35) and click enter to check if your guess is correct. Note: There is a limit of 6 guesses';
    startUpProcess();
}

function selectedImp() {
    let easyNumbers = numbers.filter(number => number <= 50);
    selectedNumber = Math.floor(Math.random() * easyNumbers.length);
    console.log(`Selected Easy Number: ${selectedNumber}`);
    document.getElementById('howTo').classList.remove('d-none');
    document.getElementById('easyBtn').classList.add('d-none');
    document.getElementById('mediumBtn').classList.add('d-none');
    document.getElementById('hardBtn').classList.add('d-none');
    document.getElementById('impossibleBtn').classList.add('d-none');
    document.getElementById('inputZone').classList.remove('d-none');
    //document.getElementById('submitGuessBtn').classList.remove('d-none');
    document.getElementById('imgs').classList.add('d-none');
    document.getElementById('clueBtn').classList.remove('d-none');
    document.getElementById('howTo').textContent='Type in your number (1-50) and click enter to check if your guess is correct. Note: There is a limit of 6 guesses';
    startUpProcess();
}

function startUpProcess() {
    
    document.getElementById('submitGuessBtn').addEventListener('click', () => {
        let userGuess = document.getElementById('inputZone').value;
        console.log(`User Guess: ${userGuess}`);
        if (userGuess == selectedNumber) {
            alert('You win!')
           
        
            // Rest of logic
            document.getElementById('easyBtn').classList.remove('d-none');
            document.getElementById('mediumBtn').classList.remove('d-none');
            document.getElementById('hardBtn').classList.remove('d-none');
            document.getElementById('impossibleBtn').classList.remove('d-none');
            document.getElementById('inputZone').classList.add('d-none');
           // document.getElementById('submitGuessBtn').classList.add('d-none');
            document.getElementById('imgs').classList.remove('d-none');
            document.getElementById('clueBtn').classList.add('d-none');
            document.getElementById('howTo').classList.add('d-none');
            endGame(win);
        }
         else {
            alert('Wrong guess. Try again!');
            document.getElementById('inputZone').value = '';
            document.getElementById('inputZone').focus();
        }
    });
    document.getElementById('inputZone').focus();
    document.getElementById('inputZone').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            document.getElementById('submitGuessBtn').click();
        }
    });

}
function clueProcess() {
document.getElementById('clueBtn').addEventListener('click', () => {
    let numberInfo = ''; // Declare this outside so it's accessible later

    if (selectedNumber > 20) {
        console.log("The number is greater than 20.");
        numberInfo = 'The number is greater than 20.';
    } else if (selectedNumber > 10) {
        console.log("The number is greater than 10.");
        numberInfo = 'The number is greater than 10 and less than 20.';
    } else if (Math.abs(selectedNumber) <= 99) {
        console.log("The number has one or two digits.");
        numberInfo = 'The number is between 0 and 10';
    }

    document.getElementById('clueContent').textContent = numberInfo;

    
});
}

function endGame(win) {
    if (win === true) {
        winPts++;
        document.getElementById('winsAm').textContent = winPts;
    } else {
        lossPts++;
        document.getElementById('lossesAm').textContent = lossPts;
    }
}
