function speech() {
        const text="kya be gandu chutiye kya dekh raha hai ";
   // const text = document.getElementById('textspeech').value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}
