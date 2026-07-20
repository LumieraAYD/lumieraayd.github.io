console.log("script cargado");

const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");

if (hamburguesa && menu) {
    hamburguesa.addEventListener("click", () => {
        menu.classList.toggle("activo");
    });
}