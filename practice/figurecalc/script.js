// Калькулятор квадрата

let select = document.querySelector('#selectValue');
let textParam = document.querySelector('.param');
let formula = document.querySelector('.formula');
let input = document.querySelector('input');
let value = document.querySelector('#value');

select.addEventListener('change', () => {
    input.value = '';
    if (select.value == 1) {
        textParam.innerHTML = 'a =';
        formula.innerHTML = 'S = a <sup>2</sup>';
        value.innerHTML = '';
        input.addEventListener('input', () => {
            value.innerHTML = '= ' + input.value + '<sup>2</sup> = ' + Math.pow(input.value, 2);
        })
    } else if (select.value == 2){
        textParam.innerHTML = 'd =';
        formula.innerHTML = 'S = 1/2 * d<sup>2</sup>';
        value.innerHTML = '';
        input.addEventListener('input', () => {
            value.innerHTML = '= 1/2 *' + input.value + '<sup>2</sup> = ' + 1/2 * Math.pow(input.value, 2);
        })
    } else if (select.value == 3){
        textParam.innerHTML = 'a =';
        formula.innerHTML = 'P = 4a';
        value.innerHTML = '';
        input.addEventListener('input', () => {
            value.innerHTML = '= 4 * '+ input.value + ' = ' + 4*input.value;
        })

    } else {
        textParam.innerHTML = 'd =';
        formula.innerHTML = 'P = 2&#x221a 2 * d';
        value.innerHTML = '';
        input.addEventListener('input', () => {
            value.innerHTML = '=' + '2&#x221a 2 *' + input.value + '=' + (2 * Math.sqrt(2) * input.value).toFixed(4);
        })
    }
})

input.addEventListener('input', () => {
    value.innerHTML = '= ' + input.value + '<sup>2</sup> = ' + Math.pow(input.value, 2);
})

// Калькулятор прямоугольника

let selectValueRec = document.querySelector('#selectValueRec');
let formulaRec = document.querySelector('.formulaRec');
let inputRecA = document.querySelector('#inputRecA');
let inputRecB = document.querySelector('#inputRecB');
let valueRec = document.querySelector('#valueRec');
let buttonRec = document.querySelector('#btnRec');


selectValueRec.addEventListener('change', function () {
    if (selectValueRec.value == 2) {
        valueRec.innerHTML = '';
        formulaRec.innerHTML = 'P = 2(a + b)';

    } else {
        valueRec.innerHTML = '';
        formulaRec.innerHTML = 'S = a * b';
    }
})

buttonRec.addEventListener('click', () => {
    if (inputRecA.value == 0 || inputRecB.value == 0) { 
        alert('ОШИБКА! Поле а или поле б пустое')
    } else if (selectValueRec.value == 2) {
        valueRec.innerHTML = ' = 2 * ' + '('+ inputRecA.value + '+' + inputRecB.value + ')' + '=' + 2*(Number(inputRecA.value) + Number(inputRecB.value));
    } else {
        valueRec.innerHTML = ' =' + inputRecA.value + '*' + inputRecB.value + '=' + inputRecA.value * inputRecB.value;
    }
})

//Калькулятор круга

let selectValueCircle = document.querySelector('#selectValueCircle');
let imgCircle = document.querySelector('#imgCircle');
let circleParam = document.querySelector('#circleParam');
let inputCircleValue = document.querySelector('#inputCircleValue');
let btnCircle = document.querySelector('#btnCircle');
let formulaCircle = document.querySelector('#formulaCircle');
let resultCircle = document.querySelector('#resultCircle');

selectValueCircle.addEventListener('change', () => {
    switch (selectValueCircle.value) {
        case '1':
            resultCircle.innerHTML = '';
            inputCircleValue.value = '';
            imgCircle.src = 'circle1.png';
            circleParam.innerHTML = 'r =';
            formulaCircle.innerHTML = 'S = &pi; r<sup>2</sup>';
            break;
        case '2':
            resultCircle.innerHTML = '';
            inputCircleValue.value = '';
            imgCircle.src = 'circle2.png';
            circleParam.innerHTML = 'd =';
            formulaCircle.innerHTML = 'S = 1/4&pi; d<sup>2</sup>';
            break;
        case '3':
            resultCircle.innerHTML = '';
            inputCircleValue.value = '';
            imgCircle.src = 'circle3.png';
            circleParam.innerHTML = 'l =';
            formulaCircle.innerHTML = 'S = l<sup>2</sup> / 4 &pi;';
            break;
        case '4':
            resultCircle.innerHTML = '';
            inputCircleValue.value = '';
            imgCircle.src = 'circle1.png';
            circleParam.innerHTML = 'r =';
            formulaCircle.innerHTML = 'P = 2&pi;r';
            break;
    }
})

btnCircle.addEventListener('click', () => {
    if (inputCircleValue.value == 0) {
        alert('Ошибка! Поле ввода пустое!')
    } else switch(selectValueCircle.value) {
        case '1':
            resultCircle.innerHTML = '= 3,14 * ' + inputCircleValue.value + '<sup>2</sup> =' + ((inputCircleValue.value ** 2) * 3.14).toFixed(4);
            break;
        case '2':
            resultCircle.innerHTML = '= ' + ' (1/4*3,14) * '+ inputCircleValue.value +'<sup>2</sup> =' + (((1/4 * 3.14) * (inputCircleValue.value ** 2))).toFixed(4);
            break;
        case '3':
            resultCircle.innerHTML = '= ' + inputCircleValue.value + '<sup>2</sup> / 4 * 3.14 = ' + ((inputCircleValue.value ** 2)/(4 * 3.14)).toFixed(4);
            break;
        case '4':
            resultCircle.innerHTML = '= 2 * 3.14 * ' + inputCircleValue.value + ' = ' + ((2 * 3.14 * inputCircleValue.value)).toFixed(4);
            break;
    }
})

//Калькулятор треугольника

let btnTriangle = document.querySelector('#btnTriangle');
let resultTriangleP = document.querySelector('#resultTriangleP');
let resultTriangleS = document.querySelector('#resultTriangleS');

btnTriangle.addEventListener('click', () => {
    let inputValueA = Number(document.querySelector('#inputTriA').value);
    let inputValueB = Number(document.querySelector('#inputTriB').value);
    let inputValueC = Number(document.querySelector('#inputTriC').value);
    let p;
    let s;
    
    if (inputValueA == 0 || inputValueB == 0 || inputValueC == 0) {
        alert('Ошибка! Введите значения во все поля ввода!');
    } else {
        p = ((inputValueA + inputValueB +inputValueC)/2);
        resultTriangleP.innerHTML = '= (' + inputValueA + ' + ' + inputValueB + ' + ' + inputValueC + ')/2 =' + p;
        s = Math.sqrt(p * (p - inputValueA) * (p - inputValueB) * (p - inputValueC)).toFixed(4);
        resultTriangleS.innerHTML = '= &#x221a' + '(' + p + ' * ' + '(' + p + ' - ' + inputValueA + ')' + '(' + p + ' - ' + inputValueB + ')' + '(' + p + ' - ' + inputValueC + ') = ' + s; 
    }
})