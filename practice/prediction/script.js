let predictions = [
    'у вас сегодня будет замечательный день',
    'сегодня лучше не выходите из дома',
    'сегодня вас ждет удача и успех во всех начинаниях',
    'сегодня лучше полежите весь день на диване',
    'сегодня вас ждет успех при изучении JavaScript',
    'сегодня вы рискуете что-нибудь забыть при выходе из дома',
    'устройте сегодня себе выходной - пусть весь мир подождет'
];

let timer = document.querySelector('#timer');
let text = document.querySelector('#text');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let random;
let timerId;


start.addEventListener('click', function () {
    start.classList.remove('active');
    stop.classList.add('active');
    timerId = setInterval(function () {
        timer.innerHTML = random = getRandomIntInclusive(0, predictions.length - 1);
    }, 100);
})

stop.addEventListener('click', function () {
    stop.classList.remove('active');
    clearInterval(timerId);
    random % 2 == 0 ? text.classList.add('good') : //окраска по типу предсказания
    text.classList.add('bad');
    text.innerHTML = predictions[random];
})


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}