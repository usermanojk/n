// script.js
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".text");
    textElement.addEventListener("mouseover", () => {
      textElement.style.color = "#e74c3c";
      textElement.style.transition = "color 0.5s ease";
    });
  
    textElement.addEventListener("mouseout", () => {
      textElement.style.color = "#333";
    });
  });
  