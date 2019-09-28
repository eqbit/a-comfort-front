$(function () {
    $(".feature-tabs__tab").not(":first").hide();
    $(".feature-tabs__item").click(function () {
        $(".feature-tabs__item").removeClass("feature-tabs__tab_active").eq($(this).index()).addClass("feature-tabs__tab_active");
        $(".feature-tabs__tab").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("feature-tabs__tab_active");
});