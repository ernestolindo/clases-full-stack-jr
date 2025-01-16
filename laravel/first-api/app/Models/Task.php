<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    // columnas de la tabla que se pueden modificar 
    protected $fillable = ['name', 'description', 'completed'];
}
