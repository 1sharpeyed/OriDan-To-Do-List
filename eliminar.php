<?php
require 'conexion.php';

$id = $_POST['id'] ?? null;

if ($id !== null) {
    $stmt = $pdo->prepare("DELETE FROM tareas WHERE id = ?");
    $stmt->execute([$id]);
}
