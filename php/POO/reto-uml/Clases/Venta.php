<?php
class Venta
{
    private $id;
    private $listaProductos;
    private $total;

    public function __construct($id,  $listaProductos)
    {
        $this->id = $id;
        $this->listaProductos = $listaProductos;
        $this->total = 0;
    }

    function registrarVenta($usuario)
    {
        // registrar venta con usuario referenciado
    }

    // Posible calcular total
    function calcularTotal() {}

    // Getters

    public function getId()
    {
        return $this->id;
    }

    public function getListaProductos()
    {
        return $this->listaProductos;
    }

    public function getTotal()
    {
        return $this->total;
    }

    // Setters

    public function setListaProductos($listaProductos): void
    {
        $this->listaProductos = $listaProductos;
    }

    public function setTotal($total): void
    {
        $this->total = $total;
    }
}
