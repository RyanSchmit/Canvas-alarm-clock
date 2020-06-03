//clock
window.onload = function() {
  clock();  
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mid = 'pm';
    let currentTime =  document.getElementById('clock').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }    
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'am';
    }     
    currentTime
    setTimeout(clock, 1000);
    }
}


// hiding and showing Hours and Minutes drop down
function showHours() {
  document.getElementById("hours").classList.toggle("show");
}

function showMinutes() {
  document.getElementById("minutes").classList.toggle("show");
  document.getElementById("amPM").classList.toggle("show");
}

//Hide and show hours and minutes
function alarm() {
  var hoursAndMinutes = document.getElementById("minutesAndHours");
  var selectedHours = document.getElementById("selectedHours").value;
  var selectedMinutes = document.getElementById("selectedMinutes").value;
  var selectedAMPM = document.getElementById("selectedAMPM").value;
  if (hoursAndMinutes.style.display === "none") {
    hoursAndMinutes.style.display = "block";
  } else {
    hoursAndMinutes.style.display = "none";
    document.getElementById("demo").innerHTML = selectedHours + selectedMinutes + selectedAMPM;
  }
}

//check alarm 
function checkAlarm() {
  var alarmTime = document.getElementById("demo")
  alert(alarmTime)
}