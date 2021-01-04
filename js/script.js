// CONCERNE L'APPARITION / DISPARITION DU MENU LORSQUE L'ON 
// CLIQUE SUR LE BOUTON EN HAUT A GAUCHE

const navlinks = document.getElementById("navlinks");
const navButton = document.getElementById("deploy");

const triggerNavbar = () => {
    if(navlinks.classList.contains("invisible")) {
        navlinks.classList.remove("invisible");
        invisible = false;
    }
    else {
        navlinks.classList.add("invisible");
        invisible = true;
    }
}

navButton.addEventListener('click', triggerNavbar);