let kbd = Array.from(document.querySelectorAll('kbd'));
let audio = Array.from(document.querySelectorAll('audio'));

window.addEventListener('keydown', event => {
    for (let i = 0; i < kbd.length; i++) {
        if (kbd[i].textContent === event.key.toUpperCase()) {
            if (!(audio[i].paused)) {
                audio[i].currentTime = 0;
                audio[i].play();
            }
            audio[i].play();
            kbd[i].parentNode.classList.add('playing');
        }
    }
});

window.addEventListener('keyup', event => {
    for (let i = 0; i <kbd.length; i ++) {
        if (kbd[i]. textContent === event.key.toUpperCase()) {
            kbd[i].parentNode.classList.remove('playing');
        }
    }
})