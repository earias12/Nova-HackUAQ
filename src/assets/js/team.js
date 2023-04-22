const editTeamInfo = document.getElementById("team-general-info");

let ArrayData = [
    {
        namePersona: "Evelyn Arias",
        picturePersona: "https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/330807534_1851098021935607_6073516753630995448_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0eI-TgrTmm4AX_du8yQ&_nc_ht=scontent-qro1-2.xx&oh=00_AfDse99Z68A48Xn9bpPOzg-poJq_2u7__tsriFQni2jx0w&oe=64494916",
        jobTitle: "Front-End NOVA"
    },
    {
        namePersona: "Manuel Ortiz",
        picturePersona: "https://scontent-qro1-2.xx.fbcdn.net/v/t1.6435-1/213326623_2848805958766668_4780990515785825217_n.jpg?stp=dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=MGBWnHniiBsAX9bYaev&_nc_ht=scontent-qro1-2.xx&oh=00_AfAGT0OGXY15Azi11ypdvEQ05D1AWjiHyj4ZppUYDs3NTQ&oe=646AF064",
        jobTitle: "FullStack NOVA"
    },
    {
        namePersona: "Pou",
        picturePersona: "https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-1/336643033_156810933593572_3452657110928802391_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=c_pUQj3UFfQAX9mMNys&_nc_ht=scontent-qro1-1.xx&oh=00_AfDh2z8BE8G6dSHfUhGQ6bcBZ09qOhsllZHhkCb-vNJAjw&oe=6447E76F",
        jobTitle: "SCRUM Master NOVA"
    },
    {
        namePersona: "Krishna Herrera",
        picturePersona: "https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-1/336643033_156810933593572_3452657110928802391_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=c_pUQj3UFfQAX9mMNys&_nc_ht=scontent-qro1-1.xx&oh=00_AfDh2z8BE8G6dSHfUhGQ6bcBZ09qOhsllZHhkCb-vNJAjw&oe=6447E76F",
        jobTitle: "UI Designer NOVA"
    },
    {
        namePersona: "Salvador Rojas",
        picturePersona: "https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-1/336643033_156810933593572_3452657110928802391_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=c_pUQj3UFfQAX9mMNys&_nc_ht=scontent-qro1-1.xx&oh=00_AfDh2z8BE8G6dSHfUhGQ6bcBZ09qOhsllZHhkCb-vNJAjw&oe=6447E76F",
        jobTitle: "Back-end NOVA"
    }
];

let numContratosTotales = ArrayData.length;

for (let index = 0; index < numContratosTotales; index++) {
    editTeamInfo.innerHTML += `
    <div class="col mb-4">
                    <div class="text-center"><img class="rounded mb-3 fit-cover" width="150" height="150" src="${ArrayData[index].picturePersona}">
                        <h5 class="fw-bold mb-0"><strong>${ArrayData[index].namePersona}</strong></h5>
                        <p class="text-muted mb-2">${ArrayData[index].jobTitle}</p>
                    </div>
                </div>
`;
}


