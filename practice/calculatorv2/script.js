let numbers = document.querySelectorAll('.numbers');
let calcDisplay = document.querySelector('#calcDisplay');
let calcDisplayStr = document.querySelector('#calcDisplayStr');
let additionBtn = document.querySelector('#additionBtn');
let subtractBtn = document.querySelector('#subtractBtn');
let divisionBtn = document.querySelector('#divisionBtn');
let multiplicBtn = document.querySelector('#multiplicBtn');
let equallyBtn = document.querySelector('#equallyBtn');
let resetBtn = document.querySelector('#resetBtn');
let saveMemBtn = document.querySelector('#saveMemBtn');
let getMemBtn = document.querySelector('#getMemBtn');

let operator;
let numberOne;
let numberTwo;
let memory;


numbers.forEach(function (item) {
    item.addEventListener('click', function () {
        calcDisplay.innerHTML += item.innerHTML;
    })
});

additionBtn.addEventListener('click', function () {
    operator = '+';
    numberOne = Number(calcDisplay.innerHTML);
    numberTwo = '';
    calcDisplayStr.innerHTML = calcDisplay.innerHTML + '+'
    calcDisplay.innerHTML = '';
})

subtractBtn.addEventListener('click', function () {
    operator = '-';
    numberOne = Number(calcDisplay.innerHTML);
    numberTwo = '';
    calcDisplayStr.innerHTML = calcDisplay.innerHTML + '-'
    calcDisplay.innerHTML = '';
})

divisionBtn.addEventListener('click', function () {
    operator = '/';
    numberOne = Number(calcDisplay.innerHTML);
    numberTwo = '';
    calcDisplayStr.innerHTML = calcDisplay.innerHTML + '/'
    calcDisplay.innerHTML = '';
})

multiplicBtn.addEventListener('click', function () {
    operator = '*';
    numberOne = Number(calcDisplay.innerHTML);
    numberTwo = '';
    calcDisplayStr.innerHTML = calcDisplay.innerHTML + '*'
    calcDisplay.innerHTML = '';
})

equallyBtn.addEventListener('click', function () {
    if (numberTwo == '' || numberTwo == undefined) {
        numberTwo = Number(calcDisplay.innerHTML);
        calcDisplay.innerHTML = result(numberOne, numberTwo, operator);
        numberOne = '';
        calcDisplayStr.innerHTML += numberTwo + '=';
    } else {
        numberOne = Number(calcDisplay.innerHTML);
        calcDisplay.innerHTML = result(numberOne, numberTwo, operator);
        calcDisplayStr.innerHTML = numberOne + operator + numberTwo + '=';
    }
    
})

resetBtn.addEventListener('click', function () {
    if (calcDisplay.innerHTML == '') {
        calcDisplayStr.innerHTML = '';
        calcDisplay.innerHTML = numberOne;
        numberOne = '';
        numberTwo = '';
    } else {
        calcDisplay.innerHTML = '';
        calcDisplayStr.innerHTML = '';
        numberOne = '';
        numberTwo = '';
        operator = '';
    }
})

saveMemBtn.addEventListener('click', function () {
    memory = calcDisplay.innerHTML;
    console.log(memory);
})

getMemBtn.addEventListener('click', function () {
    calcDisplay.innerHTML = memory;
})


function result(num1, num2, operator) {
    let res = 0;
    if (operator == '+') {
        res = num1 + num2;
    }
    if (operator == '-') {
        res = num1 - num2;
    }
    if (operator == '/') {
        res = num1 / num2;
    }
    if (operator == '*') {
        res = num1 * num2;
    }
    return res;
}