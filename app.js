// progress
const progress = document.getElementById('progress');
// previousBtn
const previousBtn = document.getElementById("pre");
// nextBtn
const nextBtn = document.getElementById('next');
// circle
const circles = document.querySelectorAll('.circle');

let activeIndex = 1;

nextBtn.addEventListener('click', () => {
    activeIndex++;
    if (activeIndex > circles.length) {
        activeIndex = circles.length;
    }
    updateUI();
});

previousBtn.addEventListener('click', () => {
    activeIndex--;
    if (activeIndex < 1) {
        activeIndex = 1;
    }
    updateUI();
});

function updateUI() {
    circles.forEach((circle, index) => {
        if (index < activeIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (activeIndex === 1) {
        previousBtn.disabled = true;
    } else if (activeIndex === circles.length) {
        nextBtn.disabled = true;
    } else {
        previousBtn.disabled = false;
        nextBtn.disabled = false;
    }
}
