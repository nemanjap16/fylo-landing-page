// hero form
const heroForm = document.getElementById("hero-form") as HTMLFormElement;
const heroButton = document.getElementById("hero-button") as HTMLButtonElement;
const heroInput = document.getElementById("hero-input") as HTMLInputElement;
const error = document.getElementById("hero-error") as HTMLSpanElement;
// access form
const accessButton = document.getElementById(
  "access-button"
) as HTMLButtonElement;
const accessInput = document.getElementById("access-input") as HTMLInputElement;
const errorAccess = document.querySelector("#access-error") as HTMLSpanElement;
const accessForm = document.getElementById("access-form") as HTMLFormElement;

document.addEventListener("DOMContentLoaded", () => {
  error.hidden = true;
  errorAccess.hidden = true;
});

const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const showError = (id: string) => {
  if (id == "hero-button") {
    if (heroInput.value.match(validEmail)) {
      error.hidden = true;
      alert("Message sent!");
      heroInput.classList.remove("invalid");
      heroForm.reset();
    } else if (heroInput.value.length == 0) {
      error.hidden = false;
      alert("Invalid email!");
      heroInput.classList.add("invalid");
    }
  }

  if (id == "access-button") {
    if (accessInput.value.match(validEmail)) {
      errorAccess.hidden = true;
      alert("Message sent!");
      accessInput.classList.remove("invalid");
      accessForm.reset();
    } else if (accessInput.value.length == 0) {
      errorAccess.hidden = false;
      alert("Invalid email!");
      accessInput.classList.add("invalid");
    }
  }
};

// hero form
heroForm.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  const target = e.target as HTMLButtonElement;
  showError(target.id);
});

// access form
accessForm.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  const target = e.target as HTMLButtonElement;
  showError(target.id);
});
