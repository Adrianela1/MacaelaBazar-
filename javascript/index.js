const products = document.querySelector("#products");
const PRODUCT_API = "https://fakestoreapi.com/products?limit=4";

const fetchData = async () => {
    const response = await fetch(PRODUCT_API);
    return await response.json();
};

const createCardProduct = ({ id, title, price, image }) => {
    const link = document.createElement("a");
    const card = document.createElement("article");

    const header = document.createElement("header");
    const footer = document.createElement("footer");

    const imgCart = document.createElement("img");
    const imageProduct = document.createElement("img");
    const productName = document.createElement("p");
    const productPrice = document.createElement("p");
    const buttonCart = document.createElement("button");

    const containerProductInfo = document.createElement("div");

    footer.classList.add("d-flex", "justify-content-between", "gap-2");

    imgCart.src = "../../assets/icons/cart-white.svg";
    imageProduct.src = image;
    productName.textContent = title;
    productPrice.textContent = `$${price} mxn`;

    buttonCart.appendChild(imgCart);

    header.appendChild(imageProduct);

    containerProductInfo.appendChild(productName);
    containerProductInfo.appendChild(productPrice);

    footer.appendChild(containerProductInfo);
    footer.appendChild(buttonCart);

    link.href = `pages/product.html?id=${id}`;

    link.appendChild(header);
    link.appendChild(footer);

    card.appendChild(link);

    header.classList.add("card-product__header");
    imageProduct.classList.add("card-product__image");
    productName.classList.add("line-clamp");
    productPrice.classList.add("fw-bold", "fs-5");
    buttonCart.classList.add("button-cart__image");

    products.appendChild(card);
};

window.addEventListener("DOMContentLoaded", async () => {
    const listProducts = await fetchData();

    listProducts.forEach((product) => {
        createCardProduct(product);
    });
});
