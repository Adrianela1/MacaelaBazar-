const products = document.getElementById("products");
const mensFilter = document.getElementById("mens");
const electronicsFilter = document.getElementById("electronics");
const womensFilter = document.getElementById("womens");

const MENS_CLOTHING = "men's clothing";

const ALBUM_API = "https://fakestoreapi.com/products";

const fetchData = async () => {
    const response = await fetch(ALBUM_API);
    return await response.json();
};

/**
 * Se encarga de crear la tarjeta de producto
 */
const createCardProduct = (product) => {
    const card = document.createElement("article");
    card.classList.add("col-12", "col-sm-3");
    const header = document.createElement("header"); // Imagen del producto
    const footer = document.createElement("footer"); // El nombre y precio del producto
    const imageProduct = document.createElement("img");
    const productName = document.createElement("p");
    const productPrice = document.createElement("p");

    imageProduct.src = product.image;
    productName.textContent = product.title;
    productPrice.textContent = product.price;

    header.appendChild(imageProduct);

    footer.appendChild(productName);
    footer.appendChild(productPrice);

    card.appendChild(header);
    card.appendChild(footer);

    products.appendChild(card);
};

const removeElements = (products) => {
    while (products.firstChild) {
        products.removeChild(products.firstChild);
    }
};

// Esperar a que carge el HTML y todos los archivos (JS, CSS)
window.addEventListener("DOMContentLoaded", async () => {
    // Mandar a la API
    const listProducts = await fetchData();

    // mostrar el contenido
    listProducts.forEach((product) => {
        createCardProduct(product);
    });

    // Darle funcionalidad al filtrado para mostrar por categoría
    mensFilter.addEventListener("click", () => {
        //Se filtra por categoría
        const resultFilter = listProducts.filter((product) =>
            product.category.includes(MENS_CLOTHING)
        );

        // Se limpia la lista antigua
        // products.innerHTML = "";
        removeElements(listProducts);

        // Se muestra la nueva lista
        resultFilter.forEach((product) => {
            createCardProduct(product);
        });
    });
});