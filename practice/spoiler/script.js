let links = document.querySelectorAll('a');

links.forEach(function (item) {
    item.addEventListener('click', function (event) {
        item.parentElement.nextElementSibling.classList.toggle('active');
        event.preventDefault()
    })
})