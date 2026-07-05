document.addEventListener('DOMContentLoaded', () => {
    const boton = document.querySelector('button');
    if (boton) {
        boton.addEventListener('click', () => {
            alert('¡Gracias por tu interés en GR CORPORATION! Muy pronto nos pondremos en contacto contigo.');
        });
    }
});
