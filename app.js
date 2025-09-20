// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = document.querySelector("#listaAmigos");
listaDeAmigos.innerHTML = "Esta es la lista de mis amigos:";
//acciones  para agregar amigos a la lista
function agregarAmigo() {
    let inputNombre = document.querySelector("#amigo");
    let nombre = inputNombre.value.trim();

    if (!nombre) {
        alert("El nombre del amigo no puede estar vacío");
    } else {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaDeAmigos.appendChild(li);
        inputNombre.value = "";
    }
}
//al dar click en el boton sortear amigo, debera elegir  de manera aleatoria un amigo de la lista y mostrar su nombre en una alerta.
function sortearAmigo() {
    let amigos = listaDeAmigos.getElementsByTagName("li");
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indiceAleatorio].textContent;
        alert("El amigo seleccionado es: " + amigoSeleccionado);
    } else {
        alert("No hay amigos en la lista para sortear.");
    }
}