$('.active-slider').slick({
    arrows: true,
    infinite : false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
});

// start here
$('.ref-name-list li').click(function(){
    $('.ref-name-list li').removeClass('active-title');// Remove active-title link
    $(this).addClass('active-title'); // Add Active Clicked element
    var activeIndex = $(this).index(); // Take clicked elemnt's index
    $('.referans').removeClass('active-slider'); // Remove class other elements
    $('.referans').eq(activeIndex).addClass('active-slider'); // Show Slider
    $('.slick-dots').remove(); // reinit cloned slick-dots so remove others
    $('.sliders .referans').slick('reinit');// Restart Slider
    printActive(); sliderLength();
});

// do slider after change
$('.show-slider, .referans').on('afterChange', function(e, slick, currentSlide, nextSlide) {
    printActive();
});

// Take Slider lentgh
sliderLength();
function sliderLength(){
    $('.show-slider .show-item:visible').each(function(i){		
        if (i < 9) {
            var dd = i+1;
            $('.max-slide').text('0' + dd)		
        }else if (i >= 9 ){
            $('.max-slide').text(i+1)
        }
    });
};

// Take active slide's index nad print
printActive();
function printActive (){
    var takeActive = $('.active-slider .slick-active').attr('data-slick-index');
    var converted = parseInt(takeActive) + 1;
    $('.here-slide').text('0' + converted).fadeIn();
    if (takeActive >= 9) {
        $('.here-slide').text(converted);
    }
}
