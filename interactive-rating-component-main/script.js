const rating = document.querySelectorAll(".num");
const rated = document.getElementById("rating");
const submitButton = document.getElementById("submit-btn");
const form = document.getElementById("form");
const feedback = document.getElementById("feedback");

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function (e) {
    e.preventDefault();
    rated.innerText = rating[i].innerText;
  });
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (rated.innerText !== "") {
    form.style.display = "none";
    feedback.style.display = "flex";
  } else {
    alert("Please select rating!");
  }
});
