<?php

interface Person1
{
    function comer();
    function respirar();
    function dormir();
}

interface PersonaTrabajadora
{
    function trabajar();
}

class Adulto implements Person1, PersonaTrabajadora
{
    function comer() {}
    function respirar() {}
    function dormir() {}
    function trabajar() {}
}

class Bebe implements Person1
{
    function comer() {}
    function respirar() {}
    function dormir() {}
}
