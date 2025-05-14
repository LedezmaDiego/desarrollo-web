boton.addEventListener('click', function() {
    let valorInput = inputTexto.value.trim();
    containerLista = document.getElementById("containerLista");
    if (valorInput !== "") {
        let tareaLista = document.createElement("li");
        let inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";

        


        let tareaTexto = document.createElement("span"); // Para quitar el flex box
        tareaTexto.textContent = valorInput;

        tareaLista.appendChild(tareaTexto);
        tareaLista.appendChild(inputCheckbox);
        containerLista.appendChild(tareaLista);

        inputTexto.value = ""; // Limpia el cuadrito de input texto

        inputCheckbox.addEventListener("change", function(evt) {
        let datos_checkbox = evt.target; // target registra todos los datos del evento
        let lista_ckb = datos_checkbox.parentElement;
        if (datos_checkbox.checked){
            lista_ckb.remove();
        }
        });
    }
});