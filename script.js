function speech() {
    // Get the value of the input element with the id 'textspeech'
    const text = document.getElementById('textspeech').value;

    // Create a new SpeechSynthesisUtterance object with the provided text
    const utterance = new SpeechSynthesisUtterance(text);

    // Set the rate property to control the speed (e.g., 0.5 for slower, 1.5 for faster)
    utterance.rate = 1.0; // Adjust this value as needed

    // Use the speechSynthesis object to speak the utterance
    window.speechSynthesis.speak(utterance);
}
