$(document).ready(function(){
  $btn = $("button.mobile-nav-btn");
  $navi = $('ul.navi');

  $btn.on("click", function(){
    $(this).toggleClass("open");

    $btnstate = $("button.mobile-nav-btn").hasClass("open");

    if ($btnstate === true) {
      $navi.slideDown();
    } else {
      $navi.slideUp();
    }
    console.log($btnstate);

  })
});
