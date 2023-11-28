const list = document.getElementById("counter");
let count = 0;
const duration = 1000;

function setTimer() {
    if (count < 30) {
        count++;
        list.innerHTML += count;
        setTimeout(setTimer, duration);
    }
    else {
        return false;
    }
}
setTimer();