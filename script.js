//your code here
const images = document.querySelectorAll(".image");

let dragSrc = null;

// When drag starts
images.forEach(img => {
    img.addEventListener("dragstart", function () {
        dragSrc = this;
        this.classList.add("selected");
    });

    img.addEventListener("dragend", function () {
        this.classList.remove("selected");
    });

    // Allow drop
    img.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    // Drop logic (swap images)
    img.addEventListener("drop", function () {
        if (dragSrc !== this) {
            // Swap background images
            const temp = dragSrc.style.backgroundImage;
            dragSrc.style.backgroundImage = this.style.backgroundImage;
            this.style.backgroundImage = temp;
        }
    });
});