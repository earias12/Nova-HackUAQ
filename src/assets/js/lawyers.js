import { getLawyer } from "./firebase.js";

const editLawyers = document.getElementById("lawyers-content");

const querySnapshotLawyers = await getLawyer();

querySnapshotLawyers.forEach((doc) => {
    let dataLawyer = doc.data();

    editLawyers.innerHTML += `
    <div class="col mb-4">
                    <div>
                        <a href="#"><img class="rounded img-fluid shadow w-100 fit-cover" src="assets/img/stable-diffusion-xl.jpeg" style="height: 250px;"></a>
                        <div class="py-4">
                            <span class="badge bg-primary">${dataLawyer.usuarioNombre}</span> <a href="./contacts.html?name=${dataLawyer.usuarioNombre}&email=${dataLawyer.usuarioCorreo}"><span class="badge bg-warning mb-2">Contáctame <i class="far fa-comments" style="font-size: 12px;"></i></span></a>
                            <h4 class="fw-bold">${(dataLawyer.usuarioTitulo).toUpperCase()}</h4>
                            <p class="text-muted">Como abogado penalista, mi trabajo se centra en representar a personas acusadas de cometer delitos. Para desempeñar mi papel, tengo una comprensión profunda del derecho penal y de los procedimientos judiciales.</p>
                        </div>
                    </div>
                </div>
                
`;
});