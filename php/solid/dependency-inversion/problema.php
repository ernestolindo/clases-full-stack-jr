<?php

// Los modulos de alto nivel no deben depender de los de bajo nivel, ambos deben depender de abstracciones
// y estas de detalles

class ConexionDB
{
    // Representacion de una base de datos
    private $adaptador1;
    private $adaptador2;

    function __construct()
    {
        $this->adaptador1 = new MySQL();
        $this->adaptador2 = new Firestore();
    }

    // Conectarnos a la DB a traves de nuestro adaptador
    function conectarDB()
    {
        $this->adaptador1->connect();
        $this->adaptador2->connect();
    }
}

class MySQL
{
    // Forma de conectarse
    function connect()
    {
        // Coneccion a la DB de MySQL
    }
}

class Firestore
{
    function connect() {}
}
