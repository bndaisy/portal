(function(){
    let card = document.querySelectorAll('.user-card'),
        popUp = document.querySelector('.user-popup'),
        btnClose = document.querySelector('.btn--close'),
        substrate = document.querySelector(' .user-popup__substrate'),
        body = document.querySelector('body');

    card.forEach(item => item.addEventListener('click', () => {
        popUp.classList.add('is-active');
        substrate.classList.add('is-active');
        body.classList.add('is-disabled');
    }));

    btnClose.addEventListener('click', () => {
        popUp.classList.remove('is-active');
        substrate.classList.remove('is-active');
        body.classList.remove('is-disabled');
    });

    substrate.addEventListener('click', () => {
        popUp.classList.remove('is-active');
        substrate.classList.remove('is-active');
        body.classList.remove('is-disabled');
    })
    
})();