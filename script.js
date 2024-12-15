// Load Lottie.js script



function loadLottieScript() {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.9.4/lottie.min.js';
    script.async = true;

    script.onload = function() {
        // Once the script is loaded, initialize the Lottie animation
        showLottieAnimation();
    };

    document.head.appendChild(script);
}

// Initialize Lottie animation
function showLottieAnimation() {
    const animationContainer = document.getElementById('lottie-container');
    
    if (animationContainer) {
        const animation = lottie.loadAnimation({
            container: animationContainer, // Container to render animation
            renderer: 'svg',                // Renderer type (SVG is most commonly used)
            loop: true,                     // Loop the animation
            autoplay: true,                 // Autoplay animation
            path: 'assets/hero-animation.json'  // Path to your Lottie JSON file
        });
    } else {
        console.error('Animation container not found!');
    }

}

// Call the loadLottieScript function to load the Lottie library
loadLottieScript();

AOS.init();

function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    const icon = document.querySelector('.menu-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }


// JavaScript for handling toggles
function showContent(contentType) {
    // Get all buttons and remove the active class
    const buttons = document.querySelectorAll('.about-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Add the active class to the clicked button
    const activeButton = document.getElementById(`toggle-${contentType}`);
    activeButton.classList.add('active');

    // Get all content items and hide them
    const contentItems = document.querySelectorAll('.about-content-item');
    contentItems.forEach(item => item.classList.add('hidden'));

    // Show the selected content
    const activeContent = document.getElementById(`${contentType}-content`);
    activeContent.classList.remove('hidden');
}
