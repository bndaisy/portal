(function(){
    let tabsNavItems = document.querySelectorAll('.tabs-nav__item'),
        tabsContentItems = document.querySelectorAll('.tabs-content__item');

    let clearClasses = (item) => item.classList.remove('is-active');

        function makeTabActive(event){
            let target = event.target.getAttribute('data-tab-name');

            tabsNavItems.forEach(item => clearClasses(item));

            this.classList.add('is-active');

            makeContentActive(target);
        }

        function makeContentActive(target){
            tabsContentItems.forEach(item => {
                clearClasses(item)
                if(item.classList.contains(target)) item.classList.add('is-active')
            });
        }

        tabsNavItems.forEach(item => item.addEventListener('click', makeTabActive));
})();