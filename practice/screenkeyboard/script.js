let keys = document.querySelectorAll('.keyboard .key');
let input = document.querySelector('#input');
let capsLock = document.querySelector('.capsLock');
let keysArr = ["`", "1", "2", "3", "4", "5",
"6", "7", "8", "9", "0", "-", "=",
"Backspace", "Tab", "Q", "W", "E", "R", "T", "Y",
"U", "I", "O", "P", "[", "]", "Enter",
"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K",
"L", ";", "'", "Backslash", "ShiftLeft", "Z", "X",
"C", "V", "B", "N", "M", ",", ".", "/",
"ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "",
"ContextMenu", "ControlRight"];

keys.forEach(function (item, i) {
    item.addEventListener('click', function () {
        (keysArr[i] == 'CapsLock') ? item.classList.toggle('capsLockDown'):
        capsLock.classList.contains('capsLockDown') ? input.value += keysArr[i] : 
        input.value += keysArr[i].toLowerCase();
    })
});