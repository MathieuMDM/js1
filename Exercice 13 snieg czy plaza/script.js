function change(){
    this.src = "img/neige.jpg";	
    document.getElementById("text").innerHTML = "Quittez la neige !";
}
function retour(){
    this.src = "img/plage.jpg";		
    document.getElementById("text").innerHTML = "Survolez l'image...";
}

window.addEventListener("load",function(){
    document.getElementById("img").addEventListener("mouseover",change);
    document.getElementById("img").addEventListener("mouseleave",retour);
});
	