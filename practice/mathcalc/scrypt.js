'Use strict'
//Квадратное уравнение.
let btnQuadEquat = document.querySelector('#btnQuadEquat');
let resultQuadEquat = document.querySelector('#resultQuadEquat');


btnQuadEquat.addEventListener('click', () => {
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let c = document.querySelector('#c').value;
    let discriminant = Math.pow(Number(b), 2)  - 4 * Number(a) * Number(c);
    
    resultQuadEquat.innerHTML = 'D = ' + discriminant;

    if (discriminant < 0) {
        resultQuadEquat.innerHTML += ' Так как дискриминант меньше нуля, то уравнение не имеет действительных решений.'
    } else if (discriminant > 0) {
        let x1 = ((-b + Math.sqrt(discriminant))/(2 * a)).toFixed(4);
        let x2 = ((-b - Math.sqrt(discriminant))/(2 * a)).toFixed(4);
        resultQuadEquat.innerHTML +=' Так как дискриминант больше нуля то, квадратное уравнение имеет два действительных корня:' + ' x1 =' + x1 + '; x2 = ' + x2;
    } else if (discriminant == 0) {
        let x1 = (-b / 2* a).toFixed(4);
        resultQuadEquat.innerHTML += ' Так как дискриминант равен нулю то, квадратное уравнение имеет один действительный корень:' + 'x1 = ' + x1;
    }

})

//Тройка Пифагора.

let InputsPythTriple = document.querySelector('#inputPythTriplet'); //получаю блок с инпутами
let inputPythTriplet = InputsPythTriple.querySelectorAll('div > input'); //из полученного блока беру инпуты
let btn = document.querySelector('#btnPythTriplet');
let resultPythTriplet = document.querySelector('#resultPythTriplet');

btn.addEventListener ('click', () => {
    let arr = [];
    for (let value of inputPythTriplet) {
        arr.push(Number(value.value));
    }
    let maxValue = Math.max(...arr);
    let maxIndex = arr.indexOf(maxValue);
    arr.splice(maxIndex, 1);
    let sum = 0;
    for (let elem of arr) {
        sum += elem ** 2;
    }
    if (Math.pow(maxValue, 2) == sum) {
        resultPythTriplet.innerHTML = 'Эти числа являются тройкой Пифагора.'
    } else {
        resultPythTriplet.innerHTML = 'Эти числа НЕ являются тройкой Пифагора.'
    }
})

// Делитель числа.

let inputDivisor = document.querySelector("#inputDivisor");
let btnDivisor = document.querySelector('#btnDivisor');
let resultDivisor = document.querySelector('#resultDivisor');

function divisor(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}
btnDivisor.addEventListener('click', () => {
    resultDivisor.innerHTML = divisor(inputDivisor.value).join('-');
})

// Общие делаители.

let inputGCDOne = document.querySelector('#inputGCDOne');
let inputGCDTwo = document.querySelector('#inputGCDTwo');
let btnGCD = document.querySelector('#btnGCD');
let resultGCD = document.querySelector('#resultGCD');

function greatestCommonDivisor(numberOne, numberTwo) {
    let arr1 = divisor(numberOne);
    let arr2 = divisor(numberTwo);
    let intersection = arr1.filter(x => arr2.includes(x));
    return intersection;
}

btnGCD.addEventListener('click', () => {
    resultGCD.innerHTML = greatestCommonDivisor(inputGCDOne.value, inputGCDTwo.value).join('-');
})

// Наибольший общий делитель чисел.

let inputMaxGCDOne = document.querySelector('#inputMaxGCDOne');
let inputMaxGCDTwo = document.querySelector('#inputMaxGCDTwo');
let btnMaxGCD = document.querySelector('#btnMaxGCD');
let resultMaxGCD = document.querySelector('#resultMaxGCD');

btnMaxGCD.addEventListener('click', () => {
    let strDivisor = greatestCommonDivisor(inputMaxGCDOne.value, inputMaxGCDTwo.value);
    resultMaxGCD.innerHTML = Math.max(...strDivisor);
})

// Наименьшее общее кратное.

let inputLCMOne = document.querySelector('#inputLCMOne');
let inputLCMTwo = document.querySelector('#inputLCMTwo');
let btnLCM = document.querySelector('#btnLCM');
let resultLCM = document.querySelector('#resultLCM');

btnLCM.addEventListener('click', () => {
    let strDivisor = greatestCommonDivisor(inputLCMOne.value, inputLCMTwo.value);
    let resultGCD = Math.max(...strDivisor);
    resultLCM.innerHTML = (inputLCMOne.value * inputLCMTwo.value)/resultGCD;

})