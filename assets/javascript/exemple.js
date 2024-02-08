const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("test")

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      sessionStorage.setItem("token", data.token);
      window.location.href = "index.html";
      console.log("page principale");
    } else {
      errorMessage.textContent = "Email ou Password incorrect";
      console.log("erreur de saisie")
    }
    } catch (error) {
    console.error("Login error:", error);
    errorMessage.textContent =
      "Une erreur est survenue (serveur hors ligne ?)";
      console.log("erreur")
  }
  });
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
    (localStorage.setItem('verification'), 'true');
    window.location.href = data.redirect;
  } else if
    (localStorage.setItem('verification'), 'fault');{
    console.error('La réponse ne contient pas d\'URL de redirection valide.');
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