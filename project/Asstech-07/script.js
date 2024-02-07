let text = document.getElementById('text');
let policeLeft = document.getElementById('police-left');
let girlRight = document.getElementById('girl-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    policeLeft.style.left = value * 0.5 + 'px';
    girlRight.style.left = value *0.5 + 'px';

});