;(function(){
    let formEntry = document.querySelector('.auth__entry'), // Auth form
        formRecovery = document.querySelector('.auth__recovery'), // Recovery form
        linkRecovery = document.querySelector('.entry__forget'), // Forget pass link
        linkBack = document.querySelector('.recovery__back'); // Back link

        linkRecovery.addEventListener('click', () => {
            formEntry.classList.remove('is-active');
            formRecovery.classList.add('is-active');
        });
        linkBack.addEventListener('click', () => {
            formRecovery.classList.remove('is-active');
            formEntry.classList.add('is-active');
        })
})();