const accordion = document.querySelectorAll('.accordion');

accordion.forEach(accordion =>{
    const icon = accordion.querySelector('.icon');
    const answer = accordion.querySelector('.answer');

    accordion.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');
        // if(icon.classList.remove('active')){
        //     icon.classList.remove('active');
        //     answer.Style.maxHeight = null;
        // }else{
        //     icon.classList.remove('active');
        //     answer.Style.maxHeight = answer.scrollHeight + 'px';
        // }

    })
})