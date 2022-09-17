window.addEventListener("load", function () {
    document.getElementById("envoyer").addEventListener("click", bienvenue);
});

function bienvenue() {
    const nomX = document.getElementById("nom").value;
    const prenomX = document.getElementById("prenom").value;
    if (nomX != "" && prenomX != "") {
        document.getElementById("repo").innerHTML = "Bonjour " + prenomX + " " + nomX; 
    } else {        
        alert("Les données sont incorrectes");
    }
}