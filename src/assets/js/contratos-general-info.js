const editContratosInfo = document.getElementById("contratos-general-info");

let ArrayDatos = [{
        namePersona: "Evelyn",
        picturePersona: "https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/330807534_1851098021935607_6073516753630995448_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0eI-TgrTmm4AX_du8yQ&_nc_ht=scontent-qro1-2.xx&oh=00_AfDse99Z68A48Xn9bpPOzg-poJq_2u7__tsriFQni2jx0w&oe=64494916",
        titleContrato: "Contrato Arrendamiento",
        jobTitle: "Software Engineer Student",


    },
    {
        namePersona: "Manuel",
        picturePersona: "https://scontent-qro1-2.xx.fbcdn.net/v/t1.6435-1/213326623_2848805958766668_4780990515785825217_n.jpg?stp=dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=MGBWnHniiBsAX9bYaev&_nc_ht=scontent-qro1-2.xx&oh=00_AfAGT0OGXY15Azi11ypdvEQ05D1AWjiHyj4ZppUYDs3NTQ&oe=646AF064",
        titleContrato: "Contrato Laboral",
        jobTitle: "Software Engineer"
    },
    {
        namePersona: "Pou",
        picturePersona: "https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-1/336643033_156810933593572_3452657110928802391_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=c_pUQj3UFfQAX9mMNys&_nc_ht=scontent-qro1-1.xx&oh=00_AfDh2z8BE8G6dSHfUhGQ6bcBZ09qOhsllZHhkCb-vNJAjw&oe=6447E76F",
        titleContrato: "Contrato CompraVenta",
        jobTitle: "Software Engineer Student"
    }
];

let numContratosTotales = ArrayDatos.length;

for (let index = 0; index < numContratosTotales; index++) {
    editContratosInfo.innerHTML += `
    <div class="col">
                    <div class="card"><img class="img-fluid card-img-top w-100 d-block border rounded-0 border-0 d-xl-flex align-items-xl-center fit-cover" style="height: 200px;" src="assets/img/arrendamiento.jpg">
                        <div class="card-body p-4">
                            <p class="text-primary card-text mb-0" style="font-weight: bold;">${ArrayDatos[index].titleContrato}</p>
                            <h4 class="card-title">Lorem libero donec</h4>
                            <p class="card-text" style="color: rgb(0,0,0);"><span style="color: var(--tw-prose-body); background-color: rgba(68,70,84,var(--tw-bg-opacity));">El contrato de arrendamiento se utiliza para establecer y proteger los derechos y obligaciones del propietario y del inquilino durante el alquiler de una propiedad.</span></p>
                            <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="${ArrayDatos[index].picturePersona}">
                                <div>
                                    <p class="fw-bold mb-0" style="color: rgb(0,0,0);">${ArrayDatos[index].namePersona}</p>
                                    <p class="text-muted mb-0">${ArrayDatos[index].jobTitle}</p>
                                </div>
                                <div class="text-center d-xl-flex justify-content-xl-center" style="padding: 18px;margin: 3px;text-align: center;position: sticky;"><button class="btn btn-primary text-center d-xl-flex justify-content-xl-center" type="button" style="text-align: center;margin: -3px;width: 93.633px;background: rgb(54,99,244);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" style="font-size: 26px;">
                                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                                <path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"></path>
                                </svg></button></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
`;
}