const modal = document.querySelector('#modal');
const openBtn = document.querySelector('#open-modal-btn');
const closeBtn = document.querySelector('#close-modal-btn');
const progressFill = document.querySelector('#progress-fill');

let animationInterval;

openBtn.onclick = function() {
    modal.style.display = 'flex';
    startAnimation();
};

closeBtn.onclick = function() {
    modal.style.display = 'none';
    clearInterval(animationInterval);
};

function startAnimation() {
    progressFill.style.width = '0%';
    let currentWidth = 0;

    clearInterval(animationInterval);


    animationInterval = setInterval(function() {
        if (currentWidth >= 100) {
            clearInterval(animationInterval);
            progressFill.style.width = '100%';
        } else {
            currentWidth += 0.5;
            progressFill.style.width = currentWidth + '%';
        }
    }, 15);
}