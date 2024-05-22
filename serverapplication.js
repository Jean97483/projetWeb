const express = require('express');
const mysql =require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000; // Port sur lequel le serveur écoutera

app.use(cors({
    origin: 'http://localhost:8080'
}));

//Route API

app.get('/api/events', (req, res) => {
    //retourner les données des événements
    res.json([
        //vos données ici
    ]);
});

app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});

//Configurer la connexion à la base de données 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jesusjetesuis',
    database: 'olympics'
});

//Connection à la base de données
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connecté à la base de données MySQL');
})

//Endpoint pour récupérer les événements
app.get('/api/events', (req, res) => {
    const sql = 'SELECT * FROM events';
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    })
})

//Démarrer le serveur
app.listen(port, () => {
    console.log('Serveur démarré sur le port ${port}');
});

// Middleware pour le traitement des données JSON
app.use(express.json());

// Route de connexion
app.post('/login', (req, res) => {
    // Récupérer les données de la requête
    const { username, password } = req.body;

    // Logique de validation et d'authentification
    // Ici, vous pouvez vérifier les informations d'identification et renvoyer une réponse appropriée
    // Par exemple, vérifiez les informations dans la base de données
    if (username === 'utilisateur' && password === 'motdepasse') {
        // Les informations d'identification sont correctes
        res.status(200).json({ message: 'Connexion réussie' });
    } else {
        // Les informations d'identification sont incorrectes
        res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
});

// Route d'inscription
app.post('/register', async (req, res) => {
    // Récupérer les données de la requête
    const { newUsername, email, newPassword } = req.body;

    try {
        // Générer le hash du mot de passe
        const hashedPassword = await bcrypt.hash(newPassword, 10); // Le deuxième argument est le nombre de tours de hachage

        // Ici, vous pouvez enregistrer les informations de l'utilisateur dans la base de données,
        // en utilisant le mot de passe hashé plutôt que le mot de passe brut

        // Exemple de réponse
        res.status(200).json({ message: 'Inscription réussie' });
    } catch (error) {
        console.error('Erreur lors du hachage du mot de passe :', error);
        res.status(500).json({ message: 'Erreur lors de l\'inscription' });
    }
});
const crypto = require('crypto');

const generateActivationKey = () => {
    return crypto.randomBytes(20).toString('hex');
};

// Exemple d'utilisation
const activationKey = generateActivationKey();
console.log(activationKey);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erreur interne du serveur');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
