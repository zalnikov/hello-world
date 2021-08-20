'use strict'

let cells = document.querySelectorAll('#field td');

function start(arr) {
    let i = 0;
    arr.forEach(function (item) {
        item.addEventListener('click', function func() {
            this.innerHTML = ['X', '0'][i % 2];
            this.removeEventListener('click', func);
            if (isVictory(cells)) {
                alert(this.innerHTML);
            } else if (i == 8) {
                alert('ничья');
            }
            i++
        })
    })
}
start(cells);

function isVictory(arr) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let comb of combs) {
        if (
            arr[comb[0]].innerHTML == arr[comb[1]].innerHTML &&
            arr[comb[1]].innerHTML == arr[comb[2]].innerHTML &&
            arr[comb[0]].innerHTML != ''
        ) {
            return true;
        }
    }
    return false;
}