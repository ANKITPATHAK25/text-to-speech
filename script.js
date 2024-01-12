function speech() {
        
    const text = document.getElementById('textspeech').value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}