let texts = [];

let btn = document.querySelector('#text button')
let textArea = document.querySelector('#text textarea');
let notesMenu = document.querySelector('#notes');
let btnCreate = document.querySelector('#create button');
let modeDisplay = document.querySelector('#create span');
let delMsg = document.createElement('p');
modeDisplay.innerHTML = 'Режим' + ' = ' + btn.dataset.mode;

btn.addEventListener('click', function () {
    let mode = this.dataset.mode;
    if (mode == 'create') {
        texts.push(textArea.value);
        textArea.value = '';
        
        let li = document.createElement('li');
        let spanOpen = document.createElement('span')
        spanOpen.classList.add('open');
        let spanRemove = document.createElement('span');
        spanRemove.classList.add('remove');
        spanRemove.innerHTML = ' X';

        spanOpen.setAttribute('data-set', texts.length - 1);
        spanRemove.setAttribute('data-set', texts.length - 1);
        spanOpen.innerHTML = 'запись' + ' ' + texts.length;
        spanOpen.addEventListener('click', function () {
            textArea.value = texts[spanOpen.getAttribute('data-set')];
            let liClassActive = notesMenu.querySelectorAll('li.active');
            liClassActive.forEach(function (item) {
                item.classList.remove('active');
            })
            li.classList.add('active');
            btn.setAttribute('data-mode', 'update');
            btn.setAttribute('data-key', spanOpen.dataset.set)
            modeDisplay.innerHTML = 'Режим' + ' = ' + btn.dataset.mode;
        })

        spanRemove.addEventListener('click', function () {
            texts.slice(spanRemove.dataset.set, 1);
            spanRemove.parentNode.remove();
            textArea.value = '';
            delMsg.innerHTML = 'Запись удалена';
            modeDisplay.appendChild(delMsg);
        })

        li.appendChild(spanOpen);
        li.appendChild(spanRemove);
        notesMenu.appendChild(li);
    }
    if (mode == 'update') {
        let key = this.dataset.key;
        texts[key] = textArea.value;
        btn.setAttribute('data-mode', 'create');
        modeDisplay.innerHTML = 'Режим' + ' = ' + btn.dataset.mode;
    }
})

btnCreate.addEventListener('click', function () {
    btn.setAttribute('data-mode', 'create');
    textArea.value = '';
    modeDisplay.innerHTML = 'Режим' + ' = ' + btn.dataset.mode;
})