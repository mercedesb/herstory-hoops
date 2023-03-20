function toggleColorScheme(opts = {}) {
  document.body.classList.toggle("dark");

  darkInput = document.getElementById("dark-mode");
  toggle = darkInput.parentElement.querySelector(".toggle");

  if (opts.turnOffAnimation) {
    // turn off animation so we don't get seasick
    toggle.classList.add("transition-none");
  }

  toggle.classList.toggle("checked");

  if (opts.turnOffAnimation) {
    toggle.classList.remove("transition-none");
  }
}

document
  .getElementById("dark-mode")
  .addEventListener("click", function (event) {
    toggleColorScheme();

    const prefersDark = document.body.classList.contains("dark");
    localStorage.setItem("prefers-dark", prefersDark);
  });

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const prefersDarkFromStorage = localStorage.getItem("prefers-dark");
    const prefersDark =
      prefersDarkFromStorage ||
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (JSON.parse(prefersDark)) {
      toggleColorScheme({ turnOffAnimation: true });
    }
  },
  false
);
