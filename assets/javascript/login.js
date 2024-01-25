/*** Fetch pour le login ***/

const login ='http://localhost:5678/api/users/login';

// Fonction pour vérifier si l'adresse e-mail est valide
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// Fonction pour gérer la soumission du formulaire
function handleLogin() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('pass');

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

  fetch(login)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }
    return response.json();
    })
  .then(data => {
    console.log(data);
    //regarder le mail et mdp correspod a un donner de data
    if (data.redirect) {
      // Si oui, vérifier les conditions pour accorder l'accès
      if (data.email === email && data.password === password) {
      // Si le courriel et le mot de passe correspondent, rediriger vers la page principale
        window.location.href = data.redirect;
      } else {
        console.error('Email ou mot de passe est incorrect.');
    if (data.redirect) {
      localStorage.setItem('verification', 'true');
      window.location.href = data.redirect;
    } else {
      console.error('La réponse ne contient pas d\'URL de redirection valide.');
      localStorage.setItem('verification', 'false');
    }
  }}})
  .catch(error => {
    console.error('Erreur lors de la récupération des données:', error);
  });
}

  // Ajouter un gestionnaire d'événements sur la soumission du formulaire
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); 
  handleLogin(); 
});

