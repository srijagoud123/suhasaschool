// Get Slider Elements
const slidebtnleft = document.getElementById("slide-btn-left");
const slidebtnright = document.getElementById("slide-btn-right");
const imageItems = document.querySelectorAll(".image-item");

// Initialize Slider Position
let currentIndex = 0;
const totalSlides = imageItems.length - 1;

// Function to Move Slider
function updateSlider() {
    imageItems.forEach((element) => {
        element.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

// Left Button (Previous Slide)
slidebtnleft.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Right Button (Next Slide)
slidebtnright.addEventListener("click", () => {
    if (currentIndex < totalSlides) {
        currentIndex++;
        updateSlider();
    }
});


// Initial Render
updateSlider();
