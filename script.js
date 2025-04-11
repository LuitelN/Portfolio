// Get the countdown element
let countdownElement = document.getElementById('countdown');

// Set the initial time for the countdown (in seconds)
let time = 0; // Starts at 0

// Function to format time as Days:Hours:Minutes:Seconds
function formatTime(timeInSeconds) {
    const days = Math.floor(timeInSeconds / (24 * 60 * 60));
    const hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
    const seconds = timeInSeconds % 60;

    return `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
}

// Update the countdown every second
function updateCountdown() {
    countdownElement.innerText = formatTime(time);
    time++;
}

// Call the update function every second
setInterval(updateCountdown, 1000);
