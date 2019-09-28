$(document).ready(function(){
  $("[data-smooth-scroll]").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top-55+"px"});
    return false;
  });
});


