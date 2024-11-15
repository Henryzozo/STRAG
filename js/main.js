document.addEventListener('DOMContentLoaded', () => {
    // Validation du formulaire de contact
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (!email.includes('@')) {
                alert("Veuillez entrer une adresse e-mail valide.");
                event.preventDefault(); // Empêche l'envoi du formulaire
            } else if (message.trim() === '') {
                alert("Le message ne peut pas être vide.");
                event.preventDefault();
            }
        });
    }

    // Animation des icônes de réseaux sociaux
    const socialIcons = document.querySelectorAll('.social-links img');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });

    // Retour en haut de la page
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Vérification du bon chargement du script
    console.log("JavaScript est bien chargé !");
});
