// theme sombre/ theme clair
// 1. On cible le bouton HTML grâce à son identifiant
const btnTheme = document.getElementById('boutonTheme');
// --- ÉTAPE A : AU CHARGEMENT DE LA PAGE ---
// On regarde si le navigateur a déjà enregistré le "themeClair" auparavant
const choixEnregistre = localStorage.getItem('theme');
// Si la mémoire dit 'actif', on ajoute tout de suite la classe au body
if (choixEnregistre === 'actif') {
    document.body.classList.add('themeClair');
}
// 2. On écoute le clic de l'utilisateur sur ce bouton
btnTheme.addEventListener('click', () => {
    /* 3. La fonction toggle ajoute la classe 'themeClair' au body s'il ne l'a pas,
          ou la retire s'il l'a déjà. */
    document.body.classList.toggle('themeClair');
    // --- ÉTAPE B : APRÈS LE TOGGLE (SAUVEGARDE) ---
    // On vérifie si le body a la classe après le clic
    if (document.body.classList.contains('themeClair')) {
        // Si oui, on écrit dans la mémoire du navigateur que le mode clair est actif
        localStorage.setItem('theme', 'actif');
    } else {
        // Si non, on écrit que le mode clair est désactivé
        localStorage.setItem('theme', 'desactive');
    }
});


//animation des barres de competences au scroll
// Récupère toutes les barres de progression de la page
const barresCompetences = document.querySelectorAll('.progress_bar');
// Crée un observateur qui surveille quand chaque barre devient visible à l'écran
const observerCompetences = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // entry.isIntersecting = true dès que l'élément entre dans la zone visible
        if (entry.isIntersecting) {
            const barre = entry.target;
            const pourcent = barre.dataset.pourcent; // lit la valeur data-pourcent="85"
            // Applique la largeur cible : la transition CSS anime le remplissage
            barre.style.width = pourcent + '%';
            // Arrête d'observer cette barre : l'animation ne se joue qu'une seule fois
            observerCompetences.unobserve(barre);
        }
    });
}, { threshold: 0.3 }); // se déclenche dès que 30% de la barre est visible
// Demande à l'observateur de surveiller chaque barre de la page
barresCompetences.forEach(barre => observerCompetences.observe(barre));




// bouton vers le haut
// Récupère le bouton dans la page via son id
const boutonRetourHaut = document.getElementById('boutonHaut');
// À chaque scroll : affiche le bouton si on a défilé de plus de 200px, sinon le cache
window.addEventListener('scroll', () => {
    boutonRetourHaut.classList.toggle('visible', window.scrollY > 500);
});
// Au clic sur le bouton : remonte en haut de la page avec une animation fluide
boutonRetourHaut.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



// menu hamburger
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menu = document.getElementById('menu_inter');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});
// Ferme le menu automatiquement quand on clique sur un lien
document.querySelectorAll('#menu_inter .menu').forEach(lien => {
    lien.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        menu.classList.remove('active');
    });
});