'use strict'

let tds = document.querySelectorAll('#table td');
let arrRandomNum =[];
let table = document.querySelector('#table');
let timerValue = document.querySelector('#timer');



tds.forEach(function (item, i) {
    item.addEventListener('click', function func() {
        if (arrRandomNum.indexOf(i) > -1) {
            item.classList.add('yellow');
        } else {
            item.classList.add('gray');
        }
    })
});

//Генератор рандомных чисел
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//Генератор массива в количесте num чисел
getRandomArr(10);
function getRandomArr(num) {
    //заполнение массива num количеством чисел
    while(arrRandomNum.length < num) {
        let randomNum = getRandomIntInclusive(0, 99);
        //проверка на повторы одинаковых случайных чисел в массиве
        arrRandomNum.indexOf(randomNum) > -1 ? getRandomArr(num) : arrRandomNum.push(randomNum);
    }
}
console.log(arrRandomNum);

//Таймер
let sec = 60;
function timer() {
    let timerId = setInterval(function () {
        sec = sec - 1;
        if (sec == 0) {
            alert('Время вышло!')
            clearInterval(timerId);
        }
        timerValue.innerHTML = sec + ' cек.';
    }, 1000);
    
}


table.addEventListener('click', function func() {
    timer();
    this.removeEventListener('click', func)
})
