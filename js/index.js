let put = $(".put");
let bg = "#eec2c2";
let list = [];
let stor;

//Get previous task list from the browser localstorage if they exist
if(localStorage.getItem('list')){
  localStorage.getItem('list').split(',').map((e) => {
    put.append(`<div class="code" style="background-color:${bg};">${e}<span id="close" onclick ="deleted(this)">×</span></div>`);
    if (bg == "#f2f2b0") {
      bg = "#eec2c2";
    } else {
      bg = "#f2f2b0";
    }
  })
}

// JS delete function
const deleted = (e) => {
  setTimeout(() => {
    e.parentElement.style.display = 'none';
  }, 1000);
  e.parentElement.className = 'animated bounceOutLeft';
  list = localStorage.getItem('list').split(',');
  // list.pop();
  // localStorage.setItem('list', list);
  // var index = list.indexOf(5);
  // if (index > -1) {
  //   array.splice(index, 1);
  // }
}

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
      put.append(`<div class="code" style="background-color:${bg};">${input}<span id="close" onclick ="deleted(this)">×</span></div>`);
      if (bg == "#f2f2b0") {
        bg = "#eec2c2";
      } else {
        bg = "#f2f2b0";
      }

      // Save each entry in the localStorage
      list.push(input.trim())
      localStorage.setItem('list', list)
    }
  }
});
