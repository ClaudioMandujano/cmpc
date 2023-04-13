var currentIndex = 1; // Índice de la imagen actual
            
              function changeImage(imagePath) {
                document.getElementById('main-image').src = imagePath;
                currentIndex = 1; // Reiniciar el índice al hacer clic en una miniatura
              }
            
              function prevImage() {
                currentIndex--;
                if (currentIndex < 1) {
                  currentIndex = 9; // Cambiar al último índice si se encuentra en el primero
                }
                document.getElementById('main-image').src = 'img/Programasweb/Galeria/foto' + currentIndex + '.png';
              }
            
              function nextImage() {
                currentIndex++;
                if (currentIndex > 9) {
                  currentIndex = 1; // Cambiar al primer índice si se encuentra en el último
                }
                document.getElementById('main-image').src = 'img/Programasweb/Galeria/foto' + currentIndex + '.png';
              }