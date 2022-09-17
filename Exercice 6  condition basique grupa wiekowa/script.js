var age = prompt("Quel âge avez-vous ?");

var reponse;

if (age < 18 && age >= 12) {
    reponse = "Vous êtes un ado !";

} else if (age < 12 && age >= 0) {
    reponse = "Vous êtes un enfant !";

} else {
    reponse = "Vous êtes majeur !";
}


alert(reponse)

// document.getElementById("question").innerHTML = reponse;
