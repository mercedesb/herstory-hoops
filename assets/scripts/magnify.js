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
    style.left = x - 50 + "px";
    style.top = y - 50 + "px";
  },
  false
);
