
import { draw as drawSnake, update as updateSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

const gameBoard = document.getElementById('game-board')

let lastRenderTime = 0
let gameOver = false

function main(currentTime){

    if(gameOver){
        if(confirm('You lost. Press OK to restart')){
            window.location = '/'
        }
        return
    }
    
    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if(secondsSinceLastRender < 1 / SNAKE_SPEED){
        return
    }
    lastRenderTime = currentTime

    update();
    draw();

}

requestAnimationFrame(main)


function update(){
    gameBoard.textContent = ''
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}