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
            const info = dish.querySelector('.restaurant-menu__info');

            // toggle class for CSS animation
            // info.classList.toggle('checked');

            // using requestAnimationFrame();
            let start, previousTimeStamp;
            let done = false;

            function infoShow(timeStamp) {
                if (start === undefined) {
                    start = timeStamp;
                }

                const elapsed = timeStamp - start;

                if (previousTimeStamp !== timeStamp) {
                    const count = Math.min(0.2 * elapsed, 60);
                    if (!info.classList.contains('opened')) {
                        move = -60 + count;
                    } else if (info.classList.contains('opened')) {
                        move = 0 - count;
                    }

                    info.style.marginRight = move + 'px';
                    if (count === 60) {
                        done = true;
                        info.classList.toggle('opened');
                    }
                }

                if (elapsed < 300) {
                    previousTimeStamp = timeStamp;
                    if (!done) {
                        window.requestAnimationFrame(infoShow);
                    }
                }
            }

            window.requestAnimationFrame(infoShow);
        });



    });

    //








});
