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
  var newThumbnail = document.querySelector(".thumbnail-img:nth-of-type(" + imageNumber + ")");
  newThumbnail.classList.add("active");
}

// Función de rotación automática
var intervalId = setInterval(function() {
  nextImage();
}, 3000);

// Detener la rotación al hacer hover en las miniaturas
var thumbnailContainer = document.querySelector(".thumbnail-container-2");
thumbnailContainer.addEventListener("mouseover", function() {
  clearInterval(intervalId);
});

// Reanudar la rotación al quitar el hover de las miniaturas
thumbnailContainer.addEventListener("mouseout", function() {
  intervalId = setInterval(function() {
    nextImage();
  }, 3000);
});

// Función para mover las miniaturas
function moveThumbnails() {
  const thumbnailBox = document.querySelector('.thumbnail-box');
  const thumbnails = thumbnailBox.querySelectorAll('.thumbnail');
  const thumbnailWidth = thumbnails[0].offsetWidth;
  const totalWidth = thumbnailWidth * thumbnails.length;

  // Ajusta el ancho del contenedor de miniaturas
  thumbnailBox.style.width = totalWidth + 'px';

  // Crea una animación que desplaza las miniaturas hacia la izquierda
  thumbnailBox.animate([
    { transform: `translateX(0)` },
    { transform: `translateX(-${totalWidth}px)` }
  ], {
    duration: 5000,
    iterations: Infinity,
    easing: 'linear'
  });
}

// Llama a la función para mover las miniaturas
moveThumbnails();