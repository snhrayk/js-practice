// コンソール画面に表示することができたら、
// id名textに対して ECCComp. とh1要素で上書き表示を行いましょう。

const ecc = document.getElementById("text");
console.log(ecc);

ecc.innerHTML = "<h1>ECCComp.</h1>";