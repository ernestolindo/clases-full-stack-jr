<?php

class Inventario
{
    private Producto $listaProductos;

    public function __construct(Producto $listaProductos)
    {
        $this->listaProductos = $listaProductos;
    }


    function agregarProducto($producto)
    {
        // validar que el dato que me ingresen sea un objeto de Producto
        $this->listaProductos[] = $producto;
    }
    function eliminarProducto($id)
    {
        //  quitar un dato de la lista de productos
        foreach ($this->listaProductos as $key => $producto) {
            if ($producto->id === $id) {
                unset($this->listaProducto[$key]);
                return true;
            }
        }
    }
    function buscarProductoPorCategoria()
    {
        // Filtrar la lista de prods segun la cat. especificada
    }
    function generarInforme()
    {
        // generar informe de productos de x precio
        //  generar informe de prods con stock mas bajo/alto a x
        // generar informe de productos sin stock
        // generar informe de productos con stock actualizado
    }
}
