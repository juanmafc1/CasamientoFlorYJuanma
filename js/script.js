
function abrirModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.add("activo");
        document.body.style.overflow = "hidden";
    }

}

function cerrarModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.remove("activo");
        document.body.style.overflow = "";
    }

}


// Cerrar al hacer clic fuera de la ventana
document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", function(evento) {

        if (evento.target === modal) {
            cerrarModal(modal.id);
        }

    });

});


// Cerrar con la tecla Escape
document.addEventListener("keydown", function(evento) {

    if (evento.key === "Escape") {

        document.querySelectorAll(".modal.activo")
            .forEach(modal => cerrarModal(modal.id));

    }

});



const fechaCasamiento = new Date("2027-02-20T00:00:00-03:00");

function actualizarContador() {

    const diferencia = fechaCasamiento.getTime() - Date.now();

    const contador = document.querySelector(".contador");

    if (!contador) {
        console.error("No se encontró el contador en el HTML");
        return;
    }

    if (diferencia <= 0) {
        contador.textContent = "¡Llegó nuestro gran día! ❤️";
        clearInterval(intervaloContador);
        return;
    }

    const dias = Math.floor(diferencia / 86400000);
    const horas = Math.floor((diferencia / 3600000) % 24);
    const minutos = Math.floor((diferencia / 60000) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

const intervaloContador = setInterval(actualizarContador, 1000);

actualizarContador();

async function copiarAlias() {
    const alias = document.getElementById("aliasBancario").textContent.trim();
    try{
        await navigator.clipboard.writeText(alias);
        alert("¡Alias copiado!");
    }catch(error){
        alert("¡No se pudo copiar el alias automáticamente.");
    }

}

