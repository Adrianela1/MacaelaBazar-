function submitForm() {
    // Recuperar los valores de los campos del formulario
    const nombreProducto = document.querySelector('input[name="nombre"]').value;
    const descripcion = document.querySelector('input[name="descripcion"]').value;
    const precio = document.querySelector('input[name="precio"]').value;
    // const talla = document.getElementsByName("talla").value;
    // const tallaM = document.querySelector('input[name="tallaM"]').value;
    // const tallaL = document.querySelector('input[name="tallaL"]').value;
    // const tallaXL = document.querySelector('input[name="tallaXL"]').value;
    // const password2 = document.querySelector('input[name="password2"]').value;
    const categoria = document.querySelector('select[name="categoria"]').value;
    // let sizeSelected = "" 
    // for (let i=0; i < talla.length ; i ++){
    //     if(talla[i].checked) 
    //     sizeSelected = talla[i].value
    // }

    // Recuperar el valor de la talla seleccionada
    const talla = document.querySelector('input[name="talla"]:checked');
    let tallaSeleccionada = "";
    if (talla) {
        tallaSeleccionada = talla.value;
    }


    // Crear un objeto JSON con los valores
    const formData = {
        producto: nombreProducto,
        descripcion: descripcion,
        precio: precio,
        // talla: sizeSelected,
        // tallaM: tallaM,
        // tallaL: tallaL,
        // tallaXL: tallaXL,
        categoria: categoria
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