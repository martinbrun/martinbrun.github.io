// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
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
        toggleIcon.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        toggleIcon.textContent = '🌙';
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        
        // Update icon
        toggleIcon.textContent = isDark ? '☀️' : '🌙';
        
        // Save preference
        localStorage.setItem('darkMode', isDark);
    });
});