// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYDVKJm843NzLI98DKa5-cegqw6VnkdWk",
    authDomain: "tupu-86fcc.firebaseapp.com",
    projectId: "tupu-86fcc",
    storageBucket: "tupu-86fcc.appspot.com",
    messagingSenderId: "522793879122",
    appId: "1:522793879122:web:97e1e9eed385b34ab4018b",
    measurementId: "G-75M74687P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const getMembers = () => getDocs(collection(db, "equipo"));
export const getDocuments = () => getDocs(collection(db, "contratos"));
export const getUsers = () => getDocs(collection(db, "usuarios"));
export const addUser = (userN, userE, userP, userT ) => addDoc(collection(db, "usuarios"), {usuarioCorreo: userE, usuarioPassword: userP, usuarioNombre: userN, usuarioTitulo: userT});
export const getLawyer = () => getDocs(collection(db, "abogados"));
export const addLawyer = (userN, userE, userP, userT ) => addDoc(collection(db, "abogados"), {usuarioCorreo: userE, usuarioPassword: userP, usuarioNombre: userN, usuarioTitulo: userT});