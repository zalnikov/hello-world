let field = document.querySelector('#field');
start(2);

function start(size) {
	activate(build(field, prepare(size)), size);
}

function range(count) {
    let arr = [];
    let i = 1;
    while(true) {
       arr.push(i);
       i++;
       if(i > count) return arr; 
    }
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function chunk(arr, n) {
    let resultArr = [];
    while(true) {
        resultArr.push(arr.splice(0, n));
        if(arr.length == 0) return resultArr;
    }
}

function prepare(size) {
    let arr = [];
    arr = range(size * size);
    arr = shuffle(arr);
    arr = chunk(arr, size);

    return arr;
}

function build(field, arr) {
    let cells = [];
    field.innerHTML = '';
    arr.forEach(function (item, i) {
        let tr = document.createElement('tr');
        item.forEach(function (item, i) {
            let td = document.createElement('td');
            td.innerHTML = item;
            tr.appendChild(td);
            cells.push(td);
        })
        field.appendChild(tr);
    })
    return cells;
}

function activate(cells, size) {
    let counter = 1;
    let last = size * size;
    cells.forEach(function (item, i) {
        item.addEventListener('click', function () {
            if (this.innerHTML == counter) {
                this.classList.add('active');
                if(counter == last) start(++size);
                counter++;
            }
        })
    })
}

