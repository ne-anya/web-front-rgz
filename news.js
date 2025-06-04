function toggleNews(btn) {
  const newsText = btn.nextElementSibling;
  if (newsText.style.display === "none" || newsText.style.display === "") {
    newsText.style.display = "block";
    btn.textContent = "Скрыть";
  } else {
    newsText.style.display = "none";
    btn.textContent = "Показать полностью";
  }
}