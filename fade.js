//MARTIN BRUN WEBSITE. TOP FADE
//NOVEMBER 2026

//SCROLL
function updateFade() {
    document.body.classList.toggle('scrolled', window.scrollY > 0);
}

window.addEventListener('scroll', updateFade, {passive: true});
updateFade();
