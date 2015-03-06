var a = ".nav-button";
var b = "#wired-nav";
var c = "#main-nav"
$(a).click(function() {
  if(!$(b).hasClass("active")) {
    $(b).addClass("active");
    $(c).slideDown(100, function() {
      $(c).addClass("active");
    });
  } else {
    $(c).slideUp(100, function() {
      $(c).removeClass("active");
      $(b).removeClass("active");
    });
  }
  return false;
});
