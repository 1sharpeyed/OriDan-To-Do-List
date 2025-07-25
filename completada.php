<?php
require 'conexion.php';

$id = $_POST['id'] ?? null;

if ($id !== null) {
    $stmt = $pdo->prepare("UPDATE tareas SET completada = NOT completada WHERE id = ?");
    $stmt->execute([$id]);
}
