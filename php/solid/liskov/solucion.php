<?php

interface AveVoladora
{
    function volar();
}

class Ave
{
    function caminar() {}
}

class Aguila extends Ave implements AveVoladora
{
    function caminar() {}
    function volar() {}
}

class AguilaDeJuguete extends Ave
{
    function caminar() {}
}
