const images = [
    "https://res.cloudinary.com/dmmk7dztw/image/upload/v1742148846/cld-sample-4.jpg",
    "https://res.cloudinary.com/dmmk7dztw/image/upload/v1742148846/cld-sample-3.jpg",
    "https://res.cloudinary.com/dmmk7dztw/image/upload/v1742148846/cld-sample.jpg",
    "https://res.cloudinary.com/dmmk7dztw/image/upload/v1742148846/cld-sample-2.jpg",
    "https://res.cloudinary.com/dmmk7dztw/image/upload/v1742148845/samples/cup-on-a-table.jpg"
];

let currentIndex = 0;
const slider = document.getElementById("slider");

function showImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slider.src = images[currentIndex];
}

function prevImage() {
    showImage(currentIndex - 1);
}

function nextImage() {
    showImage(currentIndex + 1);
}

// Initialize slider
showImage(currentIndex);