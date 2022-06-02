import { getInputDirection } from "./input.js";

// How many times the snake moves every second
export const SNAKE_SPEED = 10 

const snakeBody = [{x: 11, y: 11}]
let newSegments = 0

export function update(){
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]}; //duplicating??
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeSegment = document.createElement('div');
        snakeSegment.style.gridRowStart = segment.y;
        snakeSegment.style.gridColumnStart = segment.x;
        snakeSegment.classList.add('snake');
        gameBoard.append(snakeSegment)
    })
} 

export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segment,index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})  //duplicating?? (copies = https://stackoverflow.com/questions/61421873/object-copy-using-spread-operator-actually-shallow-or-deep)
    }

    newSegments = 0
}