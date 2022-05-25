const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const hexValue = getRandomHex();
    document.body.style.backgroundColor = hexValue;
    color.textContent = hexValue;
})


function getRandomHex(){
    let finalValue = '#';
    for(let i = 0; i < 6; i++){
        finalValue += hex[Math.floor(Math.random() * 16)];
    }
    return finalValue
}