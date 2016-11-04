$(document).ready(function () {

  var $boxes = $(".boxes");
  var $flag = 0;

  $boxes.on("click", function() {
    if (!$(this).hasClass("done")) {
      if ($flag === 0) {
        $(this).html("X");
        $flag = 1;
        $(this).addClass("done");
      } else {
        $(this).html("O");
        $flag = 0;
        $(this).addClass("done");
      }
    }
  });

});
