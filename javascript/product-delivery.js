//  const productDeliveryForm = document.querySelector("#product-delivery-form");
//  const btnContinue = document.querySelector("#btn-continuar");

//  productDeliveryForm.addEventListener("submit", (event) => {
//      event.preventDefault();
//      const deliveryPoints = productDeliveryForm.querySelectorAll(".form");

//      const listDeliveryPoints = [];

//      deliveryPoints.forEach((deliveryPointForm) => {
//          const storeName = deliveryPointForm.querySelector(".store__name")
//          .textContent;
//         const inputs = deliveryPointForm.querySelectorAll("select");

//          const deliveryPoint = {};

//          inputs.forEach((input) => {
//              deliveryPoint[input.name] = input.value;
//          });

//          deliveryPoint["store"] = storeName;

//          listDeliveryPoints.push(deliveryPoint);
//      });

//      window.location.href = "/pages/pay.html";
//  });
const containerProduct = document.querySelector('#product-delivery-form');

datosProducto.productos.array.forEach(producto => {

    const divForm = document.createElement('div');
    divForm.classList.add('form');

    const storeName = document.createElement('p');
    storeName.textContent = tienda.nombre; //usuario.nombre de tienda aun no existe.
    storeName.classList.add('store__name');

    const aside = document.createElement('aside');
    aside.classList.add('col - 12', 'col-md-8');

    const article = document.createElement('article');
    article.classList.add('d-flex', 'align-items-center', 'gap-3', 'mb-3');

    const productConatainer = document.createElement('div');
    productConatainer.classList.add('product__container');

    const img = document.createElement('img');
    img.classList.add('product_img');
    img.src = 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg';
    img.alt = '';
    productConatainer.appendChild(img);

    const productName = document.createElement('p');
    productName.textContent = producto.nombre;

    const productId = document.createElement('p');
    productId.classList.add('product__id');
    productId.textContent = producto.id;

    const divFormSelect = document.createElement('div');
    divFormSelect.classList.add('col-12', 'col-md-4');

    const divSelect = document.creataElement('div');
    divSelect.classList.add('mb4');

//    const labelSelect = document.createElement('label'); agregar label
//    labelSelect.classList.add('primary-color', 'for','lugar'); 
// PARA LABEL DEBERIA DE SER UNA FUNCION FOREACH SELECT CREADO? O SERIA MAS SENCILLO POR CADA divSelect?
   

    const selectLugar = document.createElement('select');
    selectLugar.classList.add('form-control', 'form-select');
    selectLugar.setAttribute('name', 'lugar');   ///////asignar valor a un atributo al parecer si esta bien?
    selectLugar.setAttribute('required');

    const lugares = ["Selecciona un lugar", "Metro", "Metrobus", "Trolebus", "Cablebus"];
    lugares.forEach((lugar, index) => {
        const option = document.createElement('option');
        option.textContent = lugar;
        if (index === 0) {
            option.setAttribute('value', '')
        } else {
            option.setAttribute('value', lugares.toLowerCase());
        }
        selectLugar.appendChild(option);
    });

    const selectLinea = document.createElement('select');
    selectLinea.classList.add('form-control', 'form-select');
    selectLinea.setAttribute('name', 'linea'); // Corregido
    selectLinea.setAttribute('required');

    const lineas = ["Selecciona una linea", "Linea A", "Linea B", "Linea 1", "Linea 2", "Linea 3", "Linea 4", "Linea 5", "Linea 6", "Linea 7", "Linea 8", "Linea 9", "Linea 12"];
    lineas.forEach((linea, index) => {
        const option = document.createElement('option');
        option.textContent = linea;
        if (index === 0) {
            option.setAttribute('value', ''); // Asignando un valor vacío al primer elemento
        } else {
            option.setAttribute('value', `linea-${index}`); // Asignando un valor basado en el índice para el resto de elementos
        }
        selectLinea.appendChild(option);
    });

    const selectEstacion = document.createElement( 'select' );
    selectEstacion.setAttribute("form-control","form-select");
    selectEstacion.setAttribute('name','estacion');
    selectEstacion.setAttribute('required');

    const estaciones = ["Seleccionaa una estacion", "Zapata", "Bellas artes", "Salto del Agua", "Pino Suarez", "El rosario", "Pantitlan", "Tacubaya", "Chabacano"];
    estaciones.forEach((estacion, index) => {
        const option = document.createElement('option');
        option.textContent = estacion;
        if (index === 0) {
            option.setAttribute('value', '');
        } else {
            option.setAttribute('value', estacion.toLowerCase());
        }
    })

    const selectFecha = document.createElement('select');
    selectFecha.setAttribute("form-control", "fom-select");
    selectFecha.setAttribute('name', 'fecha');
    selectFecha.setAttribute('equired');

    const fechas = ["Selecciona una fecha","28 de febrero","29 de febrero","3 de marzo","6 de marzo"];
    fechas.forEach((fecha,index)=>{
        const option = document.createElement("option");
        option.textContent = fecha;
        if(index === 0) {
            option.setAttribute('value','');
        } else{
            option.setAttribute('value', fecha.toLowerCase());
        }
    })

    const selectHora = document.createElement( 'select' );
    selectHora.setAttribute('form-control','form-select');
    selectFecha.setAttribute('name','hora');
    selectFecha.setAttribute('required');

    const horas = ['Selecciona una hora','9:00 am','2:00 pm','7:00 pm','8:00pm'];
    horas.forEach((hora, index) => {
        const option = document.createElement('option');
        option.textContent = hora;
        if(index === 0 ) {
            option.setAttribute('value','');
        } else {
            option.setAttribute('value', hora.toLowerCase());
        }
    })


    divFormSelect.appendChild(selectLugar);
    divFormSelect.appendChild(selectLinea);
    divFormSelect.appendChild(selectEstacion);
    divFormSelect.appendChild(selectFecha);
    divFormSelect.appendChild(selectHora);

    aside.appendChild(productContainer);

    aside.appendChild(productName);
    aside.appendChild(productId);

    divForm.appendChild(storeName);
    divForm.appendChild(aside);

    article.appendChild(divForm);

    containerProduct.appendChild(article);


});