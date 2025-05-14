boton.addEventListener('click', function() {
    let valorInput = inputTexto.value.trim();
    let valorUListaProductos = document.getElementById("uLista");
    if (valorInput !== "") {

        let productoElementoLista = document.createElement("li");
        
        let checkboxProductoComprado = document.createElement("input")
        checkboxProductoComprado.type = "checkbox"

        let botonEliminarProducto = document.createElement("button");
        botonEliminarProducto.textContent = "Borrar producto"; // Establece el texto del botón
        let tachar = document.createElement('s');
        let textoInputAlineado = document.createElement("span"); // Para quitar el flex box
        


        productoElementoLista.appendChild(tachar);

        textoInputAlineado.textContent = valorInput;
        productoElementoLista.appendChild(textoInputAlineado);

        productoElementoLista.appendChild(checkboxProductoComprado);

        productoElementoLista.appendChild(botonEliminarProducto)

        

        valorUListaProductos.appendChild(productoElementoLista);



        inputTexto.value = ""; // Limpia el cuadrito de input texto



        checkboxProductoComprado.addEventListener("change", function(evt) {
        let datos_checkbox = evt.target; // target registra todos los datos del evento
        if (datos_checkbox.checked){
            tachar.appendChild(textoInputAlineado);
        } else {
            productoElementoLista.appendChild(textoInputAlineado);
            productoElementoLista.appendChild(checkboxProductoComprado);
            productoElementoLista.appendChild(botonEliminarProducto)
        }
        });




        botonEliminarProducto.addEventListener("click", function(evt) {
        let datos_checkbox = evt.target; // target registra todos los datos del evento
        let listaProducto = datos_checkbox.parentElement;
        listaProducto.remove();


        });








    }

       


});

inputTexto.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
    boton.click(); // Simula un clic en el botón
}
});




function guardarLista() {
    let listaHTML = document.getElementById("uLista").innerHTML;
    localStorage.setItem('listaProductos', listaHTML);
}

function cargarLista() {
    let listaGuardada = localStorage.getItem('listaProductos');
    if (listaGuardada) {
        document.getElementById("uLista").innerHTML = listaGuardada;

        // Re-adjuntar event listeners después de cargar desde localStorage
        const checkboxes = document.querySelectorAll('#uLista input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function(evt) {
                const listItem = this.parentNode;
                const textoSpan = listItem.querySelector('span');
                const botonEliminar = listItem.querySelector('button'); // Obtener el botón de eliminar
                const tachar = listItem.querySelector('s');

                if (this.checked) {
                    tachar.appendChild(textoSpan);
                    listItem.innerHTML = '';
                    listItem.appendChild(tachar);
                    listItem.appendChild(this);
                    listItem.appendChild(botonEliminar); // Re-agregar el botón
                } else {
                    listItem.innerHTML = '';
                    listItem.appendChild(textoSpan);
                    listItem.appendChild(this);
                    listItem.appendChild(botonEliminar); // Re-agregar el botón
                }
                guardarLista();
            });
        });

        const botonesEliminar = document.querySelectorAll('#uLista button');
        botonesEliminar.forEach(botonEliminar => {
            botonEliminar.addEventListener('click', function(evt) { // Cambiar a function(evt)
                let listItem = this.parentNode;
                listItem.remove();
                guardarLista();
            });
        });
    }
}

cargarLista(); // Cargar la lista al cargar la página
