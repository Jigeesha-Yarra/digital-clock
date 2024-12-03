function showTime(){
    // getting cur time and data
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    amOrpm = "AM";

    // setting for 12hrs formatt
    if(hour >= 12){
        if (hour > 12){
            hour -= 12;
        }
        amOrpm = "PM";
    }else if (hour == 0){
        hour = 12;
        amOrpm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let curTime = hour + " : " + min + " : " + sec + amOrpm;

    document.getElementById("clock").innerHTML = curTime; // Displaying time
}

setInterval(showTime,1000); // Calling showTime function at every second
showTime();

