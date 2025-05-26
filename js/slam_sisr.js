let btnSisr = document.getElementById('btn_sisr');
let btnSlam = document.getElementById('btn_slam');

let infoSisr = document.getElementById('plus_sisr');
let infoSlam = document.getElementById('plus_slam');

let display = false;

infoSlam.style.height = '0';
infoSlam.style.fontSize = '0';
infoSisr.style.height = '0';
infoSisr.style.fontSize = '0';

btnSlam.addEventListener('click', () => {
    console.log('test');
    if (!display) {
        infoSlam.style.height = '60%';
        infoSlam.style.fontSize = '18px';
        btnSlam.innerText = 'Réduire';
        display = true;
    } else {
        infoSlam.style.height = '0';
        infoSlam.style.fontSize = '0';
        btnSlam.innerText = 'Plus de détails';
        display = false;
    }
})

btnSisr.addEventListener('click', () => {
    console.log('test');
    if (!display) {
        infoSisr.style.height = '60%';
        infoSisr.style.fontSize = '18px';
        btnSisr.innerText = 'Réduire';
        display = true;
    } else {
        infoSisr.style.height = '0';
        infoSisr.style.fontSize = '0';
        btnSisr.innerText = 'Plus de détails';
        display = false;
    }
})