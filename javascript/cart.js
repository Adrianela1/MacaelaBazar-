const listProducts = document.querySelector("#list-products");
const cartProducts = [];
const PRODUCTS_API = "https://fakestoreapi.com/products/";

const fetchProduct = async (productId) => {
    try {
        const response = await fetch(PRODUCTS_API + productId);
        return await response.json();
    } catch (error) {
        console.error(`Error al obtener los productos del carrito: ${error}`);
        return null;
    }
};

const createCartItemCard = ({ id, title, price, image }) => {
    // Definir elementos
    const card = document.createElement("article");
    const productBox = document.createElement("div");
    const header = document.createElement("header");
    const wrapperHeader = document.createElement("div");
    const containerImage = document.createElement("div");
    const productImage = document.createElement("img");
    const wrapperInformationProduct = document.createElement("div");
    const productName = document.createElement("h2");
    const productSize = document.createElement("p");
    const productPrice = document.createElement("p");
    const footer = document.createElement("footer");
    const buttonDelete = document.createElement("button");
    const iconTrash = document.createElement("i");

    // Agregar clases
    card.classList.add("mb-4", "card", "p-3");
    productBox.classList.add("product-box");
    header.classList.add(
        "d-flex",
        "align-items-center",
        "justify-content-between"
    );
    wrapperHeader.classList.add("d-flex", "gap-3");
    containerImage.classList.add("product__container");
    productImage.classList.add("product__img");
    productName.classList.add("product-title");
    productSize.classList.add("product-size");
    productPrice.classList.add("price");

    buttonDelete.classList.add("btn", "btn-outline-secondary", "btn-sm");
    iconTrash.classList.add("bx", "bxs-trash-alt");

    // Estructurar elementos
    containerImage.appendChild(productImage);

    wrapperInformationProduct.appendChild(productName);
    wrapperInformationProduct.appendChild(productSize);

    wrapperHeader.appendChild(containerImage);
    wrapperHeader.appendChild(wrapperInformationProduct);

    header.appendChild(wrapperHeader);
    header.appendChild(productPrice);

    buttonDelete.appendChild(iconTrash);

    footer.appendChild(buttonDelete);

    productBox.appendChild(header);
    productBox.appendChild(footer);

    card.appendChild(productBox);

    // Asignar valores

    productImage.src = image;
    productImage.alt = title;
    productName.textContent = title;
    productPrice.textContent = `$${price}`;
    productSize.textContent = `Talla: X`;

    buttonDelete.dataset.productId = id;

    // Agregar un evento de clic al botón de eliminar
    buttonDelete.addEventListener("click", () => {
        const productId = buttonDelete.dataset.productId;
        deleteItemCart(productId);
        card.remove(); // También puedes eliminar directamente el elemento del DOM si es necesario
    });

    listProducts.appendChild(card);
};

const deleteItemCart = (productId) => {
    productId = parseInt(productId, 10);

    const index = cartProducts.findIndex((product) => product.id === productId);

    console.log(index);

    // Si se encuentra el producto, elimínalo utilizando splice
    if (index !== -1) {
        cartProducts.splice(index, 1);
    }

    console.log(cartProducts);

    const cardToDelete = document.querySelector(
        `[data-product-id="${productId}"]`
    );

    if (cardToDelete) {
        cardToDelete.remove();
    }
    localStorage.setItem(
        "products",
        JSON.stringify(cartProducts.map((product) => product.id))
    );
};

window.addEventListener("DOMContentLoaded", async () => {
    const productsLocalStorage = localStorage.getItem("products");
    const productsArray = JSON.parse(productsLocalStorage);

    for (const productId of productsArray) {
        const product = await fetchProduct(productId);

        if (product) {
            cartProducts.push(product);
        }
    }

    cartProducts.forEach((product) => {
        createCartItemCard(product);
    });
});
