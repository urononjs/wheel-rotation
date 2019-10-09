$(document).ready(function () {
    $('.vector-wheel').addClass('vector-wheel-animation');
    let animate = false;
    let counter = 3;

    $('.box-center-btn').click(function () {
        $('.vector-wheel-animation').remove();
        if (animate === true) {
            return;
        }
        switch (counter) {
            case 3:
                animate = true;
                $('.wheel').addClass('wheel-rotate-1');
                $('.number').text('2');
                counter--;
                setTimeout(function () {
                    animate = false;
                }, 5000);
                break;
            case 2:
                animate = true;
                $('.wheel').addClass('wheel-rotate-2');
                $('.number').text('1');
                counter--;
                setTimeout(function () {
                    animate = false;
                }, 5000);
                break;
            case 1:
                animate = true;
                $('.wheel').addClass('wheel-rotate-3');
                $('.number').text('0');
                counter--;
                setTimeout(function () {
                    jQuery.noConflict();
                    $('#loginModal').modal('show');
                }, 6000);

                break;
        }
    })
});





















