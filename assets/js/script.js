document.addEventListener("DOMContentLoaded", function() {

    // Hide loader after 3 seconds

    // window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, 3000);

    function hideLoader() {
        document.querySelector('.loader').style.display='none';
        document.body.style.height= '100%';
        document.body.style.overflowY= 'visible';
    }

    // dish select animation
    var dishes = document.querySelectorAll('.restaurant-menu__content');

    dishes.forEach(function(dish) {
        dish.addEventListener('click', function() {
            let info = dish.querySelector('.restaurant-menu__info');
            info.classList.toggle('checked');
        });
    });

    //




});
