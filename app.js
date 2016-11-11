$(document).ready(function () {

// didn't really need to set variable $boxes since only called once
  var $boxes = $(".boxes");
  var flag = 0;

// check to see if the html is empty
// if ($(this).html()===""){}
// console.log($(this).html(), "letter selected");

// click function on .boxes
  $boxes.on("click", function() {
    // check to see if the box has been marked done or not
    if (!$(this).hasClass("done")) {
      // add the html and flip the turn or flag
      if (flag === 0) {
        $(this).html("X");
        flag = 1;
      } else {
        $(this).html("O");
        flag = 0;
      }
      // mark the box as done
      $(this).addClass("done");
    }
  });

});
