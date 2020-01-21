;(function(){
    let sandwich = document.querySelector('.sandwich'),
        dropdown = document.querySelector('.header-bottom');
        
        sandwich.addEventListener('touchstart', () => {
            sandwich.classList.toggle('is-active');
            dropdown.classList.toggle('is-active');
        });
})();