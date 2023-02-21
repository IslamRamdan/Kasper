let icon = document.querySelector("header nav .toggle-menu");
let list = document.querySelector("header nav .list");

icon.onclick = function () {
  list.classList.toggle("show");
};
document.body.addEventListener("click", function (e) {
  if (e.target !== list && e.target !== icon) {
    if (list.classList.contains("show")) {
      list.classList.remove("show");
    }
  }
});
