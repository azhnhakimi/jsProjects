
let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        const status = e.currentTarget.classList;
        if(status.contains('increase')){
            count++
        }
        else if(status.contains('decrease')){
            count--
        }else{
            count = 0
        }
        value.textContent = count;

        if(count > 0){
            value.style.color = 'green'
        }
        else if(count < 0){
            value.style.color = 'red'
        }else{
            value.style.color = 'black'
        }

        // if(count > 0){
        //     value.style.color = 'green'
        // }
        // if(count < 0){
        //     value.style.color = 'red'
        // }

        // if(count === 0){
        //     value.style.color = 'black'
        // }
    })

})




