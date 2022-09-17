var btn = document.querySelector('input');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Vous me cliquez') {
    btn.value = 'Youpi ça fonctionne!';
    txt.textContent = 'Youpi ça fonctionne!';
  }
}