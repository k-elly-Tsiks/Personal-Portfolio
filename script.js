// typing animation on Home
const typewriter = document.getElementById("typewriter");
const text = "Kelly Rudadiso Tsikwa";
let index = 0;

// clear, reset and loop typing
function typeWriterLoop() {
  if (index < text.length) {
    document.getElementById("typing-title").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriterLoop, 100); // typing speed
  } else {
    // waits 2 seconds, then clear and restart
    setTimeout(() => {
      document.getElementById("typing-title").innerHTML = "";
      index = 0;
      typeWriterLoop();
    }, 1000); // pauses before looping
  }
}

typeWriterLoop();

// slides sections
const buttons = document.querySelectorAll("nav button");
const sections = document.querySelectorAll(".section");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");

    sections.forEach(section => {
      if (section.id === target) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
});
