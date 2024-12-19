<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practica MVC</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body class="bg-light">
  <?php include './views/layouts/navbar.php' ?>
  <main class="container mt-2">


    <a href="./index.php?action=create" class="btn btn-success">Agregar producto</a>

    <table class="table m-2">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Proveedor</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($productos as $producto) : ?>
          <tr>
            <th scope="row"><?php echo $producto['id'] ?></th>
            <td><?php echo $producto['nombre'] ?></td>
            <td><?php echo $producto['precio'] ?></td>
            <td><?php echo $producto['cantidad'] ?></td>
            <td><?php echo $producto['proveedor'] ?></td>
            <td><a href="./index.php?action=update&id=<?php echo $producto['id'] ?>" class="btn btn-warning">Editar </a>
              <a href="./index.php?action=delete&id=<?php echo $producto['id'] ?>" class="btn btn-danger">Eliminar </a>
            </td>
          </tr>
        <?php endforeach ?>
      </tbody>
    </table>
  </main>

</body>

</html>