$('.comment-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrow: true
});

$('.logo-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrow: true
});

$('#f-1').hover(function () {
    $('.tf-img-1').css("opacity", "1")
    $('.tf-img-2').css("opacity", "0")
    $('.tf-img-3').css("opacity", "0")
    $('.tf-img-4').css("opacity", "0")
})

$('#f-2').hover(function () {
    $('.tf-img-2').css("opacity", "1")
    $('.tf-img-1').css("opacity", "0")
    $('.tf-img-3').css("opacity", "0")
    $('.tf-img-4').css("opacity", "0")
})

$('#f-3').hover(function () {
    $('.tf-img-3').css("opacity", "1")
    $('.tf-img-1').css("opacity", "0")
    $('.tf-img-2').css("opacity", "0")
    $('.tf-img-4').css("opacity", "0")
})

$('#f-4').hover(function () {
    $('.tf-img-4').css("opacity", "1")
    $('.tf-img-1').css("opacity", "0")
    $('.tf-img-2').css("opacity", "0")
    $('.tf-img-3').css("opacity", "0")
})




$('#tf-1').hover(function () {
    $('.trans-img-1').css("opacity", "1")
    $('.trans-img-2').css("opacity", "0")
    $('.trans-img-3').css("opacity", "0")
})

$('#tf-2').hover(function () {
    $('.trans-img-2').css("opacity", "1")
    $('.trans-img-1').css("opacity", "0")
    $('.trans-img-3').css("opacity", "0")
})

$('#tf-3').hover(function () {
    $('.trans-img-3').css("opacity", "1")
    $('.trans-img-1').css("opacity", "0")
    $('.trans-img-2').css("opacity", "0")
})







qaItems = document.querySelectorAll('.QA-item');

qaItems.forEach((qaItem) => {
    qaItem.addEventListener('click', () => {
        qaItem.classList.toggle('active');
    })
})