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
  document.getElementById('clock').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
    setTimeout(clock, 1000);
    }
}

// hiding and showing Hours and Minutes drop down
function showHours() {
  document.getElementById("hours").classList.toggle("show");
}

function showMinutes() {
  document.getElementById("minutes").classList.toggle("show");
}


// Close the dropdown
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Hide and show hours and minutes
function alarm() {
  var hoursAndMinutes = document.getElementById("minutesAndHours");
  if (hoursAndMinutes.style.display === "none") {
    hoursAndMinutes.style.display = "block";
  } else {
    hoursAndMinutes.style.display = "none";
  }
}
