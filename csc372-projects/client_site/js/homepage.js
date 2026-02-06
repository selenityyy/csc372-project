// Selena Cabral, 2/6/2026
// This is a JavaScript file for the homepage of the website. The code below is for a typing animation for the welcome header, as well as smoother scrolling

// typing animation for the welcome header at the top of the screen
const welcomeHeader = "Welcome to the Asian Student Association Website!";
const headerElmt = document.getElementById('welcome-header');

var charIdx = 0;

// did use Claude AI to help write this function and the one below so that I could make a typing animation
// only used for certain parts
function typeWriter() {
    if (charIdx < welcomeHeader.length) {
        headerElmt.textContent += welcomeHeader.charAt(charIdx);
        charIdx++;
        setTimeout(typeWriter, 80);
    }
}

// starts the animation once page loads
window.addEventListener('load', typeWriter);

// let's make some smoother scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // this will prevent HTML's default behavior when going through pages

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
       
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }); 
});
