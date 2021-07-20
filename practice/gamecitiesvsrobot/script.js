let field = document.querySelector('#field');
let message = document.querySelector('#message');
let letter;
let allCities = ['Самара', 'Ростов', 'Воркута', 'Архангельск', 'Калуга', 'Азов', 'Армавир'];
let cities = [];

field.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        if (cities.length < 1) {
            let city = allCities.find(function (item, index) {
                if (item == field.value) {
                    allCities.splice(index, 1);
                    letter = field.value.split('').pop().toUpperCase();
                    cities.push(field.value);
                    return true
                }
            })
            if (city == undefined) {
                alert('Такого города нет в списке!!!');
            }
            field.value = '';
        } else {
            if (letter != field.value.split('').shift()) {
                alert('Не с той буквы!')
                field.value = '';
            } else if (cities.includes(field.value)) {
                alert('Город был!')
                field.value = '';
            } else {
                city = allCities.find(function (item, index) {
                    if (item == field.value) {
                        allCities.splice(index, 1);
                        letter = field.value.split('').pop().toUpperCase();
                        cities.push(field.value);
                        return true
                    }
                })
                if (city == undefined) {
                    alert('Такого города нет в списке!!!');
                }
                field.value = '';
            }
        }
        answerList(cities);
        if (cities.length % 2 != 0) {
            robot(letter, allCities)
        }
    }
});

function answerList(arr) {
    message.innerHTML = '';
    let ul = document.createElement('ul');
    arr.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element;
        ul.appendChild(li);
    });
    message.appendChild(ul);
}

function robot(letter, allCities) {
    let answer = allCities.find(function (element, index) {
        if (element.split('').shift() == letter) {
            return true;
        }
    })
    if (answer == undefined) {
        field.value = 'Ответы закончились!'
    } else {
        field.value = answer;
    }
}