const counter = document.getElementById("counter");
let count = 0;
const duration = 1000;

function setTimer() {
    count++;
    if (count < 30) {
        counter.innerHTML += count;
        //()は即時実行するので、イベントハンドラとしてsetTimerをセットするため()は不要
        setTimeout(setTimer, duration);
    }
    else {
        // countが10になるとsetTimeout終了
        return false;
    }
}
setTimer();
// for (let count = 0; count < counter.length; count++) {
//     counter.innerHTML += count;
//     setTimeout(setTimer, duration);
// }