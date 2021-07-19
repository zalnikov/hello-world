let btns = document.querySelectorAll('.menu > a');
let tabs = document.querySelectorAll('.tabs > .tab');

btns.forEach(function (item, index) {
    item.addEventListener('click', function (event) {
        btns.forEach(function (item) {
            item.classList.remove('active');
        })
        tabs.forEach(function (item) {
            item.classList.remove('active');
        })
        item.classList.add('active');
        tabs[index].classList.add('active');
    event.preventDefault();
    })
})