const heartIcons = document.querySelectorAll(".favorite-icon");

function toggleHeartFill(heartButton) {
  if (heartButton.classList.toggle("filled")) {
    heartButton.innerHTML = "&#10084;"
  } else {
    heartButton.innerHTML = "&#9825;"
  };
  
}

function addClickListener(icon) {
  icon.addEventListener("click", () => toggleHeartFill(icon));
}

heartIcons.forEach(addClickListener);
