const products = document.getElementById("products");
const mensFilter = document.getElementById("mens");
const electronicsFilter = document.getElementById("electronics");
const womensFilter = document.getElementById("womens");

const MENS_CLOTHING = "men's clothing";
const ELECTRONICS = "electronics";
const WOMENS_CLOTHING = "women's clothing";

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
    const buttonCart =  document.createElement("button");
    const containerProductInfo = document.createElement("div");
    const imgCart = document.createElement("img");
    const header = document.createElement("header"); // Imagen del producto
    const footer = document.createElement("footer"); // El nombre y precio del producto
    const imageProduct = document.createElement("img");
    const productName = document.createElement("p");
    const productPrice = document.createElement("p");

    card.classList.add("col-12", "col-sm-3");
    footer.classList.add("d-flex", "gap-2");
    

    imgCart.src = "../../assets/icons/cart.svg";
    imageProduct.src = product.image;
    productName.textContent = product.title;
    productPrice.textContent = product.price;
    
    buttonCart.appendChild(imgCart);

    header.appendChild(imageProduct);

    containerProductInfo.appendChild(productName);
    containerProductInfo.appendChild(productPrice);
    
    footer.appendChild(containerProductInfo);
    footer.appendChild(buttonCart);

    card.appendChild(header);
    card.appendChild(footer);
    
    
    header.classList.add("card-product__header");
    imageProduct.classList.add("card-product__image");
    buttonCart.classList.add("button-cart__image");



    products.appendChild(card);
};

const removeElements = (products) => {
    while (products.firstChild) {
        products.removeChild(products.firstChild);
    }
};



window.addEventListener("DOMContentLoaded", async () => {
    // Mandar a la API
    const listProducts = await fetchData();

    // mostrar el contenido inicialmente
    listProducts.forEach((product) => {
        createCardProduct(product);
    });

    // Darle funcionalidad al filtrado para mostrar por categoría
    mensFilter.addEventListener("click", () => {
        filterProductsByCategory(MENS_CLOTHING);
    });

    electronicsFilter.addEventListener("click", () => {
        filterProductsByCategory(ELECTRONICS);
    });

    womensFilter.addEventListener("click", () => {
        filterProductsByCategory(WOMENS_CLOTHING);
    });

    // Filtrar productos por precio alto o bajo
    lowPriceCheckbox.addEventListener("change", () => {
        if (lowPriceCheckbox.checked) {
            filterProductsByPrice("low");
        }
    });

    highPriceCheckbox.addEventListener("change", () => {
        if (highPriceCheckbox.checked) {
            filterProductsByPrice("high");
        }
    });
});

// Función para filtrar productos por categoría
const filterProductsByCategory = (category) => {
    const resultFilter = listProducts.filter((product) =>
        product.category.includes(category)
    );

    removeElements(products);
    resultFilter.forEach((product) => {
        createCardProduct(product);
    });
};

// Función para filtrar productos por precio alto o bajo
const filterProductsByPrice = (priceType) => {
    let resultFilter;
    if (priceType === "high") {
        resultFilter = listProducts.sort((a, b) => b.price - a.price);
    } else if (priceType === "low") {
        resultFilter = listProducts.sort((a, b) => a.price - b.price);
    }

    removeElements(products);
    resultFilter.forEach((product) => {
        createCardProduct(product);
    });
};