let hr = 0;
let min =0;
let sec = 0;
let msec = 0;
let timer = false;

function start() {
    timer = true;
    stopwatch();
    // setInterval(stopwatch,10);
}

function stop() {
    timer = false;
}

function reset() {
    timer=false;
    document.getElementById("count").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("minutes").innerText="00";
    document.getElementById("hours").innerText='00';
}

function stopwatch() {
    if (timer == true) {
        ++msec;
        if(msec==100){
            msec=0;
            sec+=1;
            
        }
        if(sec==60){
            sce=0;
            min+=1;
        }
        if(min==60){
            min=0;
            sec=0;
            hr+=1;
        }
        document.getElementById("count").innerText = msec;
        document.getElementById("seconds").innerText = sec;
        document.getElementById("minutes").innerText=min;
        document.getElementById("hours").innerText=hr;
        setTimeout(stopwatch,10);
    }
}

