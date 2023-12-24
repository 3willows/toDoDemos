function checkPopupStatus() {
  const popupShown = localStorage.getItem('popupShown');
  if (!popupShown) {
    showPopup();
    localStorage.setItem('popupShown', 'true');
  }
}

function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Call checkPopupStatus function when the page loads
window.onload = checkPopupStatus;
