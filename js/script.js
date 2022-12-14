//Defaine vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//StopWatch function (logic to determine when increment next value, etc.)
function StopWatch() {

    seconds++;

    // Logic to determine when to  increment next value
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }

    }

    // if seconds/minutes/hours are olnly one digit, add a leading 0 to the value
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }



    //Display updated time values user
    document.getElementById("clock").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}


function startStop() {

    if (status === "stopped") {

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(StopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else {

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped"
    }
    //Function to reset the stopwatch
    function reset(){
        
        window.clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById("clock").innerHTML = "00:00:00";
        document.getElementById("reset").innerHTML = "reset";

    }

}