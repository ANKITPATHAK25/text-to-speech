function showAlertOnLoad() {
    
    alert("आगया मरवाने अपनी गांड");
}

// Function to display an alert on page exit
function showAlertOnExit() {
    return " गांड मराओगे";
}

// Attach showAlertOnLoad to the window.onload event
window.onload = showAlertOnLoad;

// Attach showAlertOnExit to the window.onbeforeunload event
window.onbeforeunload = showAlertOnExit;

// Your existing speech function
function speech() {
    const text = document.getElementById('textspeech').value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}
function speech() 
{
    // Get the value of the input element with the id 'textspeech'
    const text = document.getElementById('textspeech').value;

    // Create a new SpeechSynthesisUtterance object with the provided text
    const utterance = new SpeechSynthesisUtterance(text);
 
    utterance.rate = 1.0; // Adjust this value as needed

    // Use the speechSynthesis object to speak the utterance
    window.speechSynthesis.speak(utterance);
}
function say() {
    const text = "kya be gaandu madharchod ";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0; // Adjust this value as needed
    window.speechSynthesis.speak(utterance);
}
