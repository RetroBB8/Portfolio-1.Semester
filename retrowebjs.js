// Dette script er brugt fra et gammelt projekt og er lavet af Emil S. Nielsen. Jeg har fået lov til at bruge det fra ham
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
navUL.classList.toggle('show');
    });