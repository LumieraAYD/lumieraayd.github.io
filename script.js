// ======================================
// LUMIERA
// JavaScript principal
// ======================================

// ===============================
// MENÚ HAMBURGUESA
// ===============================

const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");

if (hamburguesa && menu) {

    hamburguesa.addEventListener("click", () => {

        menu.classList.toggle("activo");

    });

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("activo");

        });

    });

}

// ===============================
// MODAL PRODUCTO
// ===============================

const modal = document.getElementById("modalProducto");
const abrirModal = document.querySelector(".overlay-producto");
const cerrarModal = document.querySelector(".cerrar-modal");

if (modal && abrirModal && cerrarModal) {

    abrirModal.addEventListener("click", () => {

        modal.classList.add("activo");

    });

    cerrarModal.addEventListener("click", () => {

        modal.classList.remove("activo");

    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("activo");

        }

    });

}
