document.getElementById("year").textContent = new Date().getFullYear();

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulário de demonstração. Depois podemos ligá-lo ao email ou WhatsApp.");
  });
}
