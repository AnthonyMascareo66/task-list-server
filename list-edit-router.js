const express = require('express');
const listEditRouter = express.Router();

// Ruta para crear una tarea (ejemplo: /create-task)
listEditRouter.post('/create-task', (req, res) => {
  // Lógica para crear una nueva tarea
  res.send('Tarea creada exitosamente');
});

// Ruta para eliminar una tarea (ejemplo: /delete-task/:taskId)
listEditRouter.delete('/delete-task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  // Lógica para eliminar la tarea con el ID proporcionado
  res.send(`Tarea con ID ${taskId} eliminada exitosamente`);
});

// Ruta para actualizar una tarea (ejemplo: /update-task/:taskId)
listEditRouter.put('/update-task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  // Lógica para actualizar la tarea con el ID proporcionado
  res.send(`Tarea con ID ${taskId} actualizada exitosamente`);
});

module.exports = listEditRouter;
