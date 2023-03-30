const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  const leftArrow = document.querySelector("#left");
  const rightArrow = document.querySelector("#right");

  let counter = 0;
  let dragging = false;
  let startX;
  let scrollLeft;

  leftArrow.addEventListener("click", () => {
    if (counter > 0) {
      counter--;
      carousel.scrollLeft -= carousel.offsetWidth;
    }
    toggleArrows();
  });

  rightArrow.addEventListener("click", () => {
    if (counter < images.length - 1) {
      counter++;
      carousel.scrollLeft += carousel.offsetWidth;
    }
    toggleArrows();
  });

  carousel.addEventListener("mousedown", (e) => {
    dragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add("dragging");
  });

  carousel.addEventListener("mouseleave", () => {
    dragging = false;
    carousel.classList.remove("dragging");
  });

  carousel.addEventListener("mouseup", () => {
    dragging = false;
    carousel.classList.remove("dragging");
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3;
    carousel.scrollLeft = scrollLeft - walk;
  });

  function toggleArrows() {
    if (counter === 0) {
      leftArrow.style.display = "none";
    } else {
      leftArrow.style.display = "block";
    }

    if (counter === images.length - 1) {
      rightArrow.style.display = "none";
    } else {
      rightArrow.style.display = "block";
    }
  }