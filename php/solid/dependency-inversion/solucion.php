<?php

// Los modulos de alto nivel no deben depender de los de bajo nivel, ambos deben depender de abstracciones
// y estas de detalles

interface IAdaptador
{
    function connect();
}

class ConexionDB
{
    // Representacion de una base de datos
    private $adaptador;

    function __construct(IAdaptador $adaptadorParam)
    {
        $this->adaptador = $adaptadorParam;
    }

    // Conectarnos a la DB a traves de nuestro adaptador
    function conectarDB()
    {
        $this->adaptador->connect();
    }
}

class MySQL implements IAdaptador
{
    // Forma de conectarse
    function connect()
    {
        // Coneccion a la DB de MySQL
    }
}

class Firestore implements IAdaptador
{
    function connect() {}
}
