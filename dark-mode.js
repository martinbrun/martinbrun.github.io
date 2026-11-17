//MARTIN BRUN WEBSITE. THEME
//NOVEMBER 2026

//STORAGE
function readTheme() {
    try {
        return localStorage.getItem('darkMode');
    } catch (e) {
        return null;
    }
}

function saveTheme(isDark) {
    try {
        localStorage.setItem('darkMode', isDark);
    } catch (e) {
        return;
    }
}

//APPLY
if (readTheme() !== 'false') {
    document.body.classList.add('dark-mode');
}

//TOGGLE
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('dark-mode-toggle');
    const icon = button.querySelector('.toggle-icon');

    function showIcon() {
        const isDark = document.body.classList.contains('dark-mode');
        icon.src = isDark ? 'img/sol.png' : 'img/luna.png';
        button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    showIcon();
    button.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        saveTheme(document.body.classList.contains('dark-mode'));
        showIcon();
    });
});
