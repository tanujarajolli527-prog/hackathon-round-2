let time = 30 * 60;
let timer;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("time").innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
    function startTimer() {
        if (timer) return;
        timer = setInterval(() => {
            if (time > 0) {
                time--;
                updateDisplay();
            }
            else {
                clearInterval(timer);
                timer = null;
                alert("Time's Up!");
            }
            
        }, 1000);
    }
    function pauseTimer() {
        clearInterval(timer);
        timer=null;
    }
    function resetTimer() {
        clearInterval(timer);
        timer=null;
        time = 30 * 60;
        updateDisplay();
    }
    updateDisplay();


function showSection(id) {
    document.querySelectorAll("main section").forEach(section => {
        section.style.display="none";
    });
    document.getElementById(id).style.display="block";
}
