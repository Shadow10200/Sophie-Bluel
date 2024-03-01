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
    console.log('Élément "objets" "appartements" "hotelsRestaurants" cliqué :',this);
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
    console.log('Élément "objets" :',this);
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
    console.log('appartements" cliqué :',this);
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
    console.log('Élément "hotelsRestaurants :',this);
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
//***Au moment de la connection***//
//creer un fonction qui va aller voir le local storage 
//si imformation personne connecter afficher barre noir et modifier et faire disparaitre les filtres
const  verifConnection = function () {
  console.log(sessionStorage.getItem('token'))
  if (sessionStorage.getItem('token') !== null && sessionStorage.getItem('token') !== '') {
      const visible = document.querySelectorAll('.visible');
      visible.forEach((item)=>{
        item.style.display = 'inline-flex';
      })    
      const cacher = document.querySelectorAll('.cacher');
      cacher.forEach((item)=>{
        item.style.display = 'none';
        console.log('test')
      })  
  }
};
verifConnection()
console.log('test1')

//Bouton déconnection
const deconnexion = document.getElementById('deconnection');
deconnection.addEventListener('click', function() {
  if (sessionStorage.removeItem('token') !== null && sessionStorage.removeItem('token') !== '') {
    const visible = document.querySelectorAll('.visible');
    visible.forEach(item => {
        item.style.display = 'none';
    });
    const cacher = document.querySelectorAll('.cacher');
    cacher.forEach(item => {
        item.style.display = 'flex';
    });
  }  
});

//***Petite fenètre***//
//***Galerie photo
//Ouverture de la petite fenètre galerie-photo au clic sur modifier
const modifier = document.getElementById('modifier');
const galeriePhoto = document.querySelector('#galerie-photo');

modifier.addEventListener('click', function() {
  galeriePhoto.style.display='block';
  console.log('test')
});

//Ajout miniature images dans galerie photo via APi(ne fonctionne pas pour l'instant)
const APIminiature ='http://localhost:5678/api/works';
const miniature = document.getElementById('miniature');

fetch(APIminiature)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    miniature.src = data.url; 
    miniature.alt = data.description;
    console.log(data);
  })
  .catch(error => {
  console.error('Erreur lors de la récupération des données:', error);
  });

//Ouveture de la petite fenetre ajouter photo au clic sur bouton ajouter  
const ajouter =document.querySelector('.ajouter')
ajouter.addEventListener('click', function() {
  galeriePhoto.style.display ='none';
  ajouterPhoto.style.display='block'
  console.log('test3')
});

//***Galerie photo et Ajouter photo  
//Fermeture de petite fenètre sur la croix 
const ajouterPhoto = document.querySelector('#ajouter-photo');
const croix1 = document.getElementById('croix1');
const croix2 = document.getElementById('croix2');
croix1.addEventListener('click', fermerFenetre);
croix2.addEventListener('click', fermerFenetre);


function fermerFenetre() {
  galeriePhoto.style.display ='none';
  ajouterPhoto.style.display='none';
  console.log('test4')
};

//***Ajouter photo
//Retour sur galerie photo au clic sur la flèche

const fleche =document.getElementById('fleche')
fleche.addEventListener('click', function() {
  galeriePhoto.style.display ='block';
  ajouterPhoto.style.display='none';
  console.log('test5')
});

//API pour ajouter photo 
const formulaire = 'http://localhost:5678/api/works'
const formulairePhoto = getElementById('formulaire')













  

 
    

