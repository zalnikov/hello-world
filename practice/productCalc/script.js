let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

add.addEventListener('click', function() {
	let tr = document.createElement('tr');
	
	let td;
	
	allowEdit(createCell(tr, name.value, 'name'));
	allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));
    createCell(tr, price.value * amount.value, 'cost');
    createCell(tr, 'удалить', 'remove').addEventListener('click', function () {
        this.parentNode.remove();
        recountTotal();
    })
	
	table.appendChild(tr);
    recountTotal();
    name.value = '';
    price.value = '';
    amount.value = '';
});

function createCell(tr, value, name) {
	td = document.createElement('td');
    td.innerHTML = value;
    td.classList.add(name);
    tr.appendChild(td);
    return td;
}

function recountTotal() {
	let costs = table.querySelectorAll('.cost');
	let sum = 0;
	if (costs) {
		for (let elem of costs) {
            sum += Number(elem.innerHTML);
        }
        total.innerHTML = sum;
	}
}

function allowEdit(td) {
	td.addEventListener('dblclick', function() {
		let input = document.createElement('input');
        input.value = td.innerHTML;
        td.innerHTML = '';
        input.addEventListener('blur', function () {
            td.innerHTML = input.value;
            if (td.classList.contains('price') || td.classList.contains('amount')) {
                let elem1 = td.parentNode.querySelector('.price').innerHTML;
                let elem2 = td.parentNode.querySelector('.amount').innerHTML;
                let res = td.parentNode.querySelector('.cost');
                res.innerHTML = elem1 * elem2;
                recountTotal();
            }
        })
        td.appendChild(input);
	});
}