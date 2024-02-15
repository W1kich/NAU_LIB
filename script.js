// accordion

const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((accordion) => {
  const image = accordion.querySelector(".rotate-on-click");
  let currentAngle = 0; // Track the current rotation angle

  accordion.addEventListener("click", () => {
    const isExpanded = accordion.classList.contains("is-open");

    // Rotate the image by 90 degrees only if the panel is expanding
    if (!isExpanded) {
      currentAngle += 180;
      image.style.transform = `rotate(${currentAngle}deg)`;
    } else {
      // Reset rotation back to 0 when collapsing
      currentAngle = 0;
      image.style.transform = `rotate(${currentAngle}deg)`;
    }

    accordion.classList.toggle("is-open");

    let content = accordion.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});