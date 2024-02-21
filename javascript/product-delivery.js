const productDeliveryForm = document.querySelector("#product-delivery-form");
const btnContinue = document.querySelector("#btn-continuar");

btnContinue.addEventListener("click", () => {
    const deliveryPoints = productDeliveryForm.querySelectorAll(".form");

    const listDeliveryPoints = [];

    deliveryPoints.forEach((deliveryPointForm) => {
        const storeName = deliveryPointForm.querySelector(".store__name")
            .textContent;

        const inputs = deliveryPointForm.querySelectorAll("input");

        const deliveryPoint = {};

        inputs.forEach((input) => {
            deliveryPoint[input.name] = input.value;
        });

        deliveryPoint["store"] = storeName;

        listDeliveryPoints.push(deliveryPoint);
    });

    console.log(listDeliveryPoints);
});
