const list = document.getElementById("counter");
let count = 0;
const duration = 1000;

// list.innerHTML = count;

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