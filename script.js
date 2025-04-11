const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
let selectedNumber = '';

document.getElementById('starterBtn').addEventListener('click', () => {
    document.getElementById('starterBtn').classList.add('d-none');
    
    document.getElementById('easyBtn').classList.remove('d-none');
    document.getElementById('mediumBtn').classList.remove('d-none');
    document.getElementById('hardBtn').classList.remove('d-none');
    document.getElementById('impossibleBtn').classList.remove('d-none');
});

function selectedEasy() {
    let easyNumbers = numbers.filter(number => number <= 10);
    selectedNumber = Math.floor(Math.random() * easyNumbers.length);
    console.log(`Selected Easy Number: ${selectedNumber}`);
    document.getElementById('easyBtn').classList.add('d-none');
    document.getElementById('mediumBtn').classList.add('d-none');
    document.getElementById('hardBtn').classList.add('d-none');
    document.getElementById('impossibleBtn').classList.add('d-none');
    document.getElementById('inputZone').classList.remove('d-none');
    document.getElementById('submitGuessBtn').classList.remove('d-none');
    document.getElementById('imgs').classList.add('d-none');
    document.getElementById('clueBtn').classList.remove('d-none');
    startUpProcess();
}

function selectedMedium() {
    let easyNumbers = numbers.filter(number => number <= 20);
    selectedNumber = Math.floor(Math.random() * easyNumbers.length);
    console.log(`Selected Easy Number: ${selectedNumber}`);
    document.getElementById('easyBtn').classList.add('d-none');
    document.getElementById('mediumBtn').classList.add('d-none');
    document.getElementById('hardBtn').classList.add('d-none');
    document.getElementById('impossibleBtn').classList.add('d-none');
    document.getElementById('inputZone').classList.remove('d-none');
    document.getElementById('submitGuessBtn').classList.remove('d-none');
    document.getElementById('imgs').classList.add('d-none');
    document.getElementById('clueBtn').classList.remove('d-none');
    startUpProcess();
}


function selectedHard() {
    let easyNumbers = numbers.filter(number => number <= 35);
    selectedNumber = Math.floor(Math.random() * easyNumbers.length);
    console.log(`Selected Easy Number: ${selectedNumber}`);
    document.getElementById('easyBtn').classList.add('d-none');
    document.getElementById('mediumBtn').classList.add('d-none');
    document.getElementById('hardBtn').classList.add('d-none');
    document.getElementById('impossibleBtn').classList.add('d-none');
    document.getElementById('inputZone').classList.remove('d-none');
    document.getElementById('submitGuessBtn').classList.remove('d-none');
    document.getElementById('imgs').classList.add('d-none');
    document.getElementById('clueBtn').classList.remove('d-none');
    startUpProcess();
}

function selectedImp() {
    let easyNumbers = numbers.filter(number => number <= 50);
    selectedNumber = Math.floor(Math.random() * easyNumbers.length);
    console.log(`Selected Easy Number: ${selectedNumber}`);
    document.getElementById('easyBtn').classList.add('d-none');
    document.getElementById('mediumBtn').classList.add('d-none');
    document.getElementById('hardBtn').classList.add('d-none');
    document.getElementById('impossibleBtn').classList.add('d-none');
    document.getElementById('inputZone').classList.remove('d-none');
    document.getElementById('submitGuessBtn').classList.remove('d-none');
    document.getElementById('imgs').classList.add('d-none');
    document.getElementById('clueBtn').classList.remove('d-none');
    startUpProcess();
}

function startUpProcess() {
    
    document.getElementById('submitGuessBtn').addEventListener('click', () => {
        let userGuess = document.getElementById('inputZone').value;
        console.log(`User Guess: ${userGuess}`);
        if (userGuess == selectedNumber) {
            alert('Congratulations! You guessed the correct number!');
            document.getElementById('easyBtn').classList.remove('d-none');
            document.getElementById('mediumBtn').classList.remove('d-none');
            document.getElementById('hardBtn').classList.remove('d-none');
            document.getElementById('impossibleBtn').classList.remove('d-none');
            document.getElementById('inputZone').classList.add('d-none');
            document.getElementById('submitGuessBtn').classList.add('d-none');
            document.getElementById('imgs').classList.remove('d-none');
            document.getElementById('clueBtn').classList.add('d-none');
            endGame(win);

        } else {
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
    alert(`Hint: The number is ${selectedNumber}.`);
});
}