jQuery(document).ready(function( $ ) {
    // Typed js
    var typed = new Typed('.type', {
        strings: ["Web Applications", "Mobile Applications"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000
    });
    
    // Porfolio filter
    $("#portfolio-flters li").click(function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
    
        var selectedFilter = $(this).data("filter");
        $("#portfolio-wrapper").fadeTo(100, 0);
    
        $(".portfolio-item").fadeOut().css("transform", "scale(0)");
    
        setTimeout(function () {
            $(selectedFilter).fadeIn(100).css("transform", "scale(1)");
            $("#portfolio-wrapper").fadeTo(300, 1);
        }, 300);
    });

    //team section

    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 300,
        loop: true,
        autoplayHoverPause: true
    });


    // animation
    new WOW().init();

////////////////////  Navigation  //////////////////////

// show / hide transperent black navigation

    $(function () {  
        $(window).scroll(function() {
            if($(this).scrollTop() < 50 ) {
                // hide
                $('nav').removeClass('top-nav');
                //backto top button
                $('#back-to-top').fadeOut();
            } else {
                // show nav
                $('nav').addClass('top-nav');
                $('#back-to-top').fadeIn();
            }
        });
    });

////////////////////  smooth scroll  //////////////////////
    $(function () {  
        $('a.smooth-scroll').click(function(event) {
            event.preventDefault();

            var section = $(this).attr("href");

            $('html, body').animate({
                scrollTop: $(section).offset().top - 60
            }, 1250);

        });
    });


    ////////////////////  Careers  //////////////////////

    $(".career-opening-one").click(function(){
        $(".career-opening-one-inner").slideToggle("slow");
    });

    $(".career-opening-two").click(function(){
        $(".career-opening-two-inner").slideToggle("slow");
    });

    $(".career-opening-three").click(function(){
        $(".career-opening-three-inner").slideToggle("slow");
    });


});