const display = document.getElementById('show');

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error, try again!";
    }
}

function displayVal(input) {
    display.value += input;
}

function clearCalculator() {
    display.value = "";
}