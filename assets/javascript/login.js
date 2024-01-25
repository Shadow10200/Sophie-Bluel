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



