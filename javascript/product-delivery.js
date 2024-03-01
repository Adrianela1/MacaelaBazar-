import { PLACE_DELIVERY } from "./constants.js";

const productDeliveryForm = document.querySelector("#product-delivery-form");

// const btnContainer = document.createElement("div");
// btnContainer.classList.add("d-flex", "flex-column", "align-items-end");

// const buttonContinue = document.createElement("button");
// buttonContinue.classList.add("btn", "btn-primary");
// buttonContinue.setAttribute("type", "submit");
// buttonContinue.setAttribute("id", "btn-continuar");
// buttonContinue.textContent = "Continuar";

// btnContainer.appendChild(buttonContinue);
// productDeliveryForm.appendChild(btnContainer);

const btnContinue = document.querySelector("#btn-continuar");

productDeliveryForm.addEventListener("submit", async (event) => {
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

        // deliveryPoint["store"] = storeName;

        listDeliveryPoints.push(deliveryPoint);
    });

    fetch(PLACE_DELIVERY, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(listDeliveryPoints[0]),
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

    window.location.href = "/pages/pay.html";
});
