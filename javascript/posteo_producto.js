function submitForm() {
    // Recuperar los valores de los campos del formulario
    const nombreProducto = document.querySelector('input[name="nombre"]').value;
    const descripcion = document.querySelector('input[name="descripcion"]').value;
    const precio = document.querySelector('input[name="precio"]').value;
    const categoria = document.querySelector('select[name="categoria"]').value;

    // Recuperar el valor de la talla seleccionada
    const talla = document.querySelector('select[name="talla"]').value;


    // Crear un objeto JSON con los valores
    const formData = {
        producto: nombreProducto,
        descripcion: descripcion,
        precio: precio,
        categoria: categoria,
        talla: talla,
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
/*function submitForm() {
    // Recuperar los valores de los campos del formulario
    const nombreProducto = document.querySelector('input[name="nombre"]').value;
    const descripcion = document.querySelector('textarea[name="descripcion"]').value;
    const precio = document.querySelector('input[name="precio"]').value;
    const categoria = document.querySelector('select[name="categoria"]').value;
    const talla = document.querySelector('select[name="talla"]').value; // Seleccionar el valor de la talla directamente

    // Verificar si todos los campos obligatorios están llenos
    if (nombreProducto && descripcion && precio && categoria && talla) {
        // Crear un objeto JSON con los valores
        const formData = {
            producto: nombreProducto,
            descripcion: descripcion,
            precio: precio,
            categoria: categoria,
            talla: talla
        };

        // Mostrar la información en un alert
        alert(JSON.stringify(formData));
    } else {
        // Mostrar un mensaje de error si algún campo está vacío
        alert("Por favor, complete todos los campos.");
    }
}

// Seleccionar el formulario por su ID 'registroForm'
const form = document.getElementById('registroForm');

// Agregar un evento de escucha para el envío del formulario
form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitForm();
});*/

