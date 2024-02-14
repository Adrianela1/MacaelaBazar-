const form = document.querySelector ("#pay-form")
const getInputValue = (id) => {
    console.log(document.querySelector(`#${id}`))
    return document.querySelector(`#${id}`).value 
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(event)
    const cardNumber = getInputValue("card-number")
    const username = getInputValue("username")
    const expirationDate = getInputValue("expiration-date")
    const securityCode = getInputValue("security-code")
    const jsonData = JSON.stringify({cardNumber, username, expirationDate,securityCode});
    console.log(jsonData); // Muestra los datos en formato JSON en la
    alert(jsonData);
})