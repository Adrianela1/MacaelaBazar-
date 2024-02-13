const form = document.querySelector ("#pay-form")
const getInputValue = (id) => {
    console.log(document.querySelector(`#${id}`))
    return document.querySelector(`#${id}`).value 
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(event)
    const name = getInputValue("Nombre de la tarjeta")
    const lastName = getInputValue("Nombre y Apellido")
    const expiration = getInputValue("Fecha de vencimiento")
    const jsonData = JSON.stringify({name, lastName, expiration});
    console.log(jsonData); // Muestra los datos en formato JSON en la
    alert(jsonData);
})