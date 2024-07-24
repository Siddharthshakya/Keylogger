const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    stopBtn.disabled = true;
    startBtn.disabled = false;
    logDiv.style.backgroundColor = "#FF9EAA"  ;
    stateDiv.style.backgroundColor = "#FF9EAA";  
})

function handleDown(e){
    logDiv.textContent = `key ${e.key} pressed down`;
    stateDiv.textContent = "key is down";
    logDiv.style.backgroundColor = "#3AA6B9";
    stateDiv.style.backgroundColor = "#3AA6B9";
}

function handleUp(e){
    logDiv.textContent = `key ${e.key} pressed Up`;
    stateDiv.textContent = "key is Up"
}

