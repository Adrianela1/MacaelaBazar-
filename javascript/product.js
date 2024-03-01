import { PRODUCT } from "./constants.js";

export const fetchProduct = async (productId) => {
    try {
        const response = await fetch(PRODUCT + productId);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener detalles del producto:", error);
        return null;
    }
};

const selectProductElement = (atribute) =>
    document.querySelector(`.product__${atribute}`);

const createProductView = ({ description, price, image }) => {
    const productTitle = selectProductElement("title");
    const productDescription = selectProductElement("description");
    const productPrice = selectProductElement("price");
    const productImage = selectProductElement("image");

    productTitle.textContent = description;
    productDescription.textContent = description;
    productPrice.textContent = `$${price} mxn`;
    productImage.src = image;
    productImage.alt = title;
};

const getCurrentProductId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
};

window.addEventListener("DOMContentLoaded", async () => {
    const productId = getCurrentProductId();
    const product = await fetchProduct(productId);

    if (product) {
        createProductView(product);
    } else {
        console.error("No se pudo obtener el producto.");
    }
});
