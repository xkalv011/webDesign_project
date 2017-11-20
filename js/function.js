$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function () {

    $('#scrollup' || '#scrollupp').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

$(function() {
navLinks = document.querySelector('.navigation_mobile');
narrowLinks = document.querySelector('.navigation_mobile_link');

navLinks.addEventListener('click', toggle);

function toggle() {
    narrowLinks.classList.toggle('hidden');
};
});