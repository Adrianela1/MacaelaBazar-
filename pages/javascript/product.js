const PRODUCT_API = "https://fakestoreapi.com/products/";

const fetchProduct = async (productId) => {
    try {
        const response = await fetch(PRODUCT_API + productId);
        return await response.json();
    } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
        return null;
    }
};

const createCardProduct = (product) => {
    const card = document.createElement("article");
    const containerProductInfo = document.createElement("div");
    const header = document.createElement("header");
    const footer = document.createElement("footer");
    const productName = document.createElement("p");
    const productPrice = document.createElement("p");
    const imageProduct = document.createElement("img");

    imageProduct.src = product.image;
    productName.textContent = product.title;
    productPrice.textContent = product.price;

    header.appendChild(imageProduct);

    containerProductInfo.appendChild(productName);
    containerProductInfo.appendChild(productPrice);

    footer.appendChild(containerProductInfo);

    card.appendChild(header);
    card.appendChild(footer);

    header.classList.add("card-product__header");
    imageProduct.classList.add("card-product__image");

    document.body.appendChild(card); 
}

window.addEventListener("DOMContentLoaded", async () => {
    
    const productId = 1;
    const product = await fetchProduct(productId);

    if (product) {
        createCardProduct(product);
    } else {
        console.error('No se pudo obtener el producto.');
    }
});

document.getElementById('addToCartBtn').addEventListener('click', function() {
    alert('Producto agregado al carrito');
  });
  
