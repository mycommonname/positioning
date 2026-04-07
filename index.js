/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function move() {
    let elem = document.querySelector(".progress-bar1");
    let width = 0;
    let id = setInterval(frame, 33);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        }
        else {
            width++;
            elem.style.width = width + "%";
        }
        elem.style['clipPath'] = `inset(0 ${100-width}% 0 0`
    }
}

document.querySelector('.modal_window_close').onclick = function () {
    document.querySelector('.modal_window').style.display = 'none';
    document.querySelector('.modal_window').style.display = 'none';
}