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

        inputCheckbox.addEventListener("change", function(ev) {
        let ck = ev.target;
        let li = ck.parentElement;
        if (ck.checked){
            li.remove();
        }
        });
    }
});