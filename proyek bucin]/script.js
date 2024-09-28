let currentIndex = 0;

function toggleGalleryAndPlay() {
    const gallery = document.getElementById("gallery");
    gallery.classList.toggle("gallery-hidden"); // Perbaikan di sini
    const audio = document.getElementById("audio");
    audio.play(); // Perbaikan di sini
}

function prevSlide() {
    const images = document.querySelectorAll(".gallery-container img");
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateSlide(images);
}

function nextSlide() {
    const images = document.querySelectorAll(".gallery-container img");
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateSlide(images);
}

function updateSlide(images) {
    images.forEach((img, index) => {
        img.style.transform = `translateX(${-currentIndex * 100}%)`; // Perbaikan di sini
    });
}
