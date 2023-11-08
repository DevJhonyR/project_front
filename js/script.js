$(document).ready(function() {
    // Manejar el clic en los enlaces de la barra de navegación
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000); // La duración de la animación en milisegundos (puedes ajustarla)
        }
    });
});
