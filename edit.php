<?php
include("conexion.php");

if (isset($_POST['id'])) {
    $id = $_POST['id'];
    $sql = "SELECT descripcion FROM tareas WHERE id = :id";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $tarea = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($tarea);
}
?>
