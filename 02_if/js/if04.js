// let time = prompt();
// time = Number(time);
let time = Number(prompt());

// 1. マイナスの時間または、24より大きな数値の場合「そんな時間はありません」とコンソール画面に表示する。
    if(time <= 0 || time >= 24){
        console.log("そんな時間はありません");
    } 
// 2. 1から6までの数値の場合「おやすみなさい」とコンソール画面に表示する
    if(time >= 1 && time <= 6){
        console.log("おやすみなさい");
    }
// 3. 7から11までの数値の場合「おはようございます」とコンソール画面に表示する
    if(time >= 7 && time <= 11){
        console.log("おはようございます");
    }
// 4. 12の時は「お昼ごはん」とコンソール画面に表示する
    if(time == 12){
        console.log("お昼ごはん");
    }
// 5. 13から17までの数値の場合「こんにちは」とコンソール画面に表示する
    if(time >= 13 && time <= 17){
        console.log("こんにちは");
    }
// 6. 18から24までの数値の場合「こんばんは」とコンソール画面に表示する
    if(time >= 18 && time <= 24){
        console.log("こんばんは");
    }