$(document).ready(function() {
  
  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      logoutPhase1 = 800,
      $login = $(".login"),
      $app = $(".app");
  
  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };
  
  $(document).on("click", ".login__submit", function(e) {
    if (animating) return;
    animating = true;
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    if($(".login__input").val() == "20000222"){
      $(".login__tip").html("");
      setTimeout(function() {
        $(that).addClass("success");
        setTimeout(function() {
          $login.hide();
          $login.addClass("inactive");
          animating = false;
          $(that).removeClass("success processing");
          window.location.replace("https://nnandjj.github.io/jump/show.html");
        }, submitPhase2);
      }, submitPhase1);
    }
    else{
      $(".login__tip").html("");
      setTimeout(function() {
        animating = false;
        $(that).removeClass("processing");
      }, submitPhase2 + 200);
      setTimeout(function() {
        $(".login__tip").html("Error!");
      }, submitPhase2 + 500);
    }
  });

});
