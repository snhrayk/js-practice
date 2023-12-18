// 下記フォームを使って、textIDに下記のように出力しましょう。
// 出力したい文字「選択したサイズ：Lサイズ」

const size = document.getElementById("size");
const text = document.getElementById("text");

size.onchange = () => {
    text.innerText = "選択したサイズ：" + size.value + "サイズ";
}