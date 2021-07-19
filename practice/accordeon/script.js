let parent = document.querySelector('#parent');
let links = document.querySelectorAll('.tab .link a');

links.forEach(function (item) {
    item.addEventListener('click', function (event) {
        let tab = parent.querySelector('.tab.active');
        if (tab) {
            tab.classList.remove('active');
            if (tab != item.closest('.tab')) {
                item.closest('.tab').classList.add('active');
            }
        } else {
            item.closest('.tab').classList.add('active');
        }
        event.preventDefault();
    })
})