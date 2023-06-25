// Set the date and time of the countdown
const countdownDate = new Date("2023-08-24T00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // If the countdown is finished, display a message
    if (timeRemaining <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Countdown has ended!";
    }
}, 1000); // Update every second (1000 milliseconds)