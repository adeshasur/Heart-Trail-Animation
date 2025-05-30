const bodyEl = document.body;

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.clientX;
  const yPos = event.clientY;

  // Create new heart span
  const heart = document.createElement("span");

  // Random size between 20 and 100 px
  const size = 20 + Math.random() * 80;

  heart.style.width = size + "px";
  heart.style.height = size + "px";

  // Position the heart centered on the mouse
  heart.style.left = xPos - size / 2 + "px";
  heart.style.top = yPos - size / 2 + "px";

  // Add to the body
  bodyEl.appendChild(heart);

  // Remove the heart after animation ends (3s)
  setTimeout(() => {
    heart.remove();
  }, 3000);
});
