let input = document.querySelector('#input');
let table = document.querySelector('#table');

const historyObj = {
    2000: {
        '02.04.2000':{
            historicEvent: 'Событие',
            eventDiscription: 'Описание события'
        },
        '21.06.2000':{
            historicEvent: 'Событие',
            eventDiscription: 'Описание события'
        },
        '07.09.2000': {
            historicEvent: 'Событие',
            eventDiscription: 'Описание события'
        }
    },
    2020: {
        '05.02.2020':{
            historicEvent: 'Событие',
            eventDiscription: 'Описание события'
        },
        '28.06.2020':{
            historicEvent: 'Событие',
            eventDiscription: 'Описание события'
        }
    }
}

input.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        table.innerHTML = '';
        createTable(input.value, historyObj);
    };
})

function createTable(year, obj) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    
    for (let elem in obj[year]) {

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = elem;
        tr.appendChild(td);

        for (let elem2 in obj[year][elem]) {
            let td2 = document.createElement('td');
            td2.innerHTML = obj[year][elem][elem2];
            tr.appendChild(td2);
        }
        table.appendChild(tr);
    }
}