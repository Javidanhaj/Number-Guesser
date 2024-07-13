const min = 1;
const max = 100;
const number = Math.floor(Math.random() * (max - min + 1)) + min;
const label = document.getElementById("mylabel");

let attempts = 0;
let guess = 0;
let isFound = false;

document.getElementById('mybutton').addEventListener('click', function() {
    this.style.display = 'none';
    
    while (!isFound) {
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);
    
    if(isNaN(guess)) {
        alert("Please enter a number");
    }
    else if(guess < min || guess > max) {
        alert(`Please enter a number between ${min} and ${max}`);
    }
    else{
        attempts++;
        if(guess < number) {
            alert("Too low, try again");
        }
        else if(guess > number) {
            alert("Too high, try again");
        }
        else {
            label.textContent = `Congratulations! You guessed the number in ${attempts} attempts`;
            isFound = true;
        }
    }
}
});
