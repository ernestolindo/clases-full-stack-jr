<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{

    // Declarar las columnas que se pueden modificar
    protected $fillable = [
        'goal',
        'due_date',
        'completed'
    ];
}
