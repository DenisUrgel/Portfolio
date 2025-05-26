let menuAccueil = document.getElementById('accueil_menu');
let menuBts = document.getElementById('bts_menu');
let menuEcoleEntreprise = document.getElementById('ecole_entreprise_menu');
let menuProjets = document.getElementById('projets_menu');
let menuVeille = document.getElementById('veille_menu');
let menuContact = document.getElementById('contact_menu');
let menuRealisation = document.getElementById('realisation_menu');

let lienAccueil = document.getElementById('lien_accueil_menu');
let lienBTS = document.getElementById('lien_bts_menu');
let lienEcoleEntreprise = document.getElementById('lien_ecole_entreprise_menu');
let lienProjets = document.getElementById('lien_projets_menu');
let lienVeille = document.getElementById('lien_veille_menu');
let lienContact = document.getElementById('lien_contact_menu');
let lienRealisation = document.getElementById('lien_realisation_menu');


let menuMobile = document.getElementById('menu_mobile');

let burgerMobile = document.getElementById('mobile_burger');

let openMenu = true;

burgerMobile.addEventListener('click', () => {
    if (openMenu == false) {
        menuMobile.style.height = "0";
        menuAccueil.style.height = "0";
        menuBts.style.height = "0";
        menuEcoleEntreprise.style.height = "0";
        menuProjets.style.height = "0";
        menuVeille.style.height = "0";
        menuContact.style.height = "0";
        menuRealisation.style.height = "0";

        menuMobile.style.fontSize = "0";
        menuAccueil.style.fontSize = "0";
        menuBts.style.fontSize = "0";
        menuEcoleEntreprise.style.fontSize = "0";
        menuProjets.style.fontSize = "0";
        menuVeille.style.fontSize = "0";
        menuContact.style.fontSize = "0";
        menuRealisation.style.fontSize = "0";

        lienAccueil.style.padding = "0";
        lienBTS.style.padding = "0";
        lienEcoleEntreprise.style.padding = "0";
        lienProjets.style.padding = "0";
        lienVeille.style.padding = "0";
        lienContact.style.padding = "0";
        lienRealisation.style.padding = "0";

        openMenu = true;
    } else {
        menuMobile.style.height = "100%";
        menuAccueil.style.height = "100%";
        menuBts.style.height = "100%";
        menuEcoleEntreprise.style.height = "100%";
        menuProjets.style.height = "100%";
        menuVeille.style.height = "100%";
        menuContact.style.height = "100%";
        menuRealisation.style.height = "100%";

        menuMobile.style.fontSize = "15px";
        menuAccueil.style.fontSize = "15px";
        menuBts.style.fontSize = "15px";
        menuEcoleEntreprise.style.fontSize = "15px";
        menuProjets.style.fontSize = "15px";
        menuVeille.style.fontSize = "15px";
        menuContact.style.fontSize = "15px";
        menuRealisation.style.fontSize = "15px";


        lienAccueil.style.padding = "10px";
        lienBTS.style.padding = "10px";
        lienEcoleEntreprise.style.padding = "10px";
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
        case 'BTS SIO':
            lienBTS.style.display = "none";
            break;
        case 'École et Entreprise':
            lienEcoleEntreprise.style.display = "none";
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
