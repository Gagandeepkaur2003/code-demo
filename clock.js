function time(){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let session="AM";
    if(h==0){
        h=12
        session="AM"
    }
    else if(h>12){
        h=h-12;
        session="PM"
    }

    if(h<10){
        h="0"+h
    }
    else if(m<10){
        m="0"+m
    }
    else if(s<10){
        s="0"+s
    }
    var myClock = document.getElementById('clockDisplay');
        myClock.textContent = h + ":" + m + ":" + s + " " + session;
        setTimeout('time()', 1000);
    }
    time();
    