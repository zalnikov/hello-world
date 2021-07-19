let input = document.querySelector('#elem');
let list = document.querySelector('#list');

let countries = ['Russia', 'Rwanda', 'Romania'];

input.addEventListener('input', function () {
    let arr = countries.filter(item => item.startsWith(input.value));
    list.innerHTML = '';
    arr.forEach(function (item) {
        let li = document.createElement('li');
        li.innerHTML = item;
        li.addEventListener('click', function () {
            input.value = item;
            list.innerHTML = '';
        })
        list.appendChild(li);
    })
}) 