document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector('.falling-text-container');
    const totalTexts = 100; // Adjust the number of falling texts

    for (let i = 0; i < totalTexts; i++) {
        const text = document.createElement('div');
        text.classList.add('falling-text');
        text.textContent = generateRandomLetter();
        text.style.left = `${Math.random() * 100}%`;
        text.style.animationDelay = `${Math.random() * 5}s`; // Randomize animation delay
        textContainer.appendChild(text);
    }
});

function generateRandomLetter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}
