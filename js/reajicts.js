// Fonction de validation générique
function validateField(inputid, regex, errorMessage) {
  const inputField = document.querySelector(inputid);
  const inputValue = inputField.value.trim();
  const errorSpan = inputField.parentElement.querySelector(".error");
  const successSpan = inputField.parentElement.querySelector(".succes");

  if (regex.test(inputValue)) {
      inputField.classList.remove("error");
      inputField.classList.add("success");
      errorSpan.style.display = "none";
      successSpan.style.display = "block";
  } else {
      inputField.classList.remove("success");
      inputField.classList.add("error");
      errorSpan.style.display = "block";
      successSpan.style.display = "none";
      errorSpan.textContent = errorMessage;
  }
}

// Écouter les événements "input" pour déclencher la validation à chaque saisie
document.getElementById("name").addEventListener("input", () => {
  validateField("full-name", /^[A-Za-z\s]{3,}$/, "the name have at least  3 caracteres.");
});

document.getElementById("email").addEventListener("input", () => {
  validateField("email", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/, "Invalide e-mail.");
});

document.getElementById("text").addEventListener("input", () => {
  validateField("cin", /^[A-Z]{2}\d{6}$/, "Incorrect CIN.");
});

document.getElementById("tel").addEventListener("input", () => {
  validateField("phone-number", /^+212\d{9}$|^\d{10}$/, "Invalide phone number.");
});

document.getElementById("password").addEventListener("input", () => {
  validateField("pack-name", /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/, "the password at least 8 caracteres.");
});