const productDeliveryForm = document.querySelector("#product-delivery-form");

const createCardProduct = ({ id, image, title }) => {
    const card = document.createElement("article");
    const productContainerImage = document.createElement("div");
    const productImage = document.createElement("img");
    const productName = document.createElement("p");
    const productId = document.createElement("p");

    card.classList.add("d-flex", "align-items-center", "gap-3", "mb-3");
    productContainerImage.classList.add("product__container");
    productImage.classList.add("product__img");
    productId.classList.add("product__id");

    productImage.src = image;
    productImage.alt = title;
    productName.textContent = title;
    productId.textContent = id;

    productContainerImage.appendChild(productImage);
    card.appendChild(productContainerImage);
    card.appendChild(productName);
    card.appendChild(productId);

    return card;
};

const selectPlace = () => {
    const container = document.createElement("div");
    container.classList.add("mb-4");

    const label = document.createElement("label");
    label.classList.add("primary-color");
    label.setAttribute("for", "lugar");
    label.textContent = "Lugar de entrega";

    const select = document.createElement("select");
    select.classList.add("form-control", "form-select");
    select.setAttribute("name", "lugar");
    select.setAttribute("required", true);

    const optionDefault = document.createElement("option");
    optionDefault.setAttribute("value", "");
    optionDefault.textContent = "Selecciona un lugar de entrega";
    select.appendChild(optionDefault);

    const places = ["Metro", "Metrobus", "Trolebus", "Cablebus"];
    places.forEach((place, index) => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", `lugar${index + 1}`);
        optionElement.textContent = place;
        select.appendChild(optionElement);
    });

    container.appendChild(label);
    container.appendChild(select);

    return container;
};

const createBlockProductDeliveryForm = () => {
    const form = document.createElement("div");
    const sectionRow = document.createElement("section");
    const storeName = document.createElement("p");
    const storeProducts = document.createElement("aside");
    const inputsColumn = document.createElement("div");

    storeName.classList.add("store__name");
    sectionRow.classList.add("row");
    storeProducts.classList.add("store__products", "col-12", "col-md-8");
    inputsColumn.classList.add("col-12", "col-md-4");

    storeProducts.appendChild(
        createCardProduct({
            id: 1,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            title: "nombre",
        })
    );

    inputsColumn.appendChild(selectPlace());

    sectionRow.appendChild(storeProducts);
    sectionRow.appendChild(inputsColumn);
    form.appendChild(sectionRow);

    productDeliveryForm.appendChild(form);
};

createBlockProductDeliveryForm();

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
