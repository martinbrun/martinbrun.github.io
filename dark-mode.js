// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const sol = document.createElement("img");
    sol.src = "img/sol.png"; 
    sol.style.height = "1em";
    sol.style.transform = "scale(1.5)";
    sol.style.verticalAlign = "top";
    sol.style.horizontalAlign = "center";

    const luna = document.createElement("img");
    luna.src = "img/luna-cuneo.png"; 
    luna.style.height = "1em";
    luna.style.transform = "scale(1.5)";
    luna.style.verticalAlign = "top";
    luna.style.horizontalAlign = "center";
    
    if (!darkModeToggle) {
        console.error('Dark mode toggle button not found!');
        return;
    }
    
    const toggleIcon = darkModeToggle.querySelector('.toggle-icon');
    const body = document.body;

    // Check for saved dark mode preference or default to light mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply the saved theme
    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleIcon.textContent = ""; // clear existing content
        toggleIcon.appendChild(sol);
    } else {
        body.classList.remove('dark-mode');
        toggleIcon.textContent = ""; // clear existing content
        toggleIcon.appendChild(luna);
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        
        // Update icon
        toggleIcon.textContent = "";
        toggleIcon.appendChild(isDark ? sol : luna);
        // Update
        // Save preference
        localStorage.setItem('darkMode', isDark);
    });
});