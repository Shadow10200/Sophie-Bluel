/*** Fetch pour le login ***/

const login ='http://localhost:5678/api/users/login';


// Fonction pour gérer la soumission du formulaire
function handleLogin() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('pass');
  }

  // Obtenir les valeurs des champs
  const email = emailInput.value;
  const password = passwordInput.value;

  // Vérifier que les champs ne sont pas vides
  if (!email || !password) {
    console.error('Veuillez remplir tous les champs.');
    return;
  }

  // Données à envoyer dans la requête POST
  const connection = {
    email: email,
    password: password,
  };

  // Configuration de la requête
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(connection),
  };


fetch(login)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }
    // Analyser la réponse JSON
    return response.json();
    })
  .then(data => {
    // Manipuler les données reçues de l'API
    console.log(data);
    })
  .catch(error => {
  // Gérer les erreurs
  console.error('Erreur lors de la récupération des données:', error);
  });

  // Ajouter un gestionnaire d'événements sur la soumission du formulaire
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    handleLogin(); 
    });


