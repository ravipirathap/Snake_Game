const snake = document.getElementById('snake');
const food = document.getElementById('food');

let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;

function updateFoodPosition() {
  foodX = Math.floor(Math.random() * 15) * 20;
  foodY = Math.floor(Math.random() * 15) * 20;
  food.style.left = `${foodX}px`;
  food.style.top = `${foodY}px`;
}

updateFoodPosition();

function gameLoop() {
  snakeX += 20;
  if (snakeX >= 300) {
    snakeX = 0;
  }
  snake.style.left = `${snakeX}px`;
  snake.style.top = `${snakeY}px`;

  if (snakeX === foodX && snakeY === foodY) {
    updateFoodPosition();
  }

  setTimeout(gameLoop, 100);
}

gameLoop();

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    snakeY -= 20;
  } else if (event.key === 'ArrowDown') {
    snakeY += 20;
  } else if (event.key === 'ArrowLeft') {
    snakeX -= 20;
  } else if (event.key === 'ArrowRight') {
    snakeX += 20;
  }
});
