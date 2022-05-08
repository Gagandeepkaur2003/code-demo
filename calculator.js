let screen=document.querySelector("#screen");
let buttons=document.getElementsByTagName("button");
function display(val){
    screen.value+=val;//val is the value given to the disply in html of each button
    return val;
}

function solveIt(){
    let x=document.getElementById("screen").value;
    let y=eval(x);
    document.getElementById("screen").value=y
    return y; 
}

function clearScreen(){
    document.getElementById("screen").value=null;
                    /*or
    document.getElementById("screen").value="";*/
}

