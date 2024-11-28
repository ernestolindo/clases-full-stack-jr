<?php

interface Person
{
    function comer();
    function respirar();
    function dormir();
    function trabajar();
}

class Adulto implements Person
{
    function comer() {}
    function respirar() {}
    function dormir() {}
    function trabajar() {}
}

class Bebe implements Person
{
    function comer() {}
    function respirar() {}
    function dormir() {}
    function trabajar() {}
}
