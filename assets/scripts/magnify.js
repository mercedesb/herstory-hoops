document.getElementById("zoom").addEventListener(
  "mousemove",
  function (e) {
    let original = document.getElementById("magnify-image"),
      magnified = document.getElementById("magnify"),
      style = magnified.style,
      x = e.pageX - this.offsetLeft,
      y = e.pageY - this.offsetTop,
      imgWidth = original.width,
      imgHeight = original.height,
      xPercent = (x / imgWidth) * 100,
      yPercent = (y / imgHeight) * 100;

    // Add some margin for right edge
    if (x > 0.01 * imgWidth) {
      xPercent += 0.15 * xPercent;
    }

    // Add some margin for bottom edge
    if (y >= 0.01 * imgHeight) {
      yPercent += 0.15 * yPercent;
    }

    // Set the background of the magnified image horizontal
    style.backgroundPositionX = xPercent - 9 + "%";

    // Set the background of the magnified image vertical
    style.backgroundPositionY = yPercent - 9 + "%";

    // Move the magnifying glass with the mouse movement.
    style.left = x - 72 + "px";
    style.top = y - 72 + "px";
  },
  false
);

function createMagnifyElement(backgroundImg) {
  // don't bother creating the element to animate if prefers-reduced-motion
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;

  const viewportWidth = window.innerWidth;
  if (viewportWidth < 1024) return;

  let magnify = document.createElement("div");
  magnify.setAttribute("id", "magnify");
  magnify.setAttribute(
    "class",
    "w-36 h-36 absolute pointer-events-none rounded-full z-10 opacity-0 border border-4 border-light shadow-[0_5px_10px_-2px_rgba(0,0,0,0.3)] transition-opacity ease-linear duration-200"
  );
  magnify.setAttribute("style", `background-image: url(${backgroundImg});`);

  const zoomContainer = document.getElementById("zoom");
  zoomContainer.append(magnify);
}
