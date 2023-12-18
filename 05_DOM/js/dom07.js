// 下記フォームのデータを使って、入力されたデータをorderlistIDに表示しましょう。
// 表示する内容：入力した内容に合わせて「Xサイズ：XXXX」となるように設定しましょう。
const itemName = document.getElementById("item_name");
const size = document.getElementById("size");
const btn = document.getElementById("btn");
const orderList = document.getElementById("orderList");

btn.onclick = () => {
    orderList.innerHTML = `<li>${size.value}サイズ:${itemName.value}</li>`
}