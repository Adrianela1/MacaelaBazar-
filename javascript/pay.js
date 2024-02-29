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
