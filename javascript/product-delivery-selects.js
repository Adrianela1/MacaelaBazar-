const productDeliveryFormContainer = document.querySelector(
    "#product-delivery-form"
);

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

const createSelect = ({ labelName, name, optionTextDefault, options }) => {
    const container = document.createElement("div");
    container.classList.add("mb-4");

    const label = document.createElement("label");
    label.classList.add("primary-color");
    label.setAttribute("for", name);
    label.textContent = labelName;

    const select = document.createElement("select");
    select.classList.add("form-control", "form-select");
    select.setAttribute("name", name);
    select.setAttribute("required", true);

    const optionDefault = document.createElement("option");
    optionDefault.setAttribute("value", "");
    optionDefault.textContent = optionTextDefault;
    select.appendChild(optionDefault);

    options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", option);
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });

    container.appendChild(label);
    container.appendChild(select);

    return container;
};

const generateRandomDates = () => {
    const dateList = [];
    const today = new Date();

    const generateRandomDate = () => {
        const randomDays = Math.floor(Math.random() * 30);
        const date = new Date(today);
        date.setDate(today.getDate() + randomDays);
        return date;
    };

    for (let i = 0; i < 8; i++) {
        let newDate = generateRandomDate();

        while (
            dateList.some(
                (existingDate) => existingDate.getTime() === newDate.getTime()
            )
        ) {
            newDate = generateRandomDate();
        }

        dateList.push(newDate);
    }

    dateList.sort((a, b) => a - b);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const formattedDateList = dateList.map((date) =>
        date.toLocaleDateString(undefined, options)
    );

    return formattedDateList;
};

const createBlockProductDeliveryForm = () => {
    const form = document.createElement("div");
    form.classList.add("form");

    const sectionRow = document.createElement("section");
    const storeName = document.createElement("p");
    storeName.textContent = "Ramona";
    const storeProducts = document.createElement("aside");
    const inputsColumn = document.createElement("div");
    const hr = document.createElement("hr");

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

    inputs = [
        {
            labelName: "Lugar de entrega",
            name: "lugar",
            optionTextDefault: "Selecciona un lugar de entrega",
            options: ["Metro", "Metrobus", "Trolebus", "Cablebus"],
        },
        {
            labelName: "Línea del metro",
            name: "linea-m",
            optionTextDefault: "Selecciona una linea del metro",
            options: [
                "Linea A",
                "Linea B",
                "Linea 1",
                "Linea 2",
                "Linea 3",
                "Linea 4",
                "Linea 5",
                "Linea 6",
                "Linea 7",
                "Linea 8",
                "Linea 9",
                "Linea 12",
            ],
        },
        {
            labelName: "Estación",
            name: "estacion",
            optionTextDefault: "Selecciona una estación",
            options: [
                "Zapata",
                "Bellas artes",
                "Salto del Agua",
                "Pino Suarez",
                "El rosario",
                "Pantitlan",
                "Tacubaya",
                "Chabacano",
            ],
        },
        {
            labelName: "Fecha",
            name: "fecha",
            optionTextDefault: "Selecciona una fecha",
            options: generateRandomDates(),
        },
        {
            labelName: "Hora",
            name: "horario",
            optionTextDefault: "Selecciona una hora",
            options: ["10:00 am", "3:00 pm", "4:00 pm", "6:00 pm", "8:00 pm"],
        },
    ];

    inputs.forEach((input) => {
        inputsColumn.appendChild(createSelect(input));
    });

    sectionRow.appendChild(storeProducts);
    sectionRow.appendChild(inputsColumn);
    form.appendChild(storeName);
    form.appendChild(sectionRow);
    form.appendChild(hr);

    productDeliveryFormContainer.appendChild(form);
};

createBlockProductDeliveryForm();
