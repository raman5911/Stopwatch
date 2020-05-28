let timerId;                //variable for storing time interval
let counter=false;          //for resuming time interval if it is paused

//get the value of minutes through input field and set that value on timer
function getMinutesValue() {

    let minutes = document.getElementById("minutes-input").value;
    document.getElementById("minutes").innerHTML = minutes;

}

//if value of seconds is < 10 change it. eg:- change 5 to 05.
function updateValue(value){

    if(value<0) {
        value = 0;
    }
    if(value<10) {
        value = "0" + value;
    }

    return value;

}

//get the value of seconds through input field and set that value on timer
function getSecondsValue() {
    
    let seconds = document.getElementById("seconds-input").value;

    seconds = updateValue(seconds);
    document.getElementById("seconds").innerHTML = seconds;
}

//variables for storing buttons
var startbtn = document.getElementById("start-button");
var pausebtn = document.getElementById("pause-button");
var stopbtn = document.getElementById("stop-button");

//variables for storing minutes and seconds value
let minutes = document.getElementById("minutes-input");
let seconds = document.getElementById("seconds-input");

//copy variables of original values
let originalMValue = minutes;
let originalSValue = seconds;

//executes the function when start button is clicked.
function startTimer() {

    let mvalue = minutes.value;
    let svalue = seconds.value;

    startbtn.disabled = true;
    pausebtn.disabled = false;
    stopbtn.disabled = false;
    disableInput();

    if(counter==true)
    {
        mvalue=document.getElementById("minutes").innerHTML;
        svalue=document.getElementById("seconds").innerHTML;
        
    }
    counter=true;

    timerId = setInterval(function() {

        svalue--;
        if(svalue < 0)
        {
            if(mvalue == 0)
            {
                return stopTimer;
            }
    
            svalue = 59;
            mvalue--;
    
        }
    
        document.getElementById("minutes").innerHTML = mvalue;
    
        svalue = updateValue(svalue);
    
        document.getElementById("seconds").innerHTML = svalue;
    
    }, 1000);
   
}

//executes the function when pause button is clicked.
function pauseTimer() {
    console.log(timerId);
    pausebtn.disabled = true;
    startbtn.disabled = false;
    clearInterval(timerId);
}

//executes the function when stop button is clicked.
function stopTimer() {

    startbtn.disabled = false;
    pausebtn.disabled = true;
    stopbtn.disabled = true;
    enableInput();

    clearInterval(timerId);

    
    document.getElementById("minutes").innerHTML = originalMValue.value;
    document.getElementById("seconds").innerHTML = updateValue(originalSValue.value);

}

//for disabling inputs
function disableInput() {

    minutes.disabled = true;
    seconds.disabled = true;

}

//for enabling inputs
function enableInput() {

    minutes.disabled = false;
    seconds.disabled = false; 

}