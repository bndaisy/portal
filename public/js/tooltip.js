(function(){
    let element = document.querySelectorAll('.element'),
        tooltip = document.querySelectorAll('.tooltip');

    element.forEach((item, index) => {
        item.addEventListener('mouseover', () => tooltip[index].classList.add('is-active'));
        item.addEventListener('mouseout', () => tooltip[index].classList.remove('is-active'))
    });
})();