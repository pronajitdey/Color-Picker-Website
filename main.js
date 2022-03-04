let cards = document.querySelectorAll('.card');
let rgb = document.querySelector('#rgbspan');
let colors = generateRandomColor(6);
let pickedColor = colors[Math.floor(Math.random() * 6)];
rgb.textContent = pickedColor;

let statusText = document.querySelector('.status');
statusText.textContent = "Let's play!!";

let playBtn = document.querySelector('#playAgain');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');
let cardCount = 6;

// Events on clicking Easy Button
easyBtn.addEventListener('click', function() {
    document.querySelector('div').style.backgroundColor = '#ffd738';
    statusText.textContent = "Let's play!!";
    cardCount = 3;
    this.style.backgroundColor = 'rgb(185, 3, 3)';
    this.style.color = 'white';
    hardBtn.style.backgroundColor = 'white';
    hardBtn.style.color = 'rgb(185, 3, 3)';
    colors = generateRandomColor(cardCount);
    pickedColor = colors[Math.floor(Math.random() * cardCount)];
    rgb.textContent = pickedColor;

    for (let i = 0; i < cards.length; i++) {
        if (colors[i]) {
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.background = 'none';
        }
    }
});

// Events on clicking Hard Button
hardBtn.addEventListener('click', function() {
    document.querySelector('div').style.backgroundColor = '#ffd738';
    statusText.textContent = "Let's play!!";
    cardCount = 6;
    this.style.backgroundColor = 'rgb(185, 3, 3)';
    this.style.color = 'white';
    easyBtn.style.backgroundColor = 'white';
    easyBtn.style.color = 'rgb(185, 3, 3)';
    colors = generateRandomColor(cardCount);
    pickedColor = colors[Math.floor(Math.random() * cardCount)];
    rgb.textContent = pickedColor;

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = colors[i];
    }
});

// Events on clicking New Colors Button
playBtn.addEventListener('click', function() {
    document.querySelector('div').style.backgroundColor = '#ffd738';
    statusText.textContent = "Let's play!!";
    colors = generateRandomColor(cardCount);
    pickedColor = colors[Math.floor(Math.random() * cardCount)];
    rgb.textContent = pickedColor;
    
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = colors[i];
    }
});

// Default look
hardBtn.style.backgroundColor = 'rgb(185, 3, 3)';
hardBtn.style.color = 'white';
for (let i = 0; i < colors.length; i++) {
    cards[i].style.backgroundColor = colors[i];
    cards[i].addEventListener('click', function() {
        let selectedColor = this.style.backgroundColor;
        if (selectedColor === pickedColor) {
            win();
        } else {
            loose(this);
        }
    });
}

// Generate random colors
function randomColor() {
    // Generate random numbers between 0 and 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// Generate an array of random colors
function generateRandomColor(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

// Win function
function win() {
    for (let i = 0; i < colors.length; i++) {
        cards[i].style.backgroundColor = pickedColor;
    }
    
    document.querySelector('div').style.backgroundColor = pickedColor;
    statusText.textContent = 'Correct!!';
}

// Loose function
function loose(a) {
    a.style.background = 'none';
    statusText.textContent = 'Try Again!';
}