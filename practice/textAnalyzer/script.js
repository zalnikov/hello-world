// Анализатор текста
'use strict'
let textArea = document.querySelector('#textArea');
let wordCount = document.querySelector('#wordCount');
let characters = document.querySelector('#characters');
let filteredCharacters = document.querySelector('#filteredCharacters');
let statisticChar = document.querySelector('.statisticChar');
let chWordCount = document.querySelector('#chWordCount');
let chCharacters = document.querySelector('#chCharacters');
let chFilteredCharacters = document.querySelector('#chFilteredCharacters');
let chCharData = document.querySelector('#chCharData');

textArea.addEventListener('blur', () => {
    statisticChar.innerHTML = '';
    wordCount.innerHTML = '';
    characters.innerHTML = '';
    filteredCharacters.innerHTML = '';

    let arr = textArea.value.split(' ');
    let arrCharacters = textArea.value.split('');
    let arrFilteredCharacters = arrCharacters.filter( item => item != ' ');
    let arrUpperCaseChar = arrFilteredCharacters.map(item => item.toUpperCase());
    let objCharData = arrUpperCaseChar.reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {})

    if (chWordCount.checked) {
        wordCount.innerHTML = 'Количество слов в тексте: ' + arr.length + '.';
    }
    if (chCharacters.checked) {
        characters.innerHTML = 'Количество символов в тексте: ' + arrCharacters.length + '.';
    }
    if (chFilteredCharacters.checked) {
        filteredCharacters.innerHTML = 'Количество символов в тексте без учёта пробелов: ' + arrFilteredCharacters.length + '.';
    }
    if (chCharData.checked) {
        for (let elem in objCharData) {
            let p = document.createElement('p');
            p.innerHTML ='Кол-во символов ' + elem + ' в тексте - ' + objCharData[elem] + ' это ' + ((objCharData[elem] * 100)/arrCharacters.length).toFixed(2) + ' процента от общего количества символов. ';
            statisticChar.appendChild(p);
        }
    }
})

