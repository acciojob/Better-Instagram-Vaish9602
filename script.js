let dragged = null;

const images = document.querySelectorAll("img");

// Mouse down → pick element
images.forEach(img => {
  img.addEventListener("mousedown", function () {
    dragged = this;
  });
});

// Mouse up → drop & swap
images.forEach(img => {
  img.addEventListener("mouseup", function () {
    if (dragged && dragged !== this) {
      const parent1 = dragged.parentNode;
      const parent2 = this.parentNode;

      // swap images
      parent1.appendChild(this);
      parent2.appendChild(dragged);
    }
  });
});