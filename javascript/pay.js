//Recuperar lo que existe en el local Storage
const productsLocalStorage = localStorage.getItem("products");
const productsArray = JSON.parse(productsLocalStorage);
console.log(productsArray);
//Regresar a la página productos 
if (productsArray && productsArray.length === 0) {
    window.location.href = "products.html";
} 

const form = document.querySelector("#pay-form");
const getInputValue = (id) => {
    return document.querySelector(`#${id}`).value;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const cardNumber = getInputValue("card-number");
    const username = getInputValue("username");
    const expirationDate = getInputValue("expiration-date");
    const securityCode = getInputValue("security-code");
    const jsonData = JSON.stringify({
        cardNumber,
        username,
        expirationDate,
        securityCode,
    });
    alert(jsonData);
    window.location.href = "/pages/payment_confirmation.html";
});
