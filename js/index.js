let put = $(".put");
let bg = "#eec2c2";

//Delete task
put.on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(350, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

//Eliminate task when completed
put.on("click", ".code", function() {
  if($(this).css("text-decoration-line") == "line-through"){
    $(this).css("text-decoration-line", "none");
  }else{
    $(this).css("text-decoration-line", "line-through");
  }
});

//Add a task
$("textarea").keypress(function(event) {
  if (event.which === 13) {
    let input = $(".text").val();
    $(".text").val("");
    if (input.trim() !== "") {
      put.append(`<div class="code" style="background-color:${bg};">${input}<span id="close">×</span></div>`);
      if (bg == "#f2f2b0") {
        bg = "#eec2c2";
      } else {
        bg = "#f2f2b0";
      }
    }
  }
});
