
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const trigger = window.innerHeight / 5 * 4;

    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top;

        // console.log(`trigger = ${trigger}`);
        console.log(`boxTop = ${boxTop}`);

        if(boxTop < trigger){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}

// trigger variable creates an imaginar line 4/5 of the window 
// topbox is measure from the top of the content box to the top of the window
// as topbox decreases due to page scrolling down it will eventually be less than 4/5 of the page
// thus revealing the content box