const textInput = document.querySelector("#text-input")
const charCounter = document.querySelector("#char-count")

textInput.addEventListener("input", () => {
  let charCount = textInput.value.length
  if (charCount < 50) {
    charCounter.style.color = "black";
    charCounter.innerText = `Character Count: ${charCount}/50`;
  } else {
    charCounter.style.color = "red";
    charCounter.innerText = `Character Count: 50/50`;
    textInput.setAttribute("maxlength", "50")
  }
})
