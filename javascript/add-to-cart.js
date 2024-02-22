const btnCart = document.querySelector(".btn-cart");

const getProductId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
};

const saveOnLocalStorage = (idProduct) => {
    const productsList = JSON.parse(localStorage.getItem("products")) || [];
    productsList.push(idProduct);
    localStorage.setItem("products", JSON.stringify(productsList));
};

btnCart.addEventListener("click", () => {
    const idProduct = getProductId();
    alert("Se agregó al carrito");
    saveOnLocalStorage(idProduct);
});
