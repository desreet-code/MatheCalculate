const BtnSound = document.getElementById("BtnSound");
const Error = document.getElementById("Error");
const display = document.getElementById("display");
const source = document.getElementById("source");

function appendToDisplay(input){
    display.value += input;
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
}
function clearDisplay(){
    display.value ="";
    BtnSound.currentTime = 0;
    BtnSound.play();
}
function calculate(){
    try{
        display.value = eval(display.value);
        BtnSound.currentTime = 0;
        BtnSound.play();
    }
    catch(error){
        display.value = "ERROR❔❓❕❗";
        Error.currentTime = 0;
        Error.play();
    }
}
function deleteDisplayvalue(){
    display.value = display.value.slice(0, -1);
    BtnSound.currentTime = 0;
    BtnSound.play();
}
source.onclick = () => {
    window.location.href = "Resources.html";
}