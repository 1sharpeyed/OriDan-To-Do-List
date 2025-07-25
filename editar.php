<?php
require 'conexion.php';

$id = $_POST['id'] ?? null;
$descripcion = $_POST['descripcion'] ?? '';

if ($id !== null && $descripcion !== '') {
    $stmt = $pdo->prepare("UPDATE tareas SET descripcion = ? WHERE id = ?");
    $stmt->execute([$descripcion, $id]);
}
