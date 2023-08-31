function Typer() {
    const messages = [
        "Hello There!",
        "¿que tal?",
        ":)"
    ];
    const animationSpeed = 40;
    const pauseDuration = 2500; 

    const typingAnimation = document.getElementById("introText");

    let currentMessageIndex = 0;
    let isTyping = true;
    let i = 0;
    let message = null;
    
    function typeText() {
        if (message === null) {
        if (isTyping && i < messages[currentMessageIndex].length) {
            typingAnimation.innerHTML += messages[currentMessageIndex].charAt(i);
            i++;
            setTimeout(typeText, animationSpeed);
        } else if (isTyping) {
            isTyping = false;
            setTimeout(untypeText, pauseDuration);
        }            
        } else {
            if (isTyping && i < message.length) {
                typingAnimation.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeText(), animationSpeed);
            } else if (isTyping) {
                isTyping = false;
                setTimeout(untypeText, pauseDuration);
                message = null;
            }
        }

    }

    function untypeText() {
        if (i > 0) {
            typingAnimation.innerHTML = messages[currentMessageIndex].substring(0, i - 1);
            i--;
            setTimeout(untypeText, animationSpeed);
        } else {
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
            isTyping = true;
            setTimeout(typeText, animationSpeed);
        }
    }

    typeText();
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            Typer(); 
            observer.unobserve(entry.target); 
        }
    });
}


const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.5 
};

const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(document.getElementById("introText"));


function SlideAnimations() {
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("card2")) {
                    entry.target.classList.add("slide-in-from-left");
                } else if (entry.target.classList.contains("card")){
                    entry.target.classList.add("slide-in-from-right");
                } else if (entry.target.classList.contains("card4")) {
                    entry.target.classList.add("zoom-out");
                } else {
                    entry.target.classList.add("slide-in-from-bottom");
                }
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshold: 1 }; 

    const elements = document.querySelectorAll('.card, .card2, .card3, .card4');
    elements.forEach(el => {
        observer.observe(el, options);
    });
}

function ScrollCheck() {
    const scrollButton = document.getElementById("scrollToTop");
    scrollButton.style.opacity = 0;

    const totalHeight = document.documentElement.scrollHeight;

    window.addEventListener("scroll", function() {

    const scrollPosition = window.scrollY;


    const thirtyPercent = (totalHeight * 10) / 100;

    if (scrollPosition >= thirtyPercent) {
        scrollButton.style.opacity = 1;
    } else {
        scrollButton.style.opacity = 0;
    }

    });
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
