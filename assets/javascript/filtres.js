/*** Fetch pour les filtres ***/
const filtres ='http://localhost:5678/api/categories';

fetch(filtres)
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
  
  /*** Variables + Data type lier a HTML ***/

var objets=document.querySelectorAll('[data-type="Objets"]');
var appartements=document.querySelectorAll('[data-type="Appartements"]');
var hotelsrestaurants=document.querySelectorAll('[data-type="Hôtels & restaurants"]');
var tous=document.querySelectorAll('[data-type="Objets"], [data-type="Appartements"], [data-type="Hôtels & restaurants"]');

/*** Active/Desactive clique sur les filtres ***/ 
   /*** Fitres les images avec hidden ***/
   
document.getElementById('tous').addEventListener('click', function() {
    console.log('Élément "hotels et restaurants" cliqué :',this);
    document.querySelectorAll('.encadrements-filtres').forEach(function(div){
        console.log('tous',div)
        div.classList.remove('active')

    })
    this.classList.add('active')

    document.querySelectorAll('.gallery figure').forEach(function(figure) {
        figure.classList.remove('hidden');
        
    });
});

document.getElementById('objets').addEventListener('click', function() {
    console.log('Élément "hotels et restaurants" cliqué :',this);
    document.querySelectorAll('.encadrements-filtres').forEach(function(div){
    console.log('objets',div)
    div.classList.remove('active')

    })
    this.classList.add('active')

    document.querySelectorAll('.gallery figure').forEach(function(figure) {
        if (!figure.hasAttribute('data-type') || figure.getAttribute('data-type') !== 'Objets') {
            figure.classList.add('hidden');
        } else {
        figure.classList.remove('hidden');
        }
    });
});


document.getElementById('appartements').addEventListener('click', function() {
    console.log('Élément "hotels et restaurants" cliqué :',this);
    document.querySelectorAll('.encadrements-filtres').forEach(function(div){
    console.log('appartements',div)
    div.classList.remove('active')

    })
    this.classList.add('active')

    document.querySelectorAll('.gallery figure').forEach(function(figure) {
        if (!figure.hasAttribute('data-type') || figure.getAttribute('data-type') !== 'Appartements') {
            figure.classList.add('hidden');
        } else {
        figure.classList.remove('hidden');
        }
    });
});

    
document.getElementById('hotelsRestaurants').addEventListener('click', function() {
    console.log('Élément "hotels et restaurants" cliqué :',this);
    document.querySelectorAll('.encadrements-filtres').forEach(function(div){
    console.log('hotelsRestaurants',div)
    div.classList.remove('active')

    })
    this.classList.add('active')

    document.querySelectorAll('.gallery figure').forEach(function(figure) {
        if (!figure.hasAttribute('data-type') || figure.getAttribute('data-type') !== 'Hôtels & restaurants') {
            figure.classList.add('hidden');
        } else {
        figure.classList.remove('hidden');
        }
    });
});

 
    

