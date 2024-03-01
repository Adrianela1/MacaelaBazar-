const form = document.querySelector("#contact-form");
const getInputValue = (id) => {
    return document.querySelector(`#${id}`).value;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = getInputValue("nombre");
    const email = getInputValue("email");
    const message = getInputValue("comentarios");
    const jsonData = JSON.stringify({ name, email, message });
});
