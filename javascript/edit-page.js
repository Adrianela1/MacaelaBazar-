document.addEventListener('DOMContentLoaded', function() {
    const update = document.querySelector("#update-profile");
    const upload = document.querySelector("#upload-profile");
    const imgBazar = document.querySelector('.img-bazar');
    const imgProductContainer = document.querySelector('#img-product-container');
    const imgProductInput = document.querySelector('#img-product-input'); // Referencia al input de archivo

    update.addEventListener('click', function() {
        // Alternar la visibilidad
        if (imgBazar.style.display !== 'none') {
            imgBazar.style.display = 'none';
            upload.style.display = 'block';
            imgProductContainer.style.display = 'block';
        } else {
            imgBazar.style.display = 'block';
            upload.style.display = 'none';
            imgProductContainer.style.display = 'none';
        }

        // Simular un clic en el input de archivo
        imgProductInput.click();
    });
});
