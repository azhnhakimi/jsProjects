//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    const btn = question.querySelector('.question-btn')


    btn.addEventListener('click', () => {

        questions.forEach(value => {
            if(value !== question){
                value.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
    })
})







