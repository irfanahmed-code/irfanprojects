var sec=0;
var min=0;
var msec=0;
var minHeading =document.getElementById("min");
var secHeading =document.getElementById("sec");
var msecHeading =document.getElementById("msec");
var interval


function timer() {
    msec++
    msecHeading.innerHTML=msec;
    if (msec >=100) {
        sec++
        secHeading.innerHTML=sec;
        msec=0;
    } else if (sec >=60){
        min++
        minHeading.innerHTML=min;
        sec=0;
    }

}
function start(){
interval = setInterval(timer,10);
}

function stop(){
    clearInterval(interval);
}

function reset(){
    sec=0;
    secHeading.innerHTML=sec;
    min=0;
minHeading.innerHTML=min;
    msec=0;
    msecHeading.innerHTML=msec;
stop();
}
function disableBtn(){
    var btn=document.getElementById("S");
    btn.disabled=true;
}
function enableBtn(){
    var btn=document.getElementById("S");
    btn.disabled=false;
}