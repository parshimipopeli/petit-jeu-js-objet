console.log('hello');




// const voiture = {
//     marque : "clio",
//     version : "4",
//     avancer : function () {
// return "cool" + " c' est une " + this. marque;
//     }
// };
// console.log(voiture);
// alert(voiture.avancer());

// //constructeur js
// let Voiture = function() {
//     this.fabricant = "renault";
//     this.modele = "clio";
//     this.annee = 2004;
//     this.propriétaire = "moi";
//     this.claxonner = function(){
//         return 'BEEP BEEP';
//     }
// };
// Voiture.prototype.couleur = "bleue";
//
//
//
// let voiture1 = new Voiture("Mazda", "Miata", 1993,"moi");
// let voiture2 = new Voiture("Audi", "A3", 2005,"moi");
//
// console.log(voiture1.claxonner());
//
//
let personnages = function () {
    this.attaque = function(puissance , victime){
    victime.vie -= puissance;
    };
    this.vie = 100;

};
personnages.prototype = vie=0;
let thor = new personnages();
let superman = new personnages();
alert("superman à "+superman.vie+" de vie");
alert("thor à "+thor.vie+" de vie");

thor.attaque(100,superman);

alert("superman à "+superman.vie+" de vie");
