<?php
include("conexion.php");

$sql = "SELECT * FROM tareas ORDER BY id DESC";
$stmt = $conexion->query($sql);
$tareas = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($tareas);
?>
