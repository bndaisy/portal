(function(){
    let card = document.querySelectorAll('.user-card'),
        popUp = document.querySelector('.user-popup'),
        btnClose = document.querySelector('.btn--close'),
        substrate = document.querySelector(' .user-popup__substrate');

    card.forEach(item => item.addEventListener('click', () => {
        popUp.classList.add('is-active');
        substrate.classList.add('is-active');
    }));

    btnClose.addEventListener('click', () => {
        popUp.classList.remove('is-active');
        substrate.classList.remove('is-active');
    });

    substrate.addEventListener('click', () => {
        popUp.classList.remove('is-active');
        substrate.classList.remove('is-active');
    })
    
})();