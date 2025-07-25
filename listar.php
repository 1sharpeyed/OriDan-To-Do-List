<?php
require 'conexion.php';

$stmt = $pdo->query("SELECT * FROM tareas ORDER BY id DESC");

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $id = $row['id'];
    $texto = htmlspecialchars($row['tarea']);
    $completado = $row['completado'];

    $clase = $completado ? 'completed' : '';
    $botonCheck = $completado ? '' : "<button onclick='marcarCompletada($id)'>✔</button>";

    echo "<div class='task $clase'>
            $texto 
            $botonCheck
            <button onclick='editarTarea($id)'>✏</button>
            <button onclick='eliminarTarea($id)'>🗑</button>
          </div>";
}
