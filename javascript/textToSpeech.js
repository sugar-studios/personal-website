/*
Alexander Calkins
Personal Website
9/1/2023
*/

//speaker part
function speakText(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speechSynthesis.speak(speech);
}

// Add click event listeners to all speak buttons
const speakButtons = document.querySelectorAll('.speak-button');
speakButtons.forEach(button => {
    button.addEventListener('click', function() {
        const text = this.parentElement.querySelector('p').textContent;
        speakText(text);
    });
});