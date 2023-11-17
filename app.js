const express = require('express');
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

const app = express();

// Usar los routers
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);

const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret'; // Usa un valor predeterminado si no se encuentra en el archivo .env

// Array de usuarios predefinidos (simulando una base de datos)
const usuarios = [
  { id: 1, username: 'usuario1', password: 'contraseña1' },
  { id: 2, username: 'usuario2', password: 'contraseña2' },
];

// Middleware para verificar el token JWT
const verificarToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = decoded.usuario;
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token no válido' });
  }
};

// Ruta de autenticación /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulando autenticación
  const usuarioAutenticado = usuarios.find(
    (usuario) => usuario.username === username && usuario.password === password
  );

  if (!usuarioAutenticado) {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }

  // Crear un token JWT
  const token = jwt.sign({ usuario: usuarioAutenticado.username }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Ruta protegida
app.get('/ruta-protegida', verificarToken, (req, res) => {
  res.json({ mensaje: 'Ruta protegida alcanzada', usuario: req.usuario });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

});

