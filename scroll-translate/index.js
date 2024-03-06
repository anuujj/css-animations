document.addEventListener("DOMContentLoaded", () => {
  function intersectionCallback(entries) {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.remove("hidden");
      } else {
        entry.target.classList.add("hidden");
        entry.target.classList.remove("show");
      }
    });
  }

  let options = {
    rootMargin: "0px",
    threshold: 0.01,
  };
  const observer = new IntersectionObserver(intersectionCallback);
  const sections = document.querySelectorAll(".underObs");
  sections.forEach((sec) => observer.observe(sec));
});
