// Basic JavaScript for HTML Crash Course

console.log("Welcome to HTML Crash Course!");

// Simple function to change the header color on click
document.querySelector('h1').addEventListener('click', function() {
    this.style.color = this.style.color === 'blue' ? '#4CAF50' : 'blue';
});

// Alert on page load
window.addEventListener('load', function() {
    alert('Page loaded successfully!');
});