const express = require('express');
const listViewRouter = express.Router();

// Ruta para listar tareas completas (ejemplo: /completed-tasks)
listViewRouter.get('/completed-tasks', (req, res) => {
  // Lógica para obtener y mostrar las tareas completas
  res.send('Lista de tareas completas');
});

// Ruta para listar tareas incompletas (ejemplo: /incomplete-tasks)
listViewRouter.get('/incomplete-tasks', (req, res) => {
  // Lógica para obtener y mostrar las tareas incompletas
  res.send('Lista de tareas incompletas');
});

module.exports = listViewRouter;
