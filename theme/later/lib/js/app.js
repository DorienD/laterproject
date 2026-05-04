const   nav = document.querySelector(".c-global-nav"),
        navToggle = document.querySelector(".c-global-nav__toggle");

if (navToggle) {
    navToggle.addEventListener("click", function(e) {
        e.preventDefault();
        if (nav.classList.contains('-active')) {
            nav.classList.remove('-active');
            document.body.classList.remove("-menu-active");
        } else {
            nav.classList.add('-active');
            document.body.classList.add("-menu-active");
        }
    }, false);
}

/* Any click outside of the nav element will close the menu if it's active */
document.addEventListener('click', function(event) {
    let isClickInside = nav.contains(event.target);

    if (!isClickInside && nav.classList.contains('-active')) {
        nav.classList.remove('-active');
    }
});

// Anchor link
$(".j-anchor").click(function() {
    $('html, body').animate({
        scrollTop: ($($(this).attr("href")).offset().top - 90)
    }, 1000);
});

$(document).ready(function(){
    $('.j-carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false
    });
});
