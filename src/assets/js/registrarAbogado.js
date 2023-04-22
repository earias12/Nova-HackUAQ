import { getLawyer, addLawyer } from "./firebase.js";

const form = document.getElementById("signup-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const nameUser = document.getElementById("name-signup");
const titleUser = document.getElementById("titulo-profesional");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const querySnapshotUsers = await getLawyer();
    querySnapshotUsers.forEach((doc) => {
        let dataUser = doc.data();

        if (dataUser.usuarioCorreo === email.value) {
            alert("Este correo ya está registrado");
        } else {
            addLawyer(nameUser.value, email.value, password.value, titleUser.value);
            alert("Usuario registrado");
        }
    });
});
