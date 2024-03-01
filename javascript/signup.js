import { SIGNUP } from "./constants.js";

function submitForm() {
    // Recuperar los valores de los campos del formulario
    const name = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const age = document.querySelector('input[name="edad"]').value;
    console.log(age);
    const password = document.querySelector('input[name="password"]').value;
    const password2 = document.querySelector('input[name="password2"]').value;
    const administrator = document.getElementById("check").checked;

    // Crear un objeto JSON con los valores
    const formData = {
        name: name,
        email: email,
        age: age,
        password: password,
        password2: password2,
        administrator: administrator,
    };

    return formData;
}

// Seleccionar el formulario por su ID 'registroForm'
const form = document.getElementById("registroForm");

// Agregar un evento de escucha para el envío del formulario
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const signupData = submitForm();

    fetch(SIGNUP, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Respuesta del servidor:", data);
        })
        .catch((error) => {
            console.error("Hubo un problema con la solicitud:", error);
        });

    window.location.href = "/pages/login.html";
});
