window.addEventListener('scroll', function() {
    let lebronImage = document.querySelector('.lebron-img');
    let scrollPosition = window.scrollY;

    // Scale the image based on scroll position
    let scaleValue = 1 + scrollPosition / 500; // Adjust this value to control speed of growth/shrinkage
    lebronImage.style.transform = `scale(${scaleValue})`;
});
