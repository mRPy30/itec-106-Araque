document.addEventListener("DOMContentLoaded", function () {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;

    const btn = document.getElementById('btn');
    const guessInput = document.getElementById('guessInput');

    btn.addEventListener('click', checkGuess);
    guessInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkGuess();
        }
    });

    function checkGuess() {
        const guess = parseInt(guessInput.value);
        
        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert('Please enter a valid number between 1 and 10');
        } else {
            attempts++;
            if (guess === randomNumber) {
                alert(`Congratulations! You guessed the correct number in ${attempts} attempts!`);
            } else if (guess > randomNumber) {
                alert('Too high! Try again.');
            } else {
                alert('Too low! Try again.');
            }
        }
        
        guessInput.value = '';
    }
});
