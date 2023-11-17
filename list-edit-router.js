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

// Middleware para manejar errores en el list-edit-router
const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Verificar el tipo de error y responder con código de estado 400
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(400).json({ error: 'Cuerpo de solicitud no válido' });
  } else if (err instanceof ValidationError) {
    res.status(400).json({ error: 'Información no válida o atributos faltantes para crear la tarea' });
  } else {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Middleware para validar solicitudes POST y PUT
const validateRequest = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    if (!req.body || Object.keys(req.body).length === 0) {
      return next(new SyntaxError('Cuerpo de solicitud vacío'));
    }

    // Aquí puedes agregar validaciones adicionales para los atributos de la tarea
    // por ejemplo, asegurarte de que req.body tenga los campos necesarios.

    if (!isValidTask(req.body)) {
      return next(new ValidationError('Información no válida o atributos faltantes para crear la tarea'));
    }
  }

  next();
};

// Ejemplo de función de validación (puedes adaptarla según tus necesidades)
const isValidTask = (task) => {
  return task && task.title && task.description;
};

// Agrega el middleware de validación al router
listEditRouter.use(validateRequest);

// Agrega el middleware de manejo de errores al final del router
listEditRouter.use(errorHandler);


module.exports = listEditRouter;
