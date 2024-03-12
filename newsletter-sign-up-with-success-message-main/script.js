const contatinerEl = document.getElementById("container");
const leftEl = document.getElementById("left");
const rightEl = document.getElementById("right");

const userEmailEl = document.getElementById("user-email");
const errorEl = document.getElementById("error");
const emailInput = document.getElementById("email");
const submitButtonEl = document.getElementById("submit-btn");

const confirmMessageEl = document.getElementById("confirm-message");
const dismissMessageEl = document.getElementById("dismiss-btn");

function formSuccess() {
  confirmMessageEl.classList.add("active");
  contatinerEl.classList.add("success");
  leftEl.style.display = "none";
  rightEl.style.display = "none";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    formSuccess();
    userEmailEl.innerText = email;
    emailInput.value = "";

    contatinerEl.style.padding = "2.5rem";
    // contatinerEl.classList.remove("noSuccess");
    error.classList.remove("active");
    emailInput.classList.remove("active");
  } else {
    error.classList.add("active");
    emailInput.classList.add("active");
  }
});

dismissMessageEl.addEventListener("click", () => {
  leftEl.style.display = "block";
  rightEl.style.display = "block";
  contatinerEl.classList.remove("success");
  confirmMessageEl.classList.remove("active");
});
