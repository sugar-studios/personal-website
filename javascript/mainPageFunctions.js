function Typer() {
    const text = "Hello There!";
    const animationSpeed = 50;

    const typingAnimation = document.getElementById("introText");

    let i = 0;
    function typeText() {
        if (i < text.length) {
        typingAnimation.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, animationSpeed);
        }
    }

    typeText();
}


function SlideAnimations() {
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("card2")) {
                    entry.target.classList.add("slide-in-from-left");
                } else if (entry.target.classList.contains("card")){
                    entry.target.classList.add("slide-in-from-right");
                } else {
                    entry.target.classList.add("slide-in-from-bottom");
                }
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshold: 1 }; 

    const elements = document.querySelectorAll('.card, .card2, .card3');
    elements.forEach(el => {
        observer.observe(el, options);
    });
}