
import '../CSS/index.css';

const EvenementsSection = () => {
    return (
        <section id="evenements">
            <h2>Evènements</h2>
            <div class="evenement">
                <h3>Cérémonie d'ouverture</h3>
                <p>Au programme :
                    Pour la première fois de l’histoire des Jeux Olympiques, 
                    la cérémonie d’ouverture se déroulera au cœur de la ville et sera ouverte au plus grand nombre. 
                    À Paris, en 2024, la Seine offrira un cadre magique aux athlètes et aux délégations sous les yeux 
                    de centaines de milliers de spectateurs. Sur les quais bas de la Seine, 
                    les spectateurs seront au plus proche de la cérémonie et de cet évènement hors du commun.</p>
                <p>Date : 26 Juillet 2024</p>
                <p>Heure : 19h30 - 23h15</p>
                <p>Lieu : Paris</p>
                <p>Seine Olympiques</p>
                <p>A partir de 1 600,00€</p>
                <button>Réserver des billets</button>
            </div>
            <div class="evenement">
                <h3>Les sports à découvrir</h3>
                <button>Réserver des billets</button>
            </div>
            <div class="evenement">
                <h3>Cérémonie de clotûre</h3>
                <p>Au programme :
                    Comme un souvenir indélébile, cette cérémonie de clôture olympique sera empreinte d’audace, 
                    de fraternité et d’émotion. Au cœur du Stade de France, les athlètes du monde entier 
                    représenteront une dernière fois leurs pays dans un incroyable moment de célébration et de partage. 
                    Les yeux rivés vers la flamme, l’émotion sera immense au moment de refermer le grand livre olympique de Paris 2024.</p>
                <p>Date : 11 août 2024</p>
                <p>Heure : 21h00 - 23h15</p>
                <p>Lieu : Saint-Denis</p>
                <p>Stade de France</p>
                <p>A partir de 600,00€</p>
                <button>Réserver des billets</button>
            </div>
        </section>
    );
}

export default EvenementsSection;




/*document.addEventListener("DOMContentLoaded", function() {
    // Validation et gestion des événements pour le formulaire de connexion
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher la soumission par défaut du formulaire

        // Récupérer les valeurs des champs de saisie
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Validation des champs (vous pouvez ajouter des conditions supplémentaires ici)
        if (username.trim() === "" || password.trim() === "") {
            alert("Veuillez saisir votre nom d'utilisateur et votre mot de passe.");
            return; // Arrête la fonction si les champs sont vides
        }

        // Construction de l'objet contenant les données à envoyer au serveur
        const loginData = {
            username: username,
            password: password
        };

        // Envoi des données au serveur (simulé avec une alerte pour la démonstration)
        alert("Données de connexion envoyées au serveur : " + JSON.stringify(loginData));
        // Vous pouvez remplacer cette alerte par une requête AJAX pour envoyer les données au serveur
        // Assurez-vous de gérer la réponse du serveur en conséquence
    });

    // Validation et gestion des événements pour le formulaire d'inscription
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher la soumission par défaut du formulaire

        // Récupérer les valeurs des champs de saisie
        const newUsername = document.getElementById("newUsername").value;
        const email = document.getElementById("email").value;
        const newPassword = document.getElementById("newPassword").value;

        // Validation des champs (vous pouvez ajouter des conditions supplémentaires ici)
        if (newUsername.trim() === "" || email.trim() === "" || newPassword.trim() === "") {
            alert("Veuillez remplir tous les champs du formulaire.");
            return; // Arrête la fonction si les champs sont vides
        }

        // Construction de l'objet contenant les données à envoyer au serveur
        const registerData = {
            newUsername: newUsername,
            email: email,
            newPassword: newPassword
        };

        // Envoi des données au serveur (simulé avec une alerte pour la démonstration)
        alert("Données d'inscription envoyées au serveur : " + JSON.stringify(registerData));
        // Vous pouvez remplacer cette alerte par une requête AJAX pour envoyer les données au serveur
        // Assurez-vous de gérer la réponse du serveur en conséquence
    });
});
*/