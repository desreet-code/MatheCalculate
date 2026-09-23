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

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === 'Enter' || event.key === '=') {
    calculate();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === 'Backspace') {
    deleteDisplayvalue();
  }
});

const activeKeys = {};

document.addEventListener('keydown', function(event) {
    activeKeys[event.key] = true;

    if (activeKeys['Shift'] && activeKeys['Backspace'] || event.key === 'Delete') {
        event.preventDefault(); // Stops text from deleting or submitting
        
        // =====================================
        // 🛠️ PUT YOUR FUNCTION HERE
            clearDisplay();
        // =====================================
        // =====================================
    }
});

document.addEventListener('keyup', function(event) {
    activeKeys[event.key] = false;
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '1') {
    display.value += '1';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '2') {
    display.value += '2';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '3') {
    display.value += '3';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '4') {
    display.value += '4';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '5') {
    display.value += '5';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '6') {
    display.value += '6';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '7') {
    display.value += '7';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '8') {
    display.value += '8';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '9') {
    display.value += '9';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '0') {
    display.value += '0';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '+') {
    display.value += '+';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '-') {
    display.value += '-';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '*' || event.key === 'x') {
    display.value += '*';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '/') {
    display.value += '/';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '.' || event.key === ',') {
    display.value += '.';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === '(') {
    display.value += '(';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});

window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the 'Enter' key
  if (event.key === ')') {
    display.value += ')';
    // 🚀 ADD THIS LINE: Automatically scrolls screen to follow new characters
    display.scrollLeft = display.scrollWidth; 
    BtnSound.currentTime = 0;
    BtnSound.play();
  }
});