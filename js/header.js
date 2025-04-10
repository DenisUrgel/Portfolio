let menuAccueil = document.getElementById('accueil_menu');
let menuApropos = document.getElementById('a_propos_menu');
let menuProjets = document.getElementById('projets_menu');
let menuVeille = document.getElementById('veille_menu');
let menuContact = document.getElementById('contact_menu');
let menuRealisation = document.getElementById('realisation_menu');

let lienAccueil = document.getElementById('lien_accueil_menu');
let lienApropos = document.getElementById('lien_a_propos_menu');
let lienProjets = document.getElementById('lien_projets_menu');
let lienVeille = document.getElementById('lien_veille_menu');
let lienContact = document.getElementById('lien_contact_menu');
let lienRealisation = document.getElementById('lien_realisation_menu');

// let menuBureau = document.getElementById('menu');

let menuMobile = document.getElementById('menu_mobile');

let burgerMobile = document.getElementById('mobile_burger');

let openMenu = true;
// menuMobile.style.display = "none";

burgerMobile.addEventListener('click', () => {
    if (openMenu == false) {
        menuMobile.style.height = "0";
        menuAccueil.style.height = "0";
        menuApropos.style.height = "0";
        menuProjets.style.height = "0";
        menuVeille.style.height = "0";
        menuContact.style.height = "0";
        menuRealisation.style.height = "0";

        menuMobile.style.fontSize = "0";
        menuAccueil.style.fontSize = "0";
        menuApropos.style.fontSize = "0";
        menuProjets.style.fontSize = "0";
        menuVeille.style.fontSize = "0";
        menuContact.style.fontSize = "0";
        menuRealisation.style.fontSize = "0";

        lienAccueil.style.padding = "0";
        lienApropos.style.padding = "0";
        lienProjets.style.padding = "0";
        lienVeille.style.padding = "0";
        lienContact.style.padding = "0";
        lienRealisation.style.padding = "0";

        openMenu = true;
    } else {
        menuMobile.style.height = "100%";
        menuAccueil.style.height = "100%";
        menuApropos.style.height = "100%";
        menuProjets.style.height = "100%";
        menuVeille.style.height = "100%";
        menuContact.style.height = "100%";
        menuRealisation.style.height = "100%";

        menuMobile.style.fontSize = "24px";
        menuAccueil.style.fontSize = "24px";
        menuApropos.style.fontSize = "24px";
        menuProjets.style.fontSize = "24px";
        menuVeille.style.fontSize = "24px";
        menuContact.style.fontSize = "24px";
        menuRealisation.style.fontSize = "24px";


        lienAccueil.style.padding = "10px";
        lienApropos.style.padding = "10px";
        lienProjets.style.padding = "10px";
        lienVeille.style.padding = "10px";
        lienContact.style.padding = "10px";
        lienRealisation.style.padding = "10px";

        openMenu = false;
    }

    let titre = document.getElementById("titre").textContent;

    switch (titre) {
        case 'Portfolio':
            lienAccueil.style.display = "none";
            break;
        case 'À Propos':
            lienApropos.style.display = "none";
            break;
        case 'Réalisations et Missions':
            lienRealisation.style.display = "none";
            break;
        case 'Projets':
            lienProjets.style.display = "none";
            break;
        case 'Veille Technologique':
            lienVeille.style.display = "none";
            break;
        case 'Me contacter':
            lienContact.style.display = "none";
            break;

        default:
            break;
    }
})
