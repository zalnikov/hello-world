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