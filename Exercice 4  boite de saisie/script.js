const nom = prompt("Quel est votre nom ?");
const prenom = prompt("Quel est votre prénom ?")

if (nom) {
    alert("Vous vous appelez " + prenom + " " + nom );
} else {
    alert("Vous avez annulé une tâche de programme ");
}