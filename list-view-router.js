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

// Middleware para gestionar parámetros en list-view-router
const validateParams = (req, res, next) => {
  const { id } = req.params;

  // Puedes agregar validaciones adicionales según tus requisitos
  if (!id || isNaN(id) || id <= 0) {
    return res.status(400).json({ error: 'Parámetros no válidos' });
  }

  next();
};

// Agrega el middleware de validación de parámetros al router
listViewRouter.use(validateParams);

module.exports = listViewRouter;
