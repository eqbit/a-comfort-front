$(function () {
    $(".contact-tabs__tab").not(":first").hide();
    $(".contact-tabs__item").click(function () {
        $(".contact-tabs__item").removeClass("contact-tabs__tab_active").eq($(this).index()).addClass("contact-tabs__tab_active");
        $(".contact-tabs__tab").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("contact-tabs__tab_active");
});