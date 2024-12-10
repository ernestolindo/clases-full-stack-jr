<?php

class Usuario
{
    private $id;
    private $nombre;
    private $rol;
    private $password;

    public function __construct($id,  $nombre,  $rol,  $password)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->rol = $rol;
        $this->password = $password;
    }

    /*
    Posible inicio de sesion
    */

    // Getters

    public function getId()
    {
        return $this->id;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getRol()
    {
        return $this->rol;
    }

    public function getPassword()
    {
        return $this->password;
    }

    // Setters

    public function setNombre($nombre): void
    {
        $this->nombre = $nombre;
    }

    public function setRol($rol): void
    {
        $this->rol = $rol;
    }

    public function setPassword($password): void
    {
        $this->password = $password;
    }
}
