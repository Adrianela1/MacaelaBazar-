const productDeliveryForm = document.querySelector("#product-delivery-form");

const btnContainer = document.createElement("div");
btnContainer.classList.add("d-flex", "flex-column", "align-items-end");

const buttonContinue = document.createElement("button");
buttonContinue.classList.add("btn", "btn-primary");
buttonContinue.setAttribute("type", "submit");
buttonContinue.setAttribute("id", "btn-continuar");
buttonContinue.textContent = "Continuar";

btnContainer.appendChild(buttonContinue);
productDeliveryForm.appendChild(btnContainer);

const btnContinue = document.querySelector("#btn-continuar");

productDeliveryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const deliveryPoints = productDeliveryForm.querySelectorAll(".form");

    const listDeliveryPoints = [];

    deliveryPoints.forEach((deliveryPointForm) => {
        const storeName = deliveryPointForm.querySelector(".store__name")
            .textContent;
        const inputs = deliveryPointForm.querySelectorAll("select");

        const deliveryPoint = {};

        inputs.forEach((input) => {
            deliveryPoint[input.name] = input.value;
        });

        deliveryPoint["store"] = storeName;

        listDeliveryPoints.push(deliveryPoint);
    });

    console.log(listDeliveryPoints);
    window.location.href = "/pages/pay.html";
});
