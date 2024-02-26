function submitForm() {
    // Recuperar los valores de los campos del formulario
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const password2 = document.querySelector('input[name="password2"]').value;
    const deseaVender = document.getElementById('check').checked;  

    



    // Crear un objeto JSON con los valores
    const formData = {
        username: username,
        email: email,
        telefono: telefono,
        password: password,
        password2: password2,
        deseaVender: deseaVender
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