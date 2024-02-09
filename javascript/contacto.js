const form = document.querySelector ("#contact-form")
const getInputValue = (id) => {
    console.log(document.querySelector(`#${id}`))
    return document.querySelector(`#${id}`).value 
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(event)
    const name = getInputValue("nombre")
    const email = getInputValue("email")
    const message = getInputValue("comentarios")
    const jsonData = JSON.stringify({name,email, message});
    console.log(jsonData); // Muestra los datos en formato JSON en la
    alert(jsonData);
})
