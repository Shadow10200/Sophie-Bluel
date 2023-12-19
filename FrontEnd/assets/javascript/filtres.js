/***Variables + Data type lier a HTML***/

var objets=document.querySelectorAll('[data-type="objets"]');
var appartements=document.querySelectorAll('[data-type="appartements"]');
var hôtelsrestaurants=document.querySelectorAll('[data-type="hôtels et restaurants"]');
var tous=document.querySelectorAll('[data-type="objets"], [data-type="appartements"], [data-type="hôtels et restaurants"]');

/***Activation des filtres au "clic"***/

hôtelsrestaurants.forEach(function(element) {
    element.addEventListener('click', function() {
        console.log('Élément "hôtels et restaurants" cliqué :', element);
    });
});


