(function ($) {

    $(document).ready(function () {

        $("#banner-carousel").owlCarousel({

            items: 1,
            autoPlay: false,
            stopOnHover: false,
            slideSpeed: 1000,
            paginationSpeed: 400,
            singleItem: true,
            navigation: true,
            navigationText: ["<img src='../images/carousel/arrow-left.png'>","<img src='../images/carousel/arrow-right.png'>"],
            responsive: true

            });
        

        //$("#mom-item-carousel").owlCarousel({
        //    autoPlay: false,
        //    stopOnHover: false,
        //    slideSpeed: 1000,
        //    paginationSpeed: 400,
        //    singleItem: false,
        //    navigation: true,
        //    navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        //    responsive: true
        //});

        $(".product-carousel").owlCarousel({

            items: 4,
            itemsDesktop: [1000,4],
            itemsDesktopSmall: [900,3],
            itemsTablet: [600,2],
            autoPlay: true,
            stopOnHover: false,
            slideSpeed: 1000,
            paginationSpeed: 400,
            singleItem: false,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
            responsive: true


        });

        $("#brands-carousel").owlCarousel({

            autoPlay: false,
            stopOnHover: false,
            slideSpeed: 1000,
            paginationSpeed: 400,
            singleItem: false,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
            responsive: true
        });

        //$("#mom-item-carousel").owlCarousel({
        //    autoPlay: false,
        //    stopOnHover: false,
        //    slideSpeed: 1000,
        //    paginationSpeed: 400,
        //    singleItem: false,
        //    navigation: true,
        //    navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        //    responsive: true
        //});


    });
})(jQuery);