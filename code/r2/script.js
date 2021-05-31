const botonAbrir = document.getElementById("abrirModal");
const botonCerrar = document.getElementById("cerrarModal");
const modal = document.querySelector(".modal");

botonAbrir.addEventListener("click", abrirModal);
botonCerrar.addEventListener("click", cerrarModal);

function abrirModal(){
	modal.classList.add("revelar");
}

function cerrarModal(){
	modal.classList.remove("revelar");
}