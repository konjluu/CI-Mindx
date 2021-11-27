const timeEl=document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

let interval;
let currentTime=0;
timeEl.innerHTML= formatSencond(currentTime);

function formatSencond(sencond){
    let m = Math.floor(sencond/60);
    let s =sencond%60;
    let time=``;
    if(m<10 && s<10){
        time= `0${m} : 0${s}`;
    }
    else if (m<10 && s>=10) {
        time=`0${m} : ${s}`
    } 
    else if(m>=10&& s<10){
        time=`${m} : 0${s}`
    }
    else {
        time=`${m} : ${s}`
    }
    return time;

}

startBtn.addEventListener("click",function(){
    if(interval){    //neu co interval roi thi return luon
        return;
    }
    interval= setInterval(()=>{
        currentTime ++;
        timeEl.innerHTML= formatSencond(currentTime);
    },1000);
})

pauseBtn.addEventListener("click",function(){
    if(interval){    //neu co interval roi thi return luon
        clearInterval(interval);
    }
})

stopBtn.addEventListener("click",function(){
    currentTime=0;
    timeEl.innerHTML=formatSencond(currentTime);
    if(interval){    //neu co interval roi thi return luon
        clearInterval(interval);
    }
})




