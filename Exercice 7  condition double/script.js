var age = prompt("Quel âge avez-vous ?");
var sexe = confirm("Etes-vous un homme?");


var reponse;
if (age > 18 && sexe) {
    reponse = "Bienvenue !";
} else {
    reponse = "Désolé, cette page est réservée aux hommes majeurs!"; }


document.getElementById("question").innerHTML = "<h2>" +  reponse + "<h2>";











