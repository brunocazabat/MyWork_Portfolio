/*global $, window, WOW*/

$(function() {

    "use strict";

    let win = $(window),
        htmlBody = $("html, body"),
        scrollToTop = $(".scroll-top"),
        navBar = $(".navbar"),
        progressCheck = false,
        factsCheck = false;


    /*========== Loading  ==========*/
    $('.preloader').delay(200).fadeOut(700, function() {
        $(this).remove();
    });

    /*========== Navbar Animation On Scroll  ==========*/
    function activeNavbar() {

        if (win.scrollTop() > 100) {
            navBar.addClass("active-nav fadeInDown animated");
        } else {
            navBar.removeClass("active-nav fadeInDown animated");
        }

    }

    activeNavbar();

    win.on("scroll", function() {
        activeNavbar();
    });

    /*========== Mobile Menu  ==========*/
    $(".navbar .menu-toggle").on("click", function() {
        navBar.toggleClass("menu-active");
    });

    /*========== Vertical Menu  ==========*/
    $(".vertical-nav .toggle-menu").on("click", function() {
        $(this).parent().toggleClass("open");
    });

    /*========== Typed  ==========*/
    $(".home p span").typed({
        strings: ["Designer.", "Developer."],
        cursorChar: "",
        typeSpeed: 90,
        loop: true,
        backSpeed: 30
    });

    /*========== Start Scroll For Link To Go Section  ==========*/
    $(".home .arrow a, .skills .skills-left .main-btn").on("click", function(e) {
        e.preventDefault();
        let selector = $(this);
        htmlBody.animate({
            scrollTop: $(selector.attr("href")).offset().top
        }, 800);
    });

    /*========== Smooth Scroll  ==========*/
    $(".navbar .navbar-nav > li:not('.nav-brand') > a, .vertical-nav .mini-menu li a").on("click", function(e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: $($(this).data('value')).offset().top
        }, 600);
    });

    /*========== Add Class Active to Menu Links on Scrolling  ==========*/
    win.on("scroll", function() {
        $("section").each(function() {
            if (win.scrollTop() >= $(this).offset().top - 1) {
                $(".navbar .navbar-nav > li > a[data-value='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
            }
        });
    });

    /*========== Add Class Active to Vertical Menu Links on Scrolling  ==========*/
    $("section").each(function() {
        if (win.scrollTop() >= $(this).offset().top - 1) {
            $(".vertical-nav .mini-menu li a[data-value='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
        }
    });
    win.on("scroll", function() {
        $("section").each(function() {
            if (win.scrollTop() >= $(this).offset().top - 1) {
                $(".vertical-nav .mini-menu li a[data-value='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
            }
        });
    });

    /*========== Skills List  ==========*/
    $(".skills .skills-list h3 a").on("click", function(e) {
        e.preventDefault();
        $(".skills .skills-list h3 a").parent().removeClass("active");
        $(this).parent().addClass("active");
        $(".skills-content > div").hide();
        $($(this).attr('href')).show();
    });

    /*========== Start Portfolio Trigger Filterizr Js  ==========*/
    $("#control li").on('click', function() {
        $(this).addClass('active').siblings("li").removeClass('active');
    });
    // The Filterizr
    $('#filtr-container').filterizr({
        animationDuration: 0.4
    });

    /*========== Owl Carousel Js Testimonial  ==========*/
    $(".testimonials .owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        margin: 10,
        loop: true,
        autoplayHoverPause: true,
        responsiveClass: true
    });

    /*========== Ajax Contact Form  ==========*/
    $('.contact-form').on("submit", function() {

        let myForm = $(this),
            data = {};

        myForm.find('[name]').each(function() {

            let that = $(this),
                name = that.attr('name'),
                value = that.val();

            data[name] = value;

        });

        $.ajax({

            url: myForm.attr('action'),
            type: myForm.attr('method'),
            data: data,
            success: function(response) {

                if (response == "success") {

                    $(".contact-form").find(".form-message").addClass("success");
                    $(".form-message span").text("Message Sent!");

                } else {

                    $(".contact-form").find(".form-message").addClass("error");
                    $(".form-message span").text("Error Sending!");

                }
            }

        });

        return false;

    });

    /*========== Scroll To Top  ==========*/
    function scrollUp() {
        if (win.scrollTop() >= 1200) {
            scrollToTop.addClass("active");
        } else {
            scrollToTop.removeClass("active");
        }
    }

    scrollUp();

    win.on("scroll", function() {
        scrollUp();
    });

    scrollToTop.on("click", function(e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: 0
        }, 800);
    });

    /*========== Fire wow js Plugin  ==========*/
    new WOW().init();

});
