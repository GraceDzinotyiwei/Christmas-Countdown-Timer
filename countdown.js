// Function to start the countdown
function startCountdown(targetDate) {
    const countdownDate = new Date(targetDate).getTime(); // Convert target date to timestamp

    // Function to update the countdown display
    function updateCountdown() {
        var now = new Date().getTime(); // Get the current time
        var distance = countdownDate - now; // Calculate the distance to countdown date

        // Time calculations
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display results
        document.getElementById("days").innerHTML = formatTime(days);
        document.getElementById("hours").innerHTML = formatTime(hours);
        document.getElementById("minutes").innerHTML = formatTime(minutes);
        document.getElementById("seconds").innerHTML = formatTime(seconds);

        // Check if countdown is over
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Merry Christmas!";
        }
    }

    // Start the countdown update every second
    var interval = setInterval(updateCountdown, 1000);
}

// Helper function to format time with leading zeros
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// Start the countdown to Christmas
startCountdown("December 25, 2024 00:00:00");