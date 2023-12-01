const products = [

    { id: 1, name: 'DOLEX', image: '../ProyectoFinal/imagen/D1.png', precio: 500000, Tipo: 'DOLEX 500MG', gramo: 'BLISTER X10' },
    { id: 2, name: 'Coaspharma', image: '../ProyectoFinal/imagen/D2.png', precio: 300000, Tipo: 'Acetaminofen 500 mg', gramo: 'blister x 10' },
    { id: 3, name: 'La sante', image: '../ProyectoFinal/imagen/D3.png', precio: 200000, Tipo: 'Acetaminofen 500 mg', gramo: 'blister x 10' },    // Add more products as needed
    { id: 4, name: 'Dolex', image: '../ProyectoFinal/imagen/D4.png', precio: 200000, Tipo: 'Dolex niños syrup', gramo: 'frasco x 60 ml' },
    { id: 5, name: 'Advil', image: '../ProyectoFinal/imagen/D5.png', precio: 500000, Tipo: 'Advil children single pr x100ml', gramo: 'frasco x 100 ml' },
    { id: 6, name: 'Dolex', image: '../ProyectoFinal/imagen/D6.png', precio: 3000000, Tipo: 'Dolex ninos 2 + jarabe', gramo: 'frasco x 90 ml' },
    { id: 7, name: 'Sevedol', image: '../ProyectoFinal/imagenes/D7.png', precio: 200000, Tipo: 'Sevedol extra fuerte', gramo: 'blister x 6' },    // Add more products as needed
    { id: 8, name: 'Dolex', image: '../ProyectoFinal/imagen/D8.png', precio: 200000, Tipo: 'Dolex forte optizorb', gramo: 'blister x 8' },
    { id: 9, name: 'Buscapina', image: '../ProyectoFinal/imagen/D9.png', precio: 500000, Tipo: 'Buscapina fem doble accion', gramo: 'blister x 6' },
    { id: 10, name: 'Buscapina', image: '../ProyectoFinal/imagen/D10.png', precio: 3000000, Tipo: 'Buscapina compositum nf', gramo: 'blister x 10 tabletas' },

    { id: 11, name: 'DOLEX', image: '../ProyectoFinal/imagen/D11.png', precio: 500000, Tipo: 'Dolex gripa', gramo: 'blister x 4' },
    { id: 12, name: 'Noraver', image: '../ProyectoFinal/imagen/D12.png', precio: 300000, Tipo: 'Noraver gripa noche', gramo: 'sobre x 1' },
    { id: 13, name: 'Noxpirin', image: '../ProyectoFinal/imagen/D13.png', precio: 200000, Tipo: 'Noxpirin plus', gramo: 'blister x 4' },    // Add more products as needed
    { id: 14, name: 'Zas', image: '../ProyectoFinal/imagen/D14.png', precio: 200000, Tipo: 'Zas antigripa', gramo: 'blister x 10' },
    { id: 15, name: 'Vick', image: '../ProyectoFinal/imagen/D15.png', precio: 500000, Tipo: 'Vick vaporub unguento', gramo: 'lata x 12 gr' },
    { id: 16, name: 'Noraver', image: '../ProyectoFinal/imagen/D16.png', precio: 3000000, Tipo: 'Noraver gripas fast total', gramo: 'caja x 6 cap' },
    { id: 17, name: 'Pax', image: '../ProyectoFinal/imagen/D17.png', precio: 200000, Tipo: 'Pax noche limon', gramo: 'sobre x 1' },    // Add more products as needed
    { id: 18, name: 'Pax', image: '../ProyectoFinal/imagen/D18.png', precio: 200000, Tipo: 'Pax dia', gramo: 'sobre x 1' },
    { id: 19, name: 'Strepsils', image: '../ProyectoFinal/imagen/D19.png', precio: 500000, Tipo: 'Strepsils intensive sabor a miel y limon', gramo: 'caja x 16 tab' },
    { id: 20, name: 'Noraver', image: '../ProyectoFinal/imagen/D20.png', precio: 3000000, Tipo: 'Noraver garganta naranja miel', gramo: 'blister x 6' },

    { id: 21, name: 'Neutrogena', image: '../ProyectoFinal/imagen/D21.png', precio: 500000, Tipo: 'Hidratante facial neutrogena hydro', gramo: 'pote x 50 gr' },
    { id: 22, name: 'Cicatricure', image: '../ProyectoFinal/imagen/D22.png', precio: 300000, Tipo: 'Gel cicatricure cicatrices primeros resultados', gramo: 'sachet x 1' },
    { id: 23, name: 'Garnier', image: '../ProyectoFinal/imagen/D23.png', precio: 200000, Tipo: 'Serum express aclara garnier', gramo: 'frasco x 1 ml' },    // Add more products as needed
    { id: 24, name: 'L oreal', image: '../ProyectoFinal/imagen/D24.png', precio: 200000, Tipo: 'Dolex niños syrup', gramo: 'frasco x 60 ml' },
    { id: 25, name: 'Cettua', image: '../ProyectoFinal/imagen/D25.png', precio: 500000, Tipo: 'Advil children single pr x100ml', gramo: 'frasco x 100 ml' },
    { id: 26, name: 'Nixoderm', image: '../ProyectoFinal/imagen/D26.png', precio: 3000000, Tipo: 'Dolex ninos 2 + jarabe', gramo: 'frasco x 90 ml' },
    { id: 27, name: 'Sevedol', image: '../ProyectoFinal/imagen/D27.png', precio: 200000, Tipo: 'Sevedol extra fuerte', gramo: 'blister x 6' },    // Add more products as needed
    { id: 28, name: 'Dolex', image: '../ProyectoFinal/imagen/D28.png', precio: 200000, Tipo: 'Dolex forte optizorb', gramo: 'blister x 8' },
    { id: 29, name: 'Buscapina', image: '../ProyectoFinal/imagen/D29.png', precio: 500000, Tipo: 'Buscapina fem doble accion', gramo: 'blister x 6' },
    { id: 30, name: 'Buscapina', image: '../ProyectoFinal/imagen/D30.png', precio: 3000000, Tipo: 'Buscapina compositum nf', gramo: 'blister x 10 tabletas' },
    
    { id: 31, name: 'Neutrogena', image: '../ProyectoFinal/imagen/D31.png', precio: 500000, Tipo: 'Hidratante facial neutrogena hydro', gramo: 'pote x 50 gr' },
    { id: 32, name: 'Cicatricure', image: '../ProyectoFinal/imagen/D32.png', precio: 300000, Tipo: 'Gel cicatricure cicatrices primeros resultados', gramo: 'sachet x 1' },
    { id: 33, name: 'Garnier', image: '../ProyectoFinal/imagen/D33.png', precio: 200000, Tipo: 'Serum express aclara garnier', gramo: 'frasco x 1 ml' },    // Add more products as needed
    { id: 34, name: 'L oreal', image: '../ProyectoFinal/imagen/D34.png', precio: 200000, Tipo: 'Dolex niños syrup', gramo: 'frasco x 60 ml' },
    { id: 35, name: 'Cettua', image: '../ProyectoFinal/imagen/D35.png', precio: 500000, Tipo: 'Advil children single pr x100ml', gramo: 'frasco x 100 ml' },
    { id: 36, name: 'Nixoderm', image: '../ProyectoFinal/imagen/D36.png', precio: 3000000, Tipo: 'Dolex ninos 2 + jarabe', gramo: 'frasco x 90 ml' },
    { id: 37, name: 'Sevedol', image: '../ProyectoFinal/imagen/D37.png', precio: 200000, Tipo: 'Sevedol extra fuerte', gramo: 'blister x 6' },    // Add more products as needed
    { id: 38, name: 'Dolex', image: '../ProyectoFinal/imagen/D38.png', precio: 200000, Tipo: 'Dolex forte optizorb', gramo: 'blister x 8' },
    { id: 39, name: 'Buscapina', image: '../ProyectoFinal/imagen/D39.png', precio: 500000, Tipo: 'Buscapina fem doble accion', gramo: 'blister x 6' },
    { id: 40, name: 'Buscapina', image: '../ProyectoFinal/imagen/D40.png', precio: 3000000, Tipo: 'Buscapina compositum nf', gramo: 'blister x 10 tabletas' },

    { id: 41, name: 'Neutrogena', image: '../ProyectoFinal/imagen/D41.png', precio: 500000, Tipo: 'Hidratante facial neutrogena hydro', gramo: 'pote x 50 gr' },
    { id: 42, name: 'Cicatricure', image: '../ProyectoFinal/imagen/D42.png', precio: 300000, Tipo: 'Gel cicatricure cicatrices primeros resultados', gramo: 'sachet x 1' },
    { id: 43, name: 'Garnier', image: '../ProyectoFinal/imagen/D43.png', precio: 200000, Tipo: 'Serum express aclara garnier', gramo: 'frasco x 1 ml' },    // Add more products as needed
    { id: 44, name: 'L oreal', image: '../ProyectoFinal/imagen/D44.png', precio: 200000, Tipo: 'Dolex niños syrup', gramo: 'frasco x 60 ml' },
    { id: 45, name: 'Cettua', image: '../ProyectoFinal/imagen/D45.png', precio: 500000, Tipo: 'Advil children single pr x100ml', gramo: 'frasco x 100 ml' },
    { id: 46, name: 'Nixoderm', image: '../ProyectoFinal/imagen/D46.png', precio: 3000000, Tipo: 'Dolex ninos 2 + jarabe', gramo: 'frasco x 90 ml' },
    { id: 47, name: 'Sevedol', image: '../ProyectoFinal/imagen/D47.png', precio: 200000, Tipo: 'Sevedol extra fuerte', gramo: 'blister x 6' },    // Add more products as needed
    { id: 48, name: 'Dolex', image: '../ProyectoFinal/imagen/D48.png', precio: 200000, Tipo: 'Dolex forte optizorb', gramo: 'blister x 8' },
    { id: 49, name: 'Buscapina', image: '../ProyectoFinal/imagen/D49.png', precio: 500000, Tipo: 'Buscapina fem doble accion', gramo: 'blister x 6' },
    { id: 50, name: 'Buscapina', image: '../ProyectoFinal/imagen/D50.png', precio: 3000000, Tipo: 'Buscapina compositum nf', gramo: 'blister x 10 tabletas' },
/*

    { id: 11, name: 'GUANTE PORTERO', image: '../Imagenes/gut1.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO' },    // Add more products as needed
    { id: 12, name: 'GUANTE PORTERO PUMA', image: '../Imagenes/gut2.png', precio: 200000, Tipo: 'Low', gramo: 'BLANCO/ROJO' },
    { id: 13, name: 'GUANTE PORTERO', image: '../Imagenes/gut3.JFIF', precio: 500000, Tipo: 'premium', gramo: 'BLANCO/AZUL' },
    { id: 14, name: 'GUANTE PORTERO GOLTY', image: '../Imagenes/gut4.png', precio: 3000000, Tipo: 'Medium', gramo: 'NEGRO/VERDE' },
    { id: 15, name: 'GUANTE PORTERO PREDATOR', image: '../Imagenes/gut5.JFIF', precio: 200000, Tipo: 'Low', gramo: 'NEGRO/ROSA' },
    { id: 16, name: 'GUANTE PORTERO', image: '../Imagenes/gut6.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO' },
    { id: 17, name: 'GUANTE PORTERO GOLTY', image: '../Imagenes/gut7.png', precio: 500000, Tipo: 'premium', gramo: 'VERDE' },
    { id: 18, name: 'GUANTE PORTERO WALON', image: '../Imagenes/gut8.PNG ', precio: 3000000, Tipo: 'Medium', gramo: 'NARANJA' },
    { id: 19, name: 'GUANTE PORTERO RAYO', image: '../Imagenes/gut9.png', precio: 200000, Tipo: 'Low', gramo: 'BLANCO/ROJO' },    // Add more products as needed
    { id: 20, name: 'GUANTE PORTERO N Y K', image: '../Imagenes/gut10.png', precio: 200000, Tipo: 'Low', gramo: 'BLANCO/ROJO' },



   
        { id: 21, name: 'Canilleras Nike Park Shield', image: '../Imagenes/can1.png', precio: 500000, Tipo: 'premium', gramo: 'NEGRO'},
        { id: 22, name: 'CANILLERA PROFESIONAL GOLTY', image: '../Imagenes/can2.png', precio: 3000000, Tipo: 'Medium', gramo: 'NEGRO'},
        { id: 23, name: 'CANILLERA MIYAGUI', image: '../Imagenes/can3.png', precio: 200000, Tipo: 'Low',  talla: 32, gramo: 'NEGRO' },    // Add more products as needed
        { id: 24, name: 'CANILLERA GOLTY', image: '../Imagenes/can4.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO'},
        { id: 25, name: 'CANILLERA ADIDAS PREDATOR', image: '../Imagenes/can5.png', precio: 500000, Tipo: 'premium', gramo: 'NEGRO'},
        { id: 26, name: 'CANILLERA NIKE J GUARD', image: '../Imagenes/can6.png', precio: 3000000, Tipo: 'Medium', gramo: 'NEGRO' },
        { id: 27, name: 'CANILLERA ADIDAS EVERLITE', image: '../Imagenes/can7.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO'},    // Add more products as needed
        { id: 28, name: 'CANILLERA  TIRO CLUB', image: '../Imagenes/can8.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO' },
        { id: 29, name: 'ESPINILLERA EMOTION NIKE', image: '../Imagenes/can9.png', precio: 500000, Tipo: 'premium', gramo: 'NEGRO' },
        { id: 30, name: 'ESPINILLERA CHARGE NIKE', image: '../Imagenes/can10.png', precio: 3000000, Tipo: 'Medium', gramo: 'NEGRO'},

        { id: 31, name: 'Balon baloncesto Wilson NBA', image: '../Imagenes/nba.png', precio: 500000, Tipo: 'premium', gramo: 'NEGRO'},
        { id: 32, name: 'TEAM ', image: '../Imagenes/nba2.png', precio: 3000000, Tipo: 'Medium', gramo: 'NEGRO' },
        { id: 33, name: 'LEKERS 23', image: '../Imagenes/nba3.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO'},    // Add more products as needed
        { id: 34, name: 'LEKERS 23', image: '../Imagenes/nba4.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO'},
        { id: 35, name: 'LEKERS 23 PERSONALIZADA', image: '../Imagenes/nba5.png', precio: 500000, Tipo: 'premium', gramo: 'NEGRO'},
        { id: 36, name: 'Nike Manguitos Tirador NBA 2.0', image: '../Imagenes/nba6.png', precio: 3000000, Tipo: 'Medium', gramo: 'NEGRO' },
        { id: 37, name: 'Nike Manguitos Tirador NBA 2.0', image: '../Imagenes/nba7.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO'},    // Add more products as needed
        { id: 38, name: 'LeBron Soldier BLUE', image: '../Imagenes/nba8.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO'},
        { id: 39, name: ' LeBron Soldier XII iD', image: '../Imagenes/nba9.png', precio: 500000, Tipo: 'premium', gramo: 'NEGRO'},
        { id: 40, name: 'JORDAN Pin en TU', image: '../Imagenes/nba10.png', precio: 3000000, Tipo: 'Medium', gramo: 'NEGRO'},
       
        
        { id: 41, name: 'Raqueta ', image: '../Imagenes/ten1.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO' },
        { id: 42, name: 'Wilson Burn Pink ', image: '../Imagenes/ten2.png', precio: 500000, Tipo: 'premium', gramo: 'NEGRO' },
        { id: 43, name: 'Raqueta Wilson Us Open Blx 100 Grip 2', image: '../Imagenes/ten3.png', precio: 3000000, Tipo: 'Medium', gramo: 'NEGRO' },
        { id: 44, name: 'Pelotas Tenis X3 Und', image: '../Imagenes/ten4.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO' },    // Add more products as needed
        { id: 45, name: 'Pelotas Tenis 1 Und', image: '../Imagenes/ten5.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO' },
        { id: 46, name: 'Pantaloneta Tennis Nike Azul', image: '../Imagenes/ten6.png', precio: 500000, Tipo: 'premium', gramo: 'NEGRO' },
        { id: 47, name: ' Nike Men', image: '../Imagenes/ten7.png', precio: 3000000, Tipo: 'Medium', gramo: 'NEGRO' },
        { id: 48, name: 'Nike Mujer', image: '../Imagenes/ten8.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO' },    // Add more products as needed
        { id: 49, name: 'Artengo Ts130 negro', image: '../Imagenes/ten9.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO' }, 
        { id: 50, name: ' Nike Court... - FAIR PLAY ', image: '../Imagenes/ten10.png', precio: 200000, Tipo: 'Low', gramo: 'NEGRO' }, 
*/];

// Configuración de la cantidad de productos por página.
// Definir elementos por página y página actual
const itemsPerPage = 10;

// Página actual que se mostrará inicialmente.
let currentPage = 1;

// Copia de todos los productos al principio para facilitar el filtrado.
let filtrarProducto = products.slice();
// Función para renderizar las tarjetas de productos en la interfaz.
// Función para renderizar las tarjetas de productos en la página.

function renderProductCards() {
    const container = document.getElementById('product-container');
    
    container.innerHTML = '';

    // Calcular el índice de inicio y fin para la paginación.
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filtrarProducto.length);

    // Crear y agregar las tarjetas de productos al contenedor.
    for (let i = startIndex; i < endIndex; i++) {
        const card = createProductCard(filtrarProducto[i]);
        container.appendChild(card);
    }

    // Renderizar la paginación.
    renderizarPaginacion();
}

// Función para crear una tarjeta de producto.
function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'ofer-1 articulo';
    card.innerHTML = `
        <div class="ofer-img">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="ofer-txt">
            <h3>Nombre: ${product.name}</h3>
            <p>Precio: $${product.precio}</p>
            <p>Tipo: ${product.Tipo}</p>
            <p>Gramo: ${product.gramo}</p>
            <button class="btn-2" onclick="DetProduct(this, 'detalles', ${product.id})">Ver Detalle</button>
        </div>
    `;
    return card;
}
// Función para manejar una acción de producto con carga.
function DetProduct(button, action, productId) {
    const cargarMensaje = showcargarMensaje(button);

    // Simular una carga antes de realizar la acción real.
    setTimeout(() => {
        button.closest('.ofer-1.articulo').removeChild(cargarMensaje);
        accionProducto(action, productId);
    }, 2000);
}

// Función para mostrar un mensaje de carga.
function showcargarMensaje(button) {
    const cargarMensaje = document.createElement('p');
    cargarMensaje.textContent = 'Cargando...';
    cargarMensaje.className  = 'loading-message';
    button.closest('.ofer-1.articulo').appendChild(cargarMensaje);
    return cargarMensaje;
}

// Función para manejar la acción de un producto.
function accionProducto(action, productId) {
    if (action === 'edit') editProduct(productId);
    else if (action === 'detalles') mostrarDetalleProducto(productId);
}

// Función para mostrar los detalles de un producto.
function mostrarDetalleProducto(productId) {
    const product = filtrarProducto.find(p => p.id === productId);
    const contenidoEmergente = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>Precio: $${product.precio}</p>
        <p>Tipo: ${product.Tipo}</p>
        <p>gramo: ${product.gramo}</p>
        <button class="btn-2" onclick="accionProducto('edit', ${product.id})">Editar</button>
        <button class="btn-2" onclick="closePopup()">Exit</button>
    `;
    popupCard(contenidoEmergente);
}

// Función para abrir un popup con contenido dado.
function popupCard(content) {
    const popupCard = document.getElementById('popupCard');
    popupCard.innerHTML = content;
    popupCard.style.display = 'block';
}

// Función para renderizar la paginación.
function renderizarPaginacion() {
    const totalPaginas = Math.ceil(filtrarProducto.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    // Crear botones de página y agregar eventos de clic.
    for (let i = 1; i <= totalPaginas; i++) {
        const pagina = document.createElement('button');
        pagina.innerText = i;
        pagina.addEventListener('click', () => {
            currentPage = i;
            renderProductCards();
            renderizarPaginacion();
        });
        pagination.appendChild(pagina);
    }

    // Deshabilitar el botón "Siguiente" en la última página.
    const nextButton = document.getElementById('nextButton');
    nextButton.disabled = currentPage === totalPaginas;

    // Mostrar información sobre la cantidad de elementos en la página actual.
    const pageInfo = document.getElementById('pageInfo');
    const startIdx = (currentPage - 1) * itemsPerPage + 1;
    const endIdx = Math.min(currentPage * itemsPerPage, filtrarProducto.length);
    pageInfo.innerText = `Mostrando ${startIdx} - ${endIdx} de ${filtrarProducto.length} productos`;
}

// Función para retroceder a la página anterior.
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderProductCards();
        renderizarPaginacion();
    }
}

// Función para avanzar a la siguiente página.
function nextPage() {
    const totalPaginas = Math.ceil(filtrarProducto.length / itemsPerPage);
    if (currentPage < totalPaginas) {
        currentPage++;
        renderProductCards();
        renderizarPaginacion();
    }
}

// Llama a esta función para inicializar la paginación y los productos al cargar la página.
function initializePage() {
    renderProductCards();
    renderizarPaginacion();
}

// Función para editar un producto con el ID proporcionado.
// Función para editar un producto con el ID proporcionado.
function editProduct(productId) {
    const product = filtrarProducto.find(p => p.id === productId);

    if (product) {
        // Create a form HTML
        const form = document.createElement('form');

        // Create input for the new price
        const priceInput = document.createElement('input');
        priceInput.type = 'text'; // Change input type to text
        priceInput.placeholder = 'Nuevo precio';
        priceInput.value = product.precio; // Set current price as default
        form.appendChild(priceInput);

        // Create input for the new type
        const tipoInput = document.createElement('input');
        tipoInput.type = 'text';
        tipoInput.placeholder = 'Nuevo tipo';
        tipoInput.value = product.Tipo; // Set current type as default
        form.appendChild(tipoInput);

        // Create input for the new gram
        const gramoInput = document.createElement('input');
        gramoInput.type = 'text';
        gramoInput.placeholder = 'Nuevo gramo';
        gramoInput.value = product.gramo; // Set current gram as default
        form.appendChild(gramoInput);

        // Create submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'button';
        submitButton.textContent = 'Guardar cambios';

        // Create exit button
        const exitButton = document.createElement('button');
        exitButton.type = 'button';
        exitButton.textContent = 'Salir';
        exitButton.addEventListener('click', () => {
            // Close the popup or modal
            closePopup(); // Assuming you have a closePopup function

            // Scroll to the element containing the "Editar" button
            document.getElementById('editarButtonContainer').scrollIntoView({
                behavior: 'smooth', // Optional: smooth scroll animation
            });
        });

        // Handle the click event of the submit button
        submitButton.addEventListener('click', () => {
            const newPrice = parseFloat(priceInput.value);
            const newTipo = tipoInput.value;
            const newGramo = gramoInput.value;

            // Check that the values are not null or empty
            if (!isNaN(newPrice) && newTipo.trim() !== '' && newGramo.trim() !== '') {
                // Update the price, type, and gram of the product
                product.precio = newPrice;
                product.Tipo = newTipo;
                product.gramo = newGramo;
                renderProductCards();
                // Close the popup or modal after saving changes
                closePopup(); // Assuming you have a closePopup function
            } else {
                alert('Por favor, complete todos los campos correctamente.');
            }
        });

        form.appendChild(submitButton);
        form.appendChild(exitButton);

        // Add the form to the body of the document
        document.body.appendChild(form);

        // Display the form in a popup
        openPopup(form);
    }
}
// Agregar funciones para aplicar filtros
function applyFilters() {
    const selectedPrice = document.getElementById('filterPrice').value;
    const selectedType = document.getElementById('filterType').value;

    // Filtrar productos según las selecciones
    filtrarProducto = filterProducts(selectedPrice, selectedType);

    // Renderizar tarjetas con los filtros aplicados
    renderProductCards();
}

// Función para filtrar productos por precio y tipo
// Agregar funciones para aplicar filtros
function applyFilters() {
    const selectedPrice = document.getElementById('filterPrice').value;
    const filterName = document.getElementById('filterName').value.toLowerCase();

    // Filtrar productos según las selecciones
    filtrarProducto = filterProducts(selectedPrice, filterName);

    // Renderizar tarjetas con los filtros aplicados
    renderProductCards();
}

// Función para filtrar productos por precio y nombre
// Función para filtrar productos por precio y nombre
function filterProducts(precio, name) {
    return products.filter(product => {
        const productPrice = product.precio;
        const productName = product.name.toLowerCase();

        // Filtrar por precio
        switch (precio) {
            case '50000':
                return productPrice <= 50000;
            case '100000':
                return productPrice > 50000 && productPrice <= 10000;
            case '200000':
                return productPrice > 100000 && productPrice <= 200000;
            // Agrega más casos según sea necesario

            // Si se selecciona "Todos" en el filtro de precio
            case 'all':
                return true;
            default:
                return false;
        }
    }).filter(product => {
        // Filtrar por nombre
        const productName = product.name.toLowerCase();
        return productName.includes(name);
    });
}


// Modificar la función renderProductCards para usar la variable filtrarProducto
function renderProductCards() {
    const container = document.getElementById('product-container');
    
    container.innerHTML = '';

    // Calcular el índice de inicio y fin para la paginación.
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filtrarProducto.length);

    // Crear y agregar las tarjetas de productos al contenedor.
    for (let i = startIndex; i < endIndex; i++) {
        const card = createProductCard(filtrarProducto[i]);
        container.appendChild(card);
    }

    // Renderizar la paginación.
    renderizarPaginacion();
}

// Llama a esta función para inicializar la paginación y los productos al cargar la página.
function initializePage() {
    applyFilters(); // Aplicar filtros iniciales al cargar la página
    renderizarPaginacion();
}

// ... Resto de tu código ...



// Renderización inicial al cargar la página.
renderProductCards();

// Función para abrir un popup con contenido dado.
function openPopup(content) {
    const popupCard = document.getElementById('popupCard');
    popupCard.innerHTML = ''; // Limpiar el contenido actual
    popupCard.appendChild(content);
    popupCard.classList.add('active');
    popupCard.style.display = 'block';
    
}


// Función para cerrar el popup.
function closePopup() {
    const popupCard = document.getElementById('popupCard');
    popupCard.classList.remove('active');
    setTimeout(() => {
        popupCard.style.display = 'none';
    }, 200); // Ajusta el tiempo de la transición
}

