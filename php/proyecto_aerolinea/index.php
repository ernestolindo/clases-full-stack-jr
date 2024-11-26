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

// Crear nueva aerolinea
if (isset($_POST['createForm'])) {
    if (isset($_POST['nombre'], $_POST['cantAviones'], $_POST['tipoAerolinea'])) {
        // print_r($_POST);
        $id = count($aerolineas) + 1;
        $nombre = $_POST['nombre'];
        $cantAviones = $_POST['cantAviones'];
        $tipoAerolinea = $_POST['tipoAerolinea'];

        $aerolinea = new Aerolinea($id, $nombre, $cantAviones, $tipoAerolinea);
        //print_r($aerolinea);
        //echo "<br>";
        array_push($aerolineas, $aerolinea);

        $_SESSION['aerolineas'] = $aerolineas;

        header('Location: /clases-full-stack-jr/php/proyecto_aerolinea/');
    }
}

// actualizar una aerolinea
if (isset($_POST['editForm'])) {
    foreach ($aerolineas as $aerolinea) {
        // if ($aerolinea->getId() == $id) {
        if ($aerolinea->getId() == $_POST['id']) {
            // print_r($aerolinea);

            $aerolinea->setNombre($_POST['nombre']);
            $aerolinea->setCant_aviones($_POST['cantAviones']);
            $aerolinea->setTipo_aerolinea($_POST['tipoAerolinea']);
        }
        // }
    }
}

// eliminar una aerolinea
if (isset($_GET['delete'])) {
    $idDelete = $_GET['delete'];
    foreach ($aerolineas as $key => $aerolinea) {
        if ($aerolinea->getId() == $idDelete) {
            unset($aerolineas[$key]);
            break; // salir del bucle
        }
    };
}

//print_r($aerolineas);

// obtener el objeto de la aerolinea a partir del id -- desde el array de objetos
function getAerolineaPorId($id, $aerolineas)
{
    foreach ($aerolineas as $aerolinea) {
        if ($aerolinea->getId() == $id) {
            return $aerolinea;
        }
    };
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Aerolinea</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
</head>

<body style="background-color: #252525; color: #e0e0e0; font-family: 'Open Sans', serif;">
    <h1>Holiwis</h1>

    <?php
    if (isset($_GET['edit'])) {
        $aerolineaEditable = getAerolineaPorId($_GET['edit'], $aerolineas);
        // print_r($aerolineaEditable);
    ?>
        <!-- form editar aerolinea -->
        <form method="POST" action="">
            <!-- inputs ocultos para enviar info -->
            <input type="hidden" name="editForm" value="Hola soy el edit">
            <input type="hidden" name="id" value="<?php echo $aerolineaEditable->getId(); ?>">

            <label>Nombre Aerolinea</label>
            <input type="text" name="nombre" value="<?php echo $aerolineaEditable->getNombre() ?>">

            <label>Cantidad de aviones</label>
            <input type="text" name="cantAviones" value="<?php echo $aerolineaEditable->getCant_aviones() ?>">

            <label>Tipo de aerolinea</label>
            <input type="text" name="tipoAerolinea" value="<?php echo $aerolineaEditable->getTipo_aerolinea() ?>">

            <button type="submit">Editar aerolinea</button>
        </form>
    <?php } else { ?>
        <!-- form crear aerolinea -->
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

            <button type="submit" name="createForm">Registrar aerolinea</button>
        </form>
    <?php } ?>

    <main>
        <table>
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cantidad de Aviones</th>
                <th>Tipo de Aerolinea</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <?php foreach ($aerolineas as $aerolinea) : ?>
                    <tr>
                        <td><?php echo $aerolinea->getId(); ?></td>
                        <td><?php echo $aerolinea->getNombre(); ?></td>
                        <td><?php echo $aerolinea->getCant_aviones(); ?></td>
                        <td><?php echo $aerolinea->getTipo_aerolinea(); ?></td>
                        <td>
                            <a href="?edit=<?php echo $aerolinea->getId(); ?>">Editar</a>
                            <a href="?delete=<?php echo $aerolinea->getId(); ?>">Eliminar</a>
                        </td>
                    </tr>
                <?php endforeach ?>
            </tbody>
        </table>
    </main>
</body>

</html>