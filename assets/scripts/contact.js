async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;

  await fetch("https://getform.io/f/a0733c8c-2655-4dc1-a400-bf273b95f175", {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      if (response.status < 400) {
        form.classList.add("hidden");
        document.getElementById("form-success").classList.remove("hidden");
      }
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        document.getElementById("form-error").classList.remove("hidden");
      }
    });
}

document
  .getElementById("contact-form")
  .addEventListener("submit", handleContactSubmit);
