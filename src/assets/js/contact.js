const keyValues = window.location.search;

const urlParams = new URLSearchParams(keyValues);

const param = urlParams.get('name');
const paramMail = urlParams.get('email');

const editName = document.getElementById("change-name");
const editEmail = document.getElementById("change-email");

editName.innerHTML = `<h2 class="fw-bold">¡Hola, soy ${param}!</h2>`
editEmail.innerHTML = `${paramMail}`
