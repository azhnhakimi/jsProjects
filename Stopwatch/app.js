
const btnStart = document.querySelector('.btn-start')
const btnPause = document.querySelector('.btn-pause')
const btnReset = document.querySelector('.btn-reset')
const display = document.querySelector('#display')


let minutes = '00';
let seconds = '00';
let milli = '00';
let action;


// do I need a domcontentload?

btnStart.addEventListener('click', () => {
    action = setInterval(timerFunc, 10)
})

btnPause.addEventListener('click', () => {
    clearInterval(action)
})

btnReset.addEventListener('click', () => {
    minutes = 00;
    seconds = 00;
    milli = 00;   

    newMilli = newMinutes = String(minutes).padStart(2, '0')
    newSeconds = String(seconds).padStart(2, '0')
    newMinutes = String(minutes).padStart(2, '0')
    display.innerHTML = `${newMinutes}:${newSeconds}:${newMilli}`
    clearInterval(action)

})




function timerFunc(){

    // checks to see if the millisecond count is over 1000
    if (milli > 1000){
        milli = 0
    }

    // increment of the millisecond
    milli += 10;

    // if millisecond count is over 1000, increment the seconds count 
    if (milli === 1000){
        seconds++
    }

    if(seconds > 59){
        seconds = 0;
        minutes++
    }

    // gets only the first 2 digits of millisecond
    newMilli = String(milli).slice(0,2)
    newSeconds = String(seconds).padStart(2, '0')
    newMinutes = String(minutes).padStart(2, '0')

    const newDisplay = `${newMinutes}:${newSeconds}:${newMilli}`
    display.innerHTML = newDisplay
}

