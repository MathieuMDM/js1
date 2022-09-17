window.addEventListener("load", function () {
    document.getElementById("text3").addEventListener("click", clic);
});


function clic() {
    document.getElementById("text1").value = "";
    document.getElementById("text2").select();
}
