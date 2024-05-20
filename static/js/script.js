let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      let value = window.scrollY;

      text.style.marginTop = Math.min(value * 2.5, window.innerHeight) + "px";
      leaf.style.top = Math.max(value * -1.5, -leaf.clientHeight) + "px";
      leaf.style.left = value * 1.5 + "px";
      hill5.style.left = value * 1.5 + "px";
      hill4.style.left = value * -1.5 + "px";
      hill1.style.top = value * 1 + "px";

      ticking = false;
    });

    ticking = true;
  }
});

function scrollToHome() {
  // Get the element with the class name "about"
  const aboutElement = document.querySelector(".home");

  // Scroll to the about element
  aboutElement.scrollIntoView({ behavior: "smooth" });
}
function scrollToAbout() {
  // Get the element with the class name "about"
  const aboutElement = document.querySelector(".about");

  // Scroll to the about element
  aboutElement.scrollIntoView({ behavior: "smooth" });
}
function scrollToDetection() {
  // Get the element with the class name "about"
  const aboutElement = document.querySelector(".detection");

  // Scroll to the about element
  aboutElement.scrollIntoView({ behavior: "smooth" });
}
document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("drawerMenu").classList.toggle("hidden");
});

// Close drawer
document.getElementById("closeDrawer").addEventListener("click", function () {
  document.getElementById("drawerMenu").classList.add("hidden");
});
document.querySelectorAll("#drawerMenu button").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.getElementById("drawerMenu").classList.add("hidden");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showElements");
    } else {
      entries.target.classList.remove("showElements");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hiddenElements");
hiddenElements.forEach((el) => observer.observe(el));

const observerHeader = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showHeader");
    } else {
      entries.target.classList.remove("showHeader");
    }
  });
});
const hiddenHeader = document.querySelectorAll(".hiddenHeader");
hiddenHeader.forEach((el) => observerHeader.observe(el));
