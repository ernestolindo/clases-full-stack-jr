<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Query builder

        // Obtener todas las tareas
        $tasks = Task::all();

        // Retornamos la respuesta en formato JSON
        return response()->json([
            'data' => $tasks
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $task = Task::create($request->all());

        // retornamos un mensaje y el objeto creado
        return response()->json([
            'message' => 'Task created successfully',
            'data' => $task
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $task = Task::findOrFail($id);

        $task->update($request->all());
        return response()->json([
            'message' => 'Task updaded successfully',
            'data' => $task
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task, string $id)
    {
        // Buscar la tarea por el id
        $task = Task::findOrFail($id);

        // Eliminar la tarea
        $task->delete();

        return response()->json([
            'message' => 'Task deleted successfully'
        ]);
    }
}
