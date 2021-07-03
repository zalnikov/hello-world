let inputNumber = document.querySelector('#inputNumber');
let answer = document.querySelector('#answer');
let btn = document.querySelector('#button');


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}   

let randomNumber = randomInteger(1, 100);

btn.addEventListener('click', function () {
    if (randomNumber > inputNumber.value) {
        answer.innerHTML = 'Маловато'
    } else if (randomNumber < inputNumber.value) {
        answer.innerHTML = 'Многовато'
    } else {
        answer.innerHTML = 'УГАДАЛ!'
    }
    console.log(randomNumber);
})