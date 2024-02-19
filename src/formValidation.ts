const heroButton = document.getElementById("hero-button") as HTMLButtonElement;
const heroInput = document.getElementById("hero-input") as HTMLInputElement;
const error = document.querySelector(".error-msg") as HTMLSpanElement;
const heroForm = document.getElementById("hero-form") as HTMLFormElement;

document.addEventListener("DOMContentLoaded", () => {
  error.hidden = true;
});

const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

heroButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (heroInput.value !== "") {
    if (heroInput.value.match(validEmail)) {
      error.hidden = true;
      heroForm.reset();
    }
    return;
  }

  if (heroInput.value == "") {
    error.hidden = false;
  }
});
