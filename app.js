//global variables
let secretNumber = 0;
let attempts = 0;
let listOfNumbers = [];

function assignTextElement(element,texto) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = texto;
    return;
}

function verifyAttempt() {
    let numberUser = parseInt(document.getElementById('userValue').value);
    console.log(secretNumber);
    console.log(numberUser);

    if(numberUser == secretNumber){
        assignTextElement('p',`Congratulations! You have made ${attempts} ${attempts == 1 ? 'attempt' : 'attempts'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numberUser < secretNumber){
            assignTextElement('p','The secret number is higher');
        } else {
        assignTextElement('p','The secret number is lower');
        }
        boxClear();
        attempts++;
    }
    return; 
}
function boxClear() {
    document.getElementById('userValue').value = '';
}

function generateSecretNumber() {
    let generateNumber = Math.floor(Math.random() * 10) + 1;
    if(listOfNumbers.includes(generateNumber)) {
        return generateSecretNumber();
    } else {
        listOfNumbers.push(generateNumber);
        return generateNumber;
    }

}
function initialConditions() {
    assignTextElement('h1', 'Guess the secret number');
    assignTextElement('p', 'Guess the secret number between 1 and 10');
    secretNumber = generateSecretNumber();
    attempts = 1;
}
function restartGame() {
    //clear the input box
    boxClear();
    //Initial conditions
    initialConditions();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
initialConditions();

