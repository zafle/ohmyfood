document.addEventListener("DOMContentLoaded", function() {

    // window.addEventListener('load', hideLoader);

    // Hide loader after 3 seconds
    setTimeout(hideLoader, 3000);

    function hideLoader() {
        document.querySelector('.loader').style.display='none';
        document.body.style.height= '100%';
        document.body.style.overflowY= 'visible';
    }

    // dish select animation using WEB animations API
    var dishes = document.querySelectorAll('.restaurant-menu__content');

    dishes.forEach(function(dish) {
        dish.addEventListener('click', function() {
            const info = dish.querySelector('.restaurant-menu__info');

            const selectAnimation = [
                {marginRight: '-60px'},
                {marginRight: '0'},
            ];

            const selectTiming = {
                duration: 200,
                iterations: 1,
                easing: 'ease-out',
                fill: 'both',
            };

            animSelect = info.animate(selectAnimation, selectTiming);

            if (!info.classList.contains('opened')) {
                animSelect.play();
            } else {
                animSelect.reverse();
            }

            animSelect.onfinish = function() {
                info.classList.toggle('opened');
            }

        });
    });



    // dish select animation using requestAnimationFrame();
    // var dishes = document.querySelectorAll('.restaurant-menu__content');

    // dishes.forEach(function(dish) {
    //     dish.addEventListener('click', function() {
    //         const info = dish.querySelector('.restaurant-menu__info');

    //         let start, previousTimeStamp;
    //         let done = false;

    //         function InOutCubic(t){
    //             return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
    //         };

    //         function infoShow(timeStamp) {
    //             if (start === undefined) {
    //                 start = timeStamp;
    //             }

    //             const elapsed = timeStamp - start;

    //             if (previousTimeStamp !== timeStamp) {
    //                 // with easing ######################################################
    //                 const progress = elapsed / 200;
    //                 const easing = InOutCubic(progress);
    //                 const count = Math.min(0.3 * elapsed * easing, 60);

    //                 if (!info.classList.contains('opened')) {
    //                     move = -60 + count;
    //                 } else if (info.classList.contains('opened')) {
    //                     move = 0 - count;
    //                 }

    //                 info.style.marginRight = move + 'px';
    //                 if (count === 60) {
    //                     done = true;
    //                     info.classList.toggle('opened');
    //                 }
    //             }

    //             if (elapsed < 200) {
    //                 previousTimeStamp = timeStamp;
    //                 if (!done) {
    //                     window.requestAnimationFrame(infoShow);
    //                 }
    //             }
    //         }

    //         window.requestAnimationFrame(infoShow);
    //     });
    // });


    // dish select animation with class toggle
    // var dishes = document.querySelectorAll('.restaurant-menu__content');

    // dishes.forEach(function(dish) {
    //     dish.addEventListener('click', function() {
    //         const info = dish.querySelector('.restaurant-menu__info');

    //         // toggle class for CSS animation
    //         info.classList.toggle('checked');
    //     });
    // });

});
