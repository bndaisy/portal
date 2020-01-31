(function(){
    let tabsNavItems = document.querySelectorAll('.tabs-nav__item'),
        tabsContentItems = document.querySelectorAll('.tabs-content__item');

        function makeTabActive(event){
            let target = event.target.getAttribute('data-tab-name');

            tabsNavItems.forEach(item => {
                if(item.classList.contains('is-active')) item.classList.remove('is-active')});

            this.classList.add('is-active');

            makeContentActive(target);
        }

        function makeContentActive(target){
            tabsContentItems.forEach(item => {
                if(item.classList.contains('is-active')) item.classList.remove('is-active')
                if(item.classList.contains(target)) item.classList.add('is-active')
            });
        }

        tabsNavItems.forEach(item => item.addEventListener('click', makeTabActive));
})();