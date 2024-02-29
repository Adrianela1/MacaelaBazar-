function submitForm() {
    // Recuperar los valores de los campos del formulario
    const nombreProducto = document.querySelector('input[name="nombre"]').value;
    const descripcion = document.querySelector('input[name="descripcion"]').value;
    const precio = document.querySelector('input[name="precio"]').value;
    const categoria = document.querySelector('select[name="categoria"]').value;

    // Recuperar el valor de la talla seleccionada
    const talla = document.querySelector('select[name="talla"]').value;

    const imagen = document.querySelector('input[name="imagen"]').value;

    // Crear un objeto JSON con los valores
    const formData = {
        producto: nombreProducto,
        descripcion: descripcion,
        precio: precio,
        categoria: categoria,
        talla: talla,
        imagen: imagen,
    };

    // Mostrar la información en un alert
    alert(JSON.stringify(formData));
}

// Seleccionar el formulario por su ID 'registroForm'
const form = document.getElementById('registroForm');

// Agregar un evento de escucha para el envío del formulario
form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitForm();
});

