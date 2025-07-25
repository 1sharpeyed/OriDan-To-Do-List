document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    const descripcion = document.getElementById("tarea").value;

    fetch("agregar.php", {
        method: "POST",
        body: new URLSearchParams({ descripcion })
    })
    .then(res => res.text())
    .then(() => location.reload());
});

document.querySelectorAll(".eliminar").forEach(boton => {
    boton.addEventListener("click", function() {
        const id = this.parentElement.dataset.id;
        fetch("eliminar.php", {
            method: "POST",
            body: new URLSearchParams({ id })
        }).then(() => location.reload());
    });
});

document.querySelectorAll(".completar").forEach(boton => {
    boton.addEventListener("click", function() {
        const id = this.parentElement.dataset.id;
        fetch("completada.php", {
            method: "POST",
            body: new URLSearchParams({ id })
        }).then(() => location.reload());
    });
});

document.querySelectorAll(".editar").forEach(boton => {
    boton.addEventListener("click", function() {
        const id = this.parentElement.dataset.id;
        const nuevaDescripcion = prompt("Editar tarea:");
        if (nuevaDescripcion) {
            fetch("editar.php", {
                method: "POST",
                body: new URLSearchParams({ id, descripcion: nuevaDescripcion })
            }).then(() => location.reload());
        }
    });
});
