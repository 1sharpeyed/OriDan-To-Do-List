# To-Do-List-OriDan
Proyecto To-Do List con PHP, PostgreSQL y AJAX

Aplicación web para gestionar tareas pendientes (To-Do List) con operaciones de agregar, listar, editar, eliminar y marcar como completadas, todo mediante AJAX sin recargar la página.

## 📁 Estructura del Proyecto

ToDoList/
│
├── CSS/
│ └── estilos.css
│
├── JS/
│ └── script.js
│
├── agregar.php
├── completada.php
├── conexion.php
├── edit.php
├── editar.php
├── eliminar.php
├── index.php
├── listar.php
├── listar_tareas.php
└── README.md

---

## Requisitos del sistema

Antes de ejecutar esta aplicación localmente, asegúrate de tener instalado lo siguiente:

### 1. **Servidor Local**
- XAMPP (recomendado) o cualquier servidor con soporte para PHP ≥ 7.4
- Acceso al navegador en `http://localhost/`

### 2. **Base de datos**
- PostgreSQL ≥ 13
- pgAdmin 4 para gestión visual

---

## Configuración Inicial

### Paso 1: Instalar PostgreSQL y crear la base de datos

1. Abre **pgAdmin 4**
2. Conéctate al servidor PostgreSQL.
3. Crea una nueva base de datos llamada `ToDoList`.
4. Abre una nueva consulta SQL y ejecuta lo siguiente:

```sql
CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    descripcion TEXT NOT NULL,
    completada BOOLEAN DEFAULT FALSE,
    creada TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Paso 2: Configurar conexión en PHP

Edita el archivo conexion.php con tus credenciales reales:


<?php
$host = "localhost";
$dbname = "ToDoList";
$user = "postgres"; // tu usuario real
$password = "tu_contraseña"; // tu contraseña real

try {
    $conn = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
    exit();
}
?> ```

Paso 3: Ubica el proyecto en XAMPP

Copia toda la carpeta ToDoList/ en:
C:\xampp\htdocs\
Inicia los servicios de Apache y PostgreSQL (si lo tienes configurado con pgAdmin local).

Abre tu navegador y accede a:
http://localhost/ToDoList/

Funcionalidades
- Agregar tareas sin recargar

- Listar tareas en tiempo real

- Marcar tareas como completadas

- Editar descripción de tareas

- Eliminar tareas

Todo implementado con llamadas AJAX desde JavaScript hacia PHP.

### Créditos y mantenimiento
Desarrollado como proyecto de práctica por Oriana Ares y José Daniel Maita, con integración manual entre PHP y PostgreSQL usando AJAX.

Contacto: 1sharp.eyed@gmail.com

Licencia
Este proyecto se publica bajo la Licencia MIT. Puedes utilizarlo, modificarlo y distribuirlo libremente, siempre que menciones al autor original.
