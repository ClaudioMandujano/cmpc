const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image-testimonial');
const testimonials = document.querySelectorAll('.testimonial');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', (event) => {
    // Obtener la URL de la imagen seleccionada
    const imageUrl = event.target.src;

    // Actualizar la imagen principal con la imagen seleccionada
    mainImage.src = imageUrl;

    // Obtener el índice de la imagen seleccionada
    const selectedIndex = Array.from(thumbnails).indexOf(event.target);

    // Ocultar todos los testimonios
    testimonials.forEach(testimonial => {
      testimonial.style.display = 'none';
      testimonial.style.opacity = 0; // Ocultar con opacidad para evitar desplazamiento
    });

    // Mostrar solo el testimonio correspondiente a la imagen seleccionada
    const testimonialId = thumbnails[selectedIndex].dataset.testimonial;
    const testimonial = document.getElementById(testimonialId);
    if (testimonial) {
      testimonial.style.display = 'block';
      testimonial.style.opacity = 1; // Mostrar con opacidad
    } else {
      testimonials.forEach(testimonial => {
        testimonial.style.display = 'block';
        testimonial.style.opacity = 1; // Mostrar todos los testimonios con opacidad
      });
    }
  });
});

function showTestimonial(testimonialId) {
  // Oculta todos los testimonios
  var testimonials = document.querySelectorAll('.testimonial-slider div');
  for (var i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
    testimonials[i].style.opacity = 0; // Ocultar con opacidad para evitar desplazamiento
  }

  // Muestra el testimonio seleccionado
  var testimonial = document.querySelector('.' + testimonialId);
  if (testimonial) {
    testimonial.style.display = 'block';
    testimonial.style.opacity = 1; // Mostrar con opacidad
  } else {
    testimonials.forEach(testimonial => {
      testimonial.style.display = 'block';
      testimonial.style.opacity = 1; // Mostrar todos los testimonios con opacidad
    });
  }
}

// Obtén todos los elementos de imagen de los testimonios

for (var i = 0; i < thumbnails.length; i++) {
  // Agrega un evento de clic a cada imagen de testimonio
  thumbnails[i].addEventListener('click', function() {
    // Obtén el atributo data-testimonial de la imagen clickeada
    var testimonialId = this.getAttribute('data-testimonial');
    // Llama a la función showTestimonial para mostrar el testimonio correspondiente
    showTestimonial(testimonialId);
  });
}