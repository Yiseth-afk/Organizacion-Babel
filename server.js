const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Base de datos SQLite
const dbPath = path.resolve(__dirname, 'babel.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error al abrir la base de datos:', err.message);
    process.exit(1);
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS danna_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      text TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.get('/api/messages', (req, res) => {
  db.all('SELECT id, name, text, created_at FROM danna_messages ORDER BY created_at DESC LIMIT 50', (err, rows) => {
    if (err) {
      console.error('Error al leer mensajes:', err.message);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    res.json(rows);
  });
});

app.post('/api/messages', (req, res) => {
  const { name, text } = req.body;
  if (!text || !text.toString().trim()) {
    return res.status(400).json({ error: 'El mensaje es obligatorio.' });
  }

  const messageName = name && name.toString().trim() ? name.toString().trim() : 'Anónimo';
  const messageText = text.toString().trim();

  db.run(
    'INSERT INTO danna_messages (name, text) VALUES (?, ?)',
    [messageName, messageText],
    function (err) {
      if (err) {
        console.error('Error al guardar mensaje:', err.message);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
      res.status(201).json({ id: this.lastID, name: messageName, text: messageText, created_at: new Date().toISOString() });
    }
  );
});

app.delete('/api/messages/:id', (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  if (Number.isNaN(messageId)) {
    return res.status(400).json({ error: 'ID inválido.' });
  }

  db.run('DELETE FROM danna_messages WHERE id = ?', [messageId], function (err) {
    if (err) {
      console.error('Error al eliminar mensaje:', err.message);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Mensaje no encontrado.' });
    }
    res.json({ success: true, deletedId: messageId });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
