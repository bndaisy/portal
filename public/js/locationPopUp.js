(function(){
    let items = document.querySelectorAll('.list__item'),
        popUp = document.querySelector('.location-popup'),
        btnClose = document.querySelector('.btn--close'),
        substrate = document.querySelector(' .location-popup__substrate'),
        body = document.querySelector('body');

    items.forEach(item => item.addEventListener('click', () => {
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