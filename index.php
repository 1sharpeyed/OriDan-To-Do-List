<?php
require 'conexion.php';

$stmt = $pdo->query("SELECT * FROM tareas ORDER BY id DESC");
$tareas = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>To-Do List OriDan</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div class="contenedor">
        <h1>To-Do List</h1>

        <form id="formulario">
            <input type="text" id="tarea" placeholder="Escribe una nueva tarea..." required>
            <button type="submit">Agregar</button>
        </form>

        <ul id="lista-tareas">
            <?php foreach ($tareas as $tarea): ?>
                <li data-id="<?= $tarea['id'] ?>" class="<?= $tarea['completada'] ? 'completada' : '' ?>">
                    <span><?= htmlspecialchars($tarea['descripcion']) ?></span>
                    <button class="completar">✅</button>
                    <button class="editar">✏️</button>
                    <button class="eliminar">🗑️</button>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>

    <script src="js/funciones.js"></script>
</body>
</html>
