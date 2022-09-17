var departament = parseInt(prompt("Dans quel département résidez-vous ?","49, 37 ou 75 "));
var reponse = "Vous habitez en région ";


switch (departament)
{
 case 49:
     reponse = "Vous habitez en région Pays de Loire"
 break;

 case 37:
    reponse = "Vous habitez en région Centre"
 break;

 case 75:
    reponse = "Vous habitez en région Ile de France"
 break;

 default:
   reponse ="Désolé je ne connais pas votre région.";
}
  

alert(reponse);