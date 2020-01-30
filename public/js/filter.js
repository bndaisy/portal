(function(){
    let itemsFilter = document.querySelectorAll('.btn--filter-item');

    function makeItemActive(){
        itemsFilter.forEach(item => {
            if(item.classList.contains('is-active')) item.classList.remove('is-active');
        });
        this.classList.add('is-active');
    }
    itemsFilter.forEach(item => item.addEventListener('click', makeItemActive));
})();