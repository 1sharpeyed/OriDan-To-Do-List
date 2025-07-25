$(document).ready(function() {
    cargarTareas(); // Mostrar al cargar

    // Evento Enter en el input
    $('#nuevaTarea').on('keypress', function(e) {
        if (e.which === 13) agregarTarea();
    });
});

function cargarTareas() {
    $.get('listar.php', function(data) {
        $('#listaTareas').html(data);
    });
}

function agregarTarea() {
    const texto = $('#nuevaTarea').val().trim();
    if (texto === '') return;

    $.post('Post.php', { tarea: texto }, function() {
        $('#nuevaTarea').val('');
        cargarTareas();
    });
}

function eliminarTarea(id) {
    $.post('Delete.php', { id: id }, function() {
        cargarTareas();
    });
}

function editarTarea(id) {
    const nuevoTexto = prompt("Editar tarea:");
    if (!nuevoTexto) return;

    $.post('editar.php', { id: id, tarea: nuevoTexto }, function() {
        cargarTareas();
    });
}

function marcarCompletada(id) {
    $.post('completada.php', { id: id }, function() {
        cargarTareas();
    });
}
