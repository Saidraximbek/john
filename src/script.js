
const burgerBtn = document.getElementById('burgerBtn');
const menu = document.getElementById('menu');

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden'); 
});

document.addEventListener('click', (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsideButton = burgerBtn.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideButton) {
    menu.classList.add('hidden');
  }
});
