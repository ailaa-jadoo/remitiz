
// for ream more and less

$(document).ready(function () {
    $(".invisible-content").hide();
    $(document).on('click', "#rm-btn", function () {
        const moreLessBtn = $(".invisible-content").is(":visible") ? 'Read more' : 'Read less';
        $(this).text(moreLessBtn)
        $(this).parent(".box").find(".invisible-content").toggle()
        $(this).parent(".box").find(".visible-content").toggle()
    })
})




// slick slider

$('.comment-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrow: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.logo-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrow: true,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});




// hovering over top feature on home page

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




// hovering over transaction on feature page

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




// For faq page

qaItems = document.querySelectorAll('.QA-item');

qaItems.forEach((qaItem) => {
    qaItem.addEventListener('click', () => {
        qaItem.classList.toggle('active');
    })
})











// ***************************************************** For Responsive ***************************************************** //

big_wrapper = document.querySelector(".big-wrapper");
hamburger_menu = document.querySelector(".hamburger-menu");


hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
});