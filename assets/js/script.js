

$(document).ready(function () {

    $(window).on('load', hideLoader);
    $('.btn').on('mouseenter', hoverButton);


    function hideLoader() {
        $('.loader').hide();
        $('body').css({
            'display': 'block',
            'height': 'unset'
        });
    }

    function hoverButton() {
        $(this).toggleClass('hovered');
    }
});
