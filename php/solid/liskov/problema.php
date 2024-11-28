<?php

class Persona
{
    function comer() {}
    function dormir() {}
    function trabajar() {}
    function respirar() {}
}

class Bebe extends Persona
{
    function trabajar()
    {
        return new Exception("Un bebe no deberia trabajar");
    }
}

class Aguila
{
    function volar() {}
}

class AguilaDeJuguete extends Aguila
{
    function volar()
    {
        return new Exception("Estoy planeando con estilo");
    }
}
