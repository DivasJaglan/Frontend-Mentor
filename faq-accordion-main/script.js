const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginBottom = 0;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.marginBottom = "16px";
    }
  });
}
