<?php
require 'conexion.php';

$descripcion = $_POST['descripcion'] ?? '';

if ($descripcion !== '') {
    $stmt = $pdo->prepare("INSERT INTO tareas (descripcion, completada) VALUES (?, false)");
    $stmt->execute([$descripcion]);
}
