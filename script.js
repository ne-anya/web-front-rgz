function toggleMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('sideMenu');
  burger.classList.toggle('change');
  menu.classList.toggle('open');
}
document.getElementById('back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scroll({ top: 0, behavior: 'smooth' });
});
