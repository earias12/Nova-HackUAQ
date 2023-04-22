import { getMembers } from "./firebase.js";

const editTeamInfo = document.getElementById("team-general-info");


const querySnapshot = await getMembers();
querySnapshot.forEach((doc) => {
    let dataMember = doc.data();

    editTeamInfo.innerHTML += `
    <div class="col mb-4">
                    <div class="text-center"><img class="rounded mb-3 fit-cover" width="150" height="150" src="${dataMember.fotoMiembro}">
                        <h5 class="fw-bold mb-0"><strong>${dataMember.nombreMiembro}</strong></h5>
                        <p class="text-muted mb-2">${dataMember.rolMiembro}</p>
                    </div>
                </div>
`;
});

