// Handle page refresh
window.addEventListener('load', function() {
    // Check if this is a page refresh
    if (performance.navigation.type === 1) {
        window.location.replace('index.html');
    }
});

// Handle back button
window.addEventListener('popstate', function() {
    window.location.replace('index.html');
});

// Handle navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
        // Future navigation logic will go here
    });
}); 