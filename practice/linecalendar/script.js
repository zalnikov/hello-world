let calendar = document.querySelector('#calendar');
let now = new Date();
let nowMonth = now.getMonth();
let nowYear = now.getFullYear();

//Кнопки для переключения месяцев.
let btn = document.querySelector('#btn');
let nextMonth = document.createElement('a');
let prevMonth = document.createElement('a');
nextMonth.innerHTML = 'NEXT MONTH';
nextMonth.setAttribute('href', '');
nextMonth.addEventListener('click', function () {
    calendar.innerHTML = '';
    nowMonth = nowMonth + 1;
    if (nowMonth > 11) {
        nowMonth = 0;
        nowYear += 1;
    }
    calendar.appendChild(createCalendarV2(nowYear, nowMonth));
    event.preventDefault();
})
prevMonth.innerHTML = 'PREV MONTH';
prevMonth.setAttribute('href', '');
prevMonth.addEventListener('click', function () {
    calendar.innerHTML = '';
    nowMonth = nowMonth - 1;
    if (nowMonth < 0) {
        nowMonth = 11;
        nowYear -= 1;
    }
    calendar.appendChild(createCalendarV2(nowYear, nowMonth));
    event.preventDefault();
})
btn.appendChild(prevMonth);
btn.appendChild(nextMonth);
calendar.appendChild(createCalendarV2(nowYear, nowMonth));



function createCalendarV2(year, month) {
    let date = new Date(year, month);
    let ul = document.createElement('ul');

    let div = document.createElement('div');
    let ruMonth = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    div.innerHTML = ruMonth[month] + ' ' + year;
    div.setAttribute('class', 'ruMonth')
    calendar.appendChild(div);

    while (date.getMonth() == month) {
        let li = document.createElement('li');
        li.innerHTML = date.getDate();
        
        //Окраска текущего дня
        if (date.getDate() == now.getDate() && date.getMonth() == now.getMonth()) {
            li.classList.add('nowDay');
        }
    
        ul.appendChild(li);
        date.setDate(date.getDate() + 1);
    }
    return ul;
}
