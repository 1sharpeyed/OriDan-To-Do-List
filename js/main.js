document.addEventListener("DOMContentLoaded", function () {
  cargarTareas();

  document.getElementById("formulario-tarea").addEventListener("submit", function (e) {
    e.preventDefault();
    const tarea = document.getElementById("tarea").value;

    fetch("Post.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "tarea=" + encodeURIComponent(tarea),
    }).then(() => {
      document.getElementById("tarea").value = "";
      cargarTareas();
    });
  });
});

function cargarTareas() {
  fetch("listar_tareas.php")
    .then((res) => res.json())
    .then((tareas) => {
      const lista = document.getElementById("lista-tareas");
      lista.innerHTML = "";

      tareas.forEach((t) => {
        const li = document.createElement("li");
        li.className = t.completado ? "completado" : "";
        li.innerHTML = `
          <span>${t.descripcion}</span>
          <div class="acciones">
            <button onclick="completarTarea(${t.id})">✔</button>
            <button onclick="editarTarea(${t.id})">✏</button>
            <button onclick="eliminarTarea(${t.id})">🗑</button>
          </div>
        `;
        lista.appendChild(li);
      });
    });
}

function completarTarea(id) {
  fetch("completada.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "id=" + id,
  }).then(cargarTareas);
}

function eliminarTarea(id) {
  fetch("Delete.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "id=" + id,
  }).then(cargarTareas);
}

function editarTarea(id) {
  const nuevaDescripcion = prompt("Edita la tarea:");
  if (nuevaDescripcion) {
    fetch("editar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `id=${id}&descripcion=${encodeURIComponent(nuevaDescripcion)}`,
    }).then(cargarTareas);
  }
}
