(function ($) {

    $(document).ready(function () {

        $(".level0").hover(function(){
            $(this).toggleClass("menu-active");
        });

       /* $(".responsive-menu-link").click(function(){
            $(this).toggleClass("menu-open").siblings().removeClass("menu-open");
            //$(this).next(".responsive-menu-link").removeClass(".menu-open").addClass("menu-open");
        });*/

        //Otwieranie linków z różną zawartością--uniwersalnie
        link = $(".responsive-menu-link");
        link.click(function(){
            var target = $(this).attr("data-target");
            $('#'+target).toggleClass("menu-active").siblings().removeClass("menu-active");
        });


        $(".hamburger-link").click(function(){
            $(this).toggleClass("menu-active").siblings().removeClass("menu-active");
        });


});
})(jQuery);