var modal = document.querySelector(".modal");
var addBtn = document.querySelector("#add-btn");
var span = document.getElementsByClassName("close")[0];

addBtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}