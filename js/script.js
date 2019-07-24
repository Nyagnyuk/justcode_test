
/*slick slider*/
function mainSliderInit() {
    if ($('.slider').length) {
        $('.slider').slick({
            prevArrow: '<a class="slick-arrow-prev" />',
            nextArrow: '<a class="slick-arrow-next" />',
            dots: false,
            // infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,

        });
    }
}

$(document).on('ready', function () {
    mainSliderInit();

    $('.burger_button').on('click', function () {
        $(this).toggleClass('active');
        $('.header_menu').toggleClass('opened');
        $('body').toggleClass('no_scroll');
    });
    $(function (){
        $.validator.addMethod("MyEmail", function(value, element) {
            return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value);
        }, "Please enter a valid email address. As example@domain.com")
    });
    $(function () {
        $('.comment_form').validate({
            rules:{
                comment:{
                    required:true
                },
                author:{
                    required:true,
                    minlength:1,

                },
                email:{
                    required:true,
                    MyEmail:true
                }
            }
        })
    });

});

