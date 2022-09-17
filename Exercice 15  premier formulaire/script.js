window.addEventListener("load",function(){
    document.getElementById("calculer").addEventListener("click", calculerX)
});


function calculerX() {
    var numero = parseFloat(document.getElementById("text1").value);
    var message;
    if (isNaN(numero)) {
        message = "Veuillez entrer un nombre";
    } else {
        var taux = parseFloat(document.getElementById("choix").value);
        var ttc = numero + (numero * taux / 100);
        ttc = ttc.toFixed(2);
        message = "Le montant TTC est de : " + ttc;
    }
    alert(message);
}






// function calculerX() {
//     var numero = parseFloat(document.getElementById("text1").value);
//     var message;
//     if (isNaN(numero)) {
//         message = "Veuillez entrer un nombre";
//     } else if () {
//         var ttc = numero + (numero * 0.07)
//         ttc = ttc.toFixed(2);
//         message = "Le montant TTC est de : " + ttc;
//     } else {
//         var ttc = numero + (numero * 0.2)
//         ttc = ttc.toFixed(2);
//         message = "Le montant TTC est de : " + ttc;
//     }
//     alert(message);
// }


