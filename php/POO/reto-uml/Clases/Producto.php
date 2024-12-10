<?php

class Producto
{
    private $id;
    private $nombre;
    private $descripcion;
    private $precio;
    private $stock;
    private $proveedor;
    private $categoria;

    public function __construct($id,  $nombre,  $descripcion,  $precio,  $stock,  $proveedor,  $categoria)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
        $this->stock = $stock;
        $this->proveedor = $proveedor;
        $this->categoria = $categoria;
    }


    function actualizarStock($stock)
    {
        // reemplazar el stock actual con el nuevo
    }
    function editarProducto($nombre, $descripcion, $proveedor, $categoria)
    {
        // recibir los nuevos valores como param y reemplazar los atributos actuales con los param
    }
    function actualizarPrecio($precio)
    {
        // reemplazar el precio actual con el nuevo
    }

    // Setters
    public function setNombre($nombre): void
    {
        $this->nombre = $nombre;
    }

    public function setDescripcion($descripcion): void
    {
        $this->descripcion = $descripcion;
    }

    public function setPrecio($precio): void
    {
        $this->precio = $precio;
    }

    public function setStock($stock): void
    {
        $this->stock = $stock;
    }

    public function setProveedor($proveedor): void
    {
        $this->proveedor = $proveedor;
    }

    public function setCategoria($categoria): void
    {
        $this->categoria = $categoria;
    }

    // Getters
    public function getId()
    {
        return $this->id;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getDescripcion()
    {
        return $this->descripcion;
    }

    public function getPrecio()
    {
        return $this->precio;
    }

    public function getStock()
    {
        return $this->stock;
    }

    public function getProveedor()
    {
        return $this->proveedor;
    }

    public function getCategoria()
    {
        return $this->categoria;
    }
}
