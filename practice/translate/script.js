'use strict'

//Первый варинт. 4.1 - 4.2
let incomText = document.querySelector('#incomText');
let outText = document.querySelector('#outText');

let objLetters = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
    'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'й': 'i', 'и': 'i', 
    'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
    'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
    'щ': 'shch', 'ы': 'y', 'ь': '', 'ъ': '', 'э': 'e', 'ю': 'u', 'я': 'ya'
}



incomText.addEventListener('blur', function () {
    outText.value = translate(incomText.value, objLetters);
})

outText.addEventListener('blur', function () {
    incomText.value = translate(outText.value, swap(objLetters));
})

function translate(words, obj) {                                         
   return words.split('').map((letter) => {                     //из текста в массив, перебираем методом map с функцией
        let lowLetter = letter.toLowerCase();                   //переводим в нижний регистр т.к. в объекте везеде нижний
        let en = obj[lowLetter] ?? letter;                      //Проверка на совпадение букв
        return lowLetter === letter ? en : en.toUpperCase();    //если нижний регистр оставляем если нет то применяем toUpperCase
    }).join('');                                                //map возвращает массив по этому преобразовываем в строку методом join
}

function swap(obj) {
    let res = {};
    Object.keys(obj).forEach((value) => {
        let key = obj[value];
        res[key] = value;
    });
    return res;
}

//Второй вариант. 4.3

let incomTextSingle = document.querySelector('#incomTextSingle');
let chChangeTranslate = document.querySelector('#chChangeTranslate');
let resultDiv = document.querySelector('#resultDiv');

incomTextSingle.addEventListener('blur', function () {
    if (chChangeTranslate.checked) {
        resultDiv.innerHTML = translate(incomTextSingle.value, objLetters);
    } else {
        incomTextSingle.value = translate(incomTextSingle.value, swap(objLetters));
    }
})

//Третий вариант. 4.4

let incomTextNew = document.querySelector('#incomTextNew');
let chTranslateNew = document.querySelector('#chTranslateNew');
let resultDivNew = document.querySelector('#resultDivNew');

incomTextNew.addEventListener('blur', function () {
    if (chTranslateNew.checked === false) {
        incomTextNew.value = translate(incomTextNew.value, swap(objLetters));
    }
})
incomTextNew.addEventListener('input', function () {
    if (chTranslateNew.checked) {
        resultDivNew.innerHTML = translate(incomTextNew.value, objLetters);
    }
})