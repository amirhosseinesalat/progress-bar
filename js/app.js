const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
let currentStep = 1;
const savedStep = localStorage.getItem("currentStep");
if (savedStep) {
  currentStep = parseInt(savedStep);
}
function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const progressWidth = ((currentStep - 1) / (circles.length - 1)) * 100;
  progress.style.width = progressWidth + "%";
  localStorage.setItem("currentStep", currentStep);
  if (currentStep === circles.length) {
    next.disabled = true;
    next.style.cursor = "not-allowed";
    next.style.backgroundColor = "#666767";
  } else {
    next.disabled = false;
    next.style.cursor = "pointer";
    next.style.backgroundColor = "#53a1d5";
  }
  if (currentStep === 1) {
    prev.disabled = true;
    prev.style.cursor = "not-allowed";
    prev.style.backgroundColor = "#666767";
  } else {
    prev.disabled = false;
    prev.style.cursor = "pointer";
    prev.style.backgroundColor = "#53a1d5";
  }
}

next.addEventListener("click", () => {
  if (currentStep < circles.length) {
    currentStep++;
    updateProgress();
  }
});
prev.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }
});
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    currentStep = index + 1;
    updateProgress();
  });
});
updateProgress();
