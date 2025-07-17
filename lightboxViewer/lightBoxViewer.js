const galleryItems = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector("#close-btn");

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        lightBox.style.display = "flex";
        lightboxImage.setAttribute("src", item.src.split("-thumbnail")[0] + ".jpg");
    });
});

closeButton.addEventListener("click", () => {
    lightBox.style.display = "none";
});

lightBox.addEventListener("click", () => {
    lightBox.style.display = "none";
})

