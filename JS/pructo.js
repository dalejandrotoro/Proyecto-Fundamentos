document.addEventListener('DOMContentLoaded', function () {
    const productosPorPagina = 10; // Número de productos que se mostrarán por página
    let paginaActual = 1; // Página actual, inicializada en 1

    const productos = [  //En esta sección, se crea un array llamado productos que contiene objetos que representan productos. 
    /*{ id: 1, nombre: 'DOLEX', image: '/imagen/D1.png', precio: 500000, Tipo: 'DOLEX 500MG', gramo: 'BLISTER X10' },
    { id: 2, nombre: 'Coaspharma', image: '/imagen/D2.png', precio: 300000, Tipo: 'Acetaminofen 500 mg', gramo: 'blister x 10' },
    { id: 3, nombre: 'La sante', image: '/imagen/D3.png', precio: 200000, Tipo: 'Acetaminofen 500 mg', gramo: 'blister x 10' },    // Add more products as needed
    { id: 4, nombre: 'Dolex', image: '/imagen/D4.png', precio: 200000, Tipo: 'Dolex niños syrup', gramo: 'frasco x 60 ml' },
    { id: 5, nombre: 'Advil', image: '/imagen/D5.png', precio: 500000, Tipo: 'Advil children single pr x100ml', gramo: 'frasco x 100 ml' },
    { id: 6, nombre: 'Dolex', image: '/imagen/D6.png', precio: 3000000, Tipo: 'Dolex ninos 2 + jarabe', gramo: 'frasco x 90 ml' },
    { id: 7, nombre: 'Sevedol', image: '/imagenes/D7.png', precio: 200000, Tipo: 'Sevedol extra fuerte', gramo: 'blister x 6' },    // Add more products as needed
    { id: 8, nombre: 'Dolex', image: '/imagen/D8.png', precio: 200000, Tipo: 'Dolex forte optizorb', gramo: 'blister x 8' },
    { id: 9, nombre: 'Buscapina', image: '/imagen/D9.png', precio: 500000, Tipo: 'Buscapina fem doble accion', gramo: 'blister x 6' },
    { id: 10, nombre: 'Buscapina', image: '/imagen/D10.png', precio: 3000000, Tipo: 'Buscapina compositum nf', gramo: 'blister x 10 tabletas' },
        // ... Agregar detalles de los productos restantes
        */
    ];

    const tbody = document.querySelector('.producto tbody');

    productos.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.Tipo}</td>
            <td>${producto.gramo}</td>
            <td>
                <button class="ver-detalle" data-id="${producto.id}">
                    Ver Detalle
                    <span class="cargando" style="display: none;">Cargando...</span>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });

    document.querySelectorAll('.ver-detalle').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            const cargandoSpan = this.querySelector('.cargando');

            // Mostrar mensaje de carga
            cargandoSpan.style.display = 'inline';

            // Promesa con un tiempo de espera de 1.5 segundos
            const delayPromise = new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 1500);
            });

            // Cuando se resuelve la promesa, se ejecuta el código dentro de then
            delayPromise.then(() => {
                const selectedProduct = productos.find(producto => producto.id == productId);

                if (selectedProduct) {
                    window.location.href = `/index.html?id=${selectedProduct.id}`;
                }

                // Ocultar mensaje de carga después de completar la acción
                cargandoSpan.style.display = 'none';
            });
        });
    });
});