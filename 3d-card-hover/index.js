document.addEventListener("DOMContentLoaded", () => {
  const handleHover = (e) => {
    const card = document.querySelector(".card");
    const halfHeight = card.offsetHeight / 4;
    const halfWidth = card.offsetWidth / 4;
    card.style.transform = `rotateX(${-(
      (e.offsetY - halfHeight) /10
    )}deg) rotateY(${(e.offsetX - halfWidth) / 10}deg)`;
    const content = document.querySelector(".content-layer");
    content.style.transform = `translateZ(500px) scale(1.1, 1.1)`;
    content.style.transition = "all 0.2s ease";
  };
  document.querySelector(".card").addEventListener("mousemove", (e) => {
    handleHover(e);
  });
  document.querySelector(".card").addEventListener("mouseleave", () => {
    const card = document.querySelector(".card");
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    const content = document.querySelector(".content-layer");
    content.style.transform = `translateZ(0px) scale(1, 1)`;
    content.style.transition = "all 0.2s ease";
  });
});
