// mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

// reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// copy email
const copyBtn = document.getElementById("copyEmail");
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("saharoriba@gmail.com").then(() => {
    copyBtn.textContent = "copied";
    setTimeout(() => (copyBtn.textContent = "copy"), 1500);
  });
});
