const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
const section = document.querySelector('.main-page'); // Select the section

// Set size based on the section, not the whole window
canvas.width = section.offsetWidth;
canvas.height = section.offsetHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0"; 
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);

// Resize only when the section changes size
window.addEventListener('resize', () => {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
});


function resizeCanvas() {
    const section = document.querySelector('.main-page');
    const rect = section.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Recalculate columns based on new width
    columns = Math.floor(canvas.width / fontSize);
    drops.length = 0; // clear and refill
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
}

// Call this on load and on resize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const contactForm = document.getElementById('myForm');
const contactSuccess = document.getElementById('contactSuccess');
let successTimeout;

if (contactForm && contactSuccess) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    contactForm.reset();
    contactSuccess.classList.remove('d-none');
    contactSuccess.classList.add('show-success');

    clearTimeout(successTimeout);
    successTimeout = setTimeout(() => {
      contactSuccess.classList.remove('show-success');
      contactSuccess.classList.add('d-none');
    }, 3500);
  });
}
