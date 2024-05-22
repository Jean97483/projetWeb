const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

//Utiliser CORS
app.use(cors());
app.use(express.json());

const events = [
  {id: 1, name: 'Cérémonie d\'ouverture', date: '2024-07-26', sport: 'Cérémonie', img: 'path-to-images' },
];

//Route API
app.get('/api/events', (req, res) => {
  res.json(events);
});

app.listen(port, () => {
  console.log('Server est démarré sur http://localhost:${port}');
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jesusjetesuis',
  database: 'olympics'
});

// Établir la connexion à la base de données
db.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
  
});



//Endpoint pour récupérer les événements
app.get('/api/events', (req, res) => {
  const sql = 'SELECT * FROM events';
  db.query(sql, (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(results);
  });
});

//Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
