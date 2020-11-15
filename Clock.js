// Function to display the time
function currentTime() {
  //Asking the computer today's date and current time
  var date = new Date(); /* creating object of Date class */
  //Pulling out just the hours, seconds, and minutes from the object
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
  // 0 AM and 0 PM should read as 12
  // Convert from 24 hour to 12 hour format
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
 // Retrieve a "handle" to a DIV with the "clock" ID.
 // Filling HTML element with hours, minutes, and seconds.
 document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
 // Make the clock 'tick' by repeatedly running the currentTime function every  second.
 var t = setTimeout(currentTime, 1000); 
}

function updateTime(k) { /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();
