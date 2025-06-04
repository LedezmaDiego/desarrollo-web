const elementoBotonLogin = document.getElementById("boton-login");

const user = document.getElementById("input-user");
const pw = document.getElementById("input-pw");

elementoBotonLogin.addEventListener("click", function () {
  if (user.value === "" || user.value.replace(/\s+/g, "") !== user.value) {
    alert(
      "Rellenar el nombre de usuario y fijarse que no haya espacios en blanco"
    );
  } else if (pw.value === "" || pw.value.includes(" ")) {
    alert("Rellenar la contraseña y fijate que no haya espacios en blanco");
  } else {
    console.log("Usuario:", user.value);
    console.log("Contraseña:", pw.value);
    localStorage.setItem("Usuario", user.value);
    localStorage.setItem("Contraseña", pw.value);
  }
});

const obtenerEmpleados = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataEmpleados = await response.json(); // Importante
  return dataEmpleados;
};

if (localStorage.getItem("Usuario") !== "") {
  console.log("Empleados: ", obtenerEmpleados());
}

const divGrilla = document.getElementById("div-grilla");
obtenerEmpleados().then((empleados) => {
  empleados.forEach((empleado) => {
    const elementList = document.createElement("li");

    const tarjetaNombre = document.createElement("h5");
    const tarjetaEmail = document.createElement("h5");
    const tarjetaCompania = document.createElement("h5");
    tarjetaNombre.textContent = "Empleado: " + empleado.name;
    tarjetaEmail.textContent = "Email: " + empleado.email;
    tarjetaCompania.textContent = " Compania: " + empleado.company.name;
    divGrilla.appendChild(elementList);
    elementList.appendChild(tarjetaNombre);
    elementList.appendChild(tarjetaEmail);
    elementList.appendChild(tarjetaCompania);
  });
});
