//Fonction pour récupérer les données des événements depuis l'API
async function fetchEvents() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/events');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des événements:', error);
        return []; //Retourne un tableau vide en cas d'erreur
    }
}

//Fonction principale pour initialiser l'application
async function init() {
    const eventsData = await fetchEvents();

    //Eléments
    const dateFiltre = document.getElementById('date-filtre');
    const sportFiltre = document.getElementById('sport-filtre');
    const eventsList = document.getElementById('events-list');
    const cartItems = document.getElementById('cart-items');    

    //Peupler les filtres 
    const dates = [...new Set(eventsData.map(event => new Date(event.date).toLocaleDateString()))];
    const sports = [...new Set(eventsData.map(event => event.sport))];

    dates.forEach(date => {
        const option = document.createElement('option');
        option.value = date;
        option.textContent = date;
        dateFiltre.appendChild(option);
    });

    sports.forEach(sport => {
        const option = document.createElement('option');
        option.value = sport;
        option.textContent = sport;
        sportFiltre.appendChild(option);
    });

    //Fonction pour afficher les événements
    function displayEvents(events) {
        eventsList.innerHTML = '';
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.innerHTML = `
                <img src="${event.img}" alt="${event.name}">
                <h3>${event.name}</h3>
                <p>${new Date(event.date).toLocaleDateString()} - ${event.sport}</p>
                <button onclick="addToCart(${event.id})">Ajouter au panier</button> 
            `;
              
            eventsList.appendChild(eventElement);
        });
    }

    // Affichage initial de tous les événements
    displayEvents(eventsData);


    //Fonction pour filtrer les événements
    function filterEvents() {
        const selectedDate = dateFiltre.value;
        const selectedSport = sportFiltre.value;
        let filteredEvents = eventsData;

        if (selectedDate) {
            filteredEvents = filteredEvents.filter(event => new Date(event.date).toLocaleDateString() === selectedDate);

        }
        if (selectedSport) {
            filteredEvents = filteredEvents.filter(event => event.sport === selectedSport);
        }

        displayEvents(filteredEvents);
    }

    //Ecouteurs d'événements pour les filtres
    dateFiltre.addEventListener('change', filterEvents);
    sportFiltre.addEventListener('change', filterEvents);

    //Fonction pour ajouter un événement au panier
    window.addToCart = function(eventId) {
        const event = eventsData.find(event => event.id === eventId);
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${event.name} - ${new Date(event.date).toLocaleDateString()}</span>
            <button onclick="removeFromCart(this)">Retirer</button>
        `;
        cartItems.appendChild(cartItem);
    }

    //Fonction pour retirer un événement du panier
    window.removeFromCart = function(button) {
        const cartItem = button.parentElement;
        cartItems.removeChild(cartItem);
    }
}

//Appeler la fonction init pour démarrer l'application
init();