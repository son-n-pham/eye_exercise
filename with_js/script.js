const slowBtn = document.getElementById('slow-btn');
const mediumBtn = document.getElementById('medium-btn');
const fastBtn = document.getElementById('fast-btn');
const ball = document.querySelector('.ball');

const slowSpeed = '8s';
const mediumSpeed = '4s';
const fastSpeed = '2s';

function setActiveButton(button) {
    // Remove active class from all buttons
    slowBtn.classList.remove('active');
    mediumBtn.classList.remove('active');
    fastBtn.classList.remove('active');

    // Add active class to the clicked button
    button.classList.add('active');
}

// Set initial speed and highlight corresponding button
ball.style.animationDuration = mediumSpeed;
setActiveButton(mediumBtn);

slowBtn.addEventListener('click', () => {
    ball.style.animationDuration = slowSpeed;
    setActiveButton(slowBtn);
});

mediumBtn.addEventListener('click', () => {
    ball.style.animationDuration = mediumSpeed;
    setActiveButton(mediumBtn);
});

fastBtn.addEventListener('click', () => {
    ball.style.animationDuration = fastSpeed;
    setActiveButton(fastBtn);
});