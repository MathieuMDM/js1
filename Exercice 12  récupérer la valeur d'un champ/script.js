window.addEventListener("load",function(){
  document.getElementById("check").addEventListener("click",function(){
      var nombre = parseFloat(document.getElementById("add").value);
      if(isNaN(nombre)){
          alert("Veuillez entrer un nombre");
      }else{
          alert("La valeur saisie est" + " " + nombre);
      }
  });
});




