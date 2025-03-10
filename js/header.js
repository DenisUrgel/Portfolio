let menuAccueil = document.getElementById('accueil_menu');
let menuApropos = document.getElementById('a_propos_menu');
let menuProjets = document.getElementById('projets_menu');
let menuVeille = document.getElementById('veille_menu');

let lienAccueil = document.getElementById('lien_accueil_menu');
let lienApropos = document.getElementById('lien_a_propos_menu');
let lienProjets = document.getElementById('lien_projets_menu');
let lienVeille = document.getElementById('lien_veille_menu');

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

        lienAccueil.style.padding = "0";
        lienApropos.style.padding = "0";
        lienProjets.style.padding = "0";
        lienVeille.style.padding = "0";

        openMenu = true;
    } else {
        menuMobile.style.height = "100%";
        menuAccueil.style.height = "100%";
        menuApropos.style.height = "100%";
        menuProjets.style.height = "100%";
        menuVeille.style.height = "100%";

        lienAccueil.style.padding = "10px";
        lienApropos.style.padding = "10px";
        lienProjets.style.padding = "10px";
        lienVeille.style.padding = "10px";

        openMenu = false;
    }
})

// burgerMobile.addEventListener('click', () => {
//     if (openMenu == false) {
//         menuMobile.style.display = "none";
//         openMenu = true;
//     } else {
//         menuMobile.style.display = "flex";
//         openMenu = false;
//     }
// })