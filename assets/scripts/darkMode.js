document
  .getElementById("dark-mode")
  .addEventListener("click", function (event) {
    document.body.classList.toggle("dark");
    toggle = event.target.parentElement.querySelector(".toggle");
    toggle.classList.toggle("checked");
  });
