const fliesContainer = document.getElementById('flies-container');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
let score = 0;
let timeLeft = 60;
let gameInterval;

// Function to generate a random fly
function createFly() {
    const fly = document.createElement('div');
    fly.classList.add('fly');
    const size = Math.random() > 0.5 ? 30 : 15; // Random size, big or small
    fly.style.width = `${size}px`;
    fly.style.height = `${size}px`;
    fly.style.top = `${Math.random() * 90}vh`;
    fly.style.left = `${Math.random() * 90}vw`;
    fliesContainer.appendChild(fly);

    // Add click event to score based on fly size
    fly.addEventListener('click', () => {
        score += size === 15 ? 10 : 5; // More points for smaller flies
        scoreDisplay.textContent = `Score: ${score}`;
        fly.remove();
    });

    // Remove fly after 3 seconds if not clicked
    setTimeout(() => {
        fly.remove();
    }, 3000);
}

// Start the game
function startGame() {
    gameInterval = setInterval(() => {
        createFly();
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            alert(`Time's up! Your score is ${score}`);
        }
    }, 1000); // Creates a fly every second
}

startGame();
