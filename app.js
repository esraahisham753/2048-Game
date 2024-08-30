document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid');
    const score = document.querySelector('#score');
    const result = document.querySelector('#result');
    const width = 4;

    for(let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        gridDisplay.appendChild(square);
    }
});