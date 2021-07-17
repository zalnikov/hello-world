//Хронить гороскопы будем в объекте. Так как нам нужно всего три гороскопа
//на вчера, сегодня и завтра то и хранить мы их будем под тремя ключами 
//обращаясь к объекту по знакам зодиака и нужному времени.

let birthday = document.querySelector('#inputBirthday');
let radioBtns = document.querySelectorAll('input[type = radio]');
let defaultRadio = document.querySelector('#defaultRadio'); //что бы возвращать выбор на 'сегодня'
let text = document.querySelector('#text');
let zodiac;

let repHoroscope = {
    'Козерог (Capricorn)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Водолей (Aquarius)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Рыбы (Pisces)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Овен (Aries)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Телец (Taurus)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Близнецы (Gemini)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Рак (Cancer)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Лев (Leo)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Дева (Virgo)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Весы (Libra)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Скорпион (Scorpio)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    },
    'Стрелец (Sagittarius)': {
        yesterday: 'Всё было хорошо!',
        today: 'Всё будет хорошо!',
        tomorrow: 'Всё будет ещё лучше!'
    }
};

birthday.addEventListener('change', function () {
    let date = birthday.value.split('').slice(-5).join('')

    if (date >= '02-21' && date <= '03-20') {
        zodiac = 'Рыбы (Pisces)'
    } else if (date >= '01-21' && date <= '02-20') {
        zodiac = 'Водолей (Aquarius)'
    } else if (date >= '03-21' && date <= '04-20') {
        zodiac = 'Овен (Aries)'
    } else if (date >= '04-21' && date <= '05-20') {
        zodiac = 'Телец (Taurus)'
    } else if (date >= '05-21' && date <= '06-21') {
        zodiac = 'Близнецы (Gemini)'
    } else if (date >= '06-22' && date <= '07-22') {
        zodiac = 'Рак (Cancer)'
    } else if (date >= '07-23' && date <= '08-23') {
        zodiac = 'Лев (Leo)'
    } else if (date >= '08-24' && date <= '09-23') {
        zodiac = 'Дева (Virgo)'
    } else if (date >= '09-24' && date <= '10-23') {
        zodiac = 'Весы (Libra)'
    } else if (date >= '10-24' && date <= '11-22') {
        zodiac = 'Скорпион (Scorpio)'
    } else if (date >= '11-23' && date <= '12-21') {
        zodiac = 'Стрелец (Sagittarius)'
    } else if (date >= '12-22' && date <= '12-31') { //Переход из года в год
        zodiac = 'Козерог (Capricorn)'               //для козерога. Если указывать прямо
    } else if (date >= '01-01' && date <= '01-20') { //почему то не работало.
        zodiac = 'Козерог (Capricorn)'
    }
    defaultRadio.checked = true; //вовзрат в исходное после изменения до выбора даты рождения
    text.innerHTML = zodiac + ' - ' + repHoroscope[zodiac].today;
})

for (let radio of radioBtns) {
    radio.addEventListener('change', function () {
        if (zodiac == undefined) {
            text.innerHTML = 'Введите дату рожденияя';
        } else {
            let radioValue = this.value;
            text.innerHTML = zodiac + ' - ' + repHoroscope[zodiac][radioValue];
        }
        
    })
}