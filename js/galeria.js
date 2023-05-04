// Variables globales
var currentImage = 1;
var totalImages = 9;

// Funciones de cambio de imagen
function prevImage() {
  if (currentImage == 1) {
    currentImage = totalImages;
  } else {
    currentImage--;
  }
  changeImage("img/Programasweb/Galeria/foto" + currentImage + ".png", currentImage);
}

function nextImage() {
  if (currentImage == totalImages) {
    currentImage = 1;
  } else {
    currentImage++;
  }
  changeImage("img/Programasweb/Galeria/foto" + currentImage + ".png", currentImage);
}

// Función de cambio de imagen y miniatura
function changeImage(imageSrc, imageNumber) {
  // Cambiar imagen principal
  var mainImage = document.getElementById("main-image");
  mainImage.setAttribute("src", imageSrc);

  // Cambiar miniatura activa
  var activeThumbnail = document.querySelector(".thumbnail-img.active");
  activeThumbnail.classList.remove("active");

  var newActiveThumbnail = document.querySelector(".thumbnail-img[alt='Miniatura " + imageNumber + "']");
  newActiveThumbnail.classList.add("active");
}