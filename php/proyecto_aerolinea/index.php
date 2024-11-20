<?php
// IMPORTAR UN ARCHIVO
// include
// require -> si hay un fallo frena la ejecucion

require("./aerolinea.php");
session_start();

if (!isset($_SESSION['aerolineas'])) {
    $_SESSION['aerolineas'] = [];
}

$aerolineas = $_SESSION['aerolineas'];

if (isset($_POST['nombre'], $_POST['cantAviones'], $_POST['tipoAerolinea'])) {
    //print_r($_POST);

    $nombre = $_POST['nombre'];
    $cantAviones = $_POST['cantAviones'];
    $tipoAerolinea = $_POST['tipoAerolinea'];

    $aerolinea = new Aerolinea($nombre, $cantAviones, $tipoAerolinea);
    echo "<pre>";
    print_r($aerolinea);
    echo "<br>";
    array_push($aerolineas, $aerolinea);
    print_r($aerolineas);
    echo "</pre>";

    $_SESSION['aerolineas'] = $aerolineas;
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Aerolinea</title>
</head>

<body>
    <h1>Holiwis</h1>

    <form method="POST" action="">
        <label>Nombre Aerolinea</label>
        <input type="text" name="nombre">

        <label>Cantidad de aviones</label>
        <input type="text" name="cantAviones">

        <label>Tipo de aerolinea</label>
        <select name="tipoAerolinea" id="tipoAerolinea">
            <option value="comercial">Comercial</option>
            <option value="privado">Privado</option>
            <option value="carga">De carga</option>
        </select>

        <button type="submit">Registrar aerolinea</button>
    </form>
</body>

</html>