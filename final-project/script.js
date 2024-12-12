window.addEventListener('scroll', function() {
    let lebronImage = document.querySelector('.lebron-img');
    let scrollPosition = window.scrollY;

    // Define the maximum scroll position to stop the zoom effect
    let maxScroll = window.innerHeight; // Adjust this value to match the end of your first page
    let scaleValue;

    if (scrollPosition <= maxScroll) {
        // Scale the image based on scroll position
        scaleValue = 1 + scrollPosition / 500; // Adjust this value to control speed of growth/shrinkage
    } else {
        // Stop the zoom effect at the maximum scale
        scaleValue = 1 + maxScroll / 100;
    }

    // Set transform-origin to center-center
    lebronImage.style.transformOrigin = 'bottom center';
    lebronImage.style.transform = `scale(${scaleValue})`;
});
