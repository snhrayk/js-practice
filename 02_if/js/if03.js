const wallet = 3000;
let item = prompt();
item = Number(item);

if (item <= 3000) {
    console.log("購入することができます");
} 
else if(item == 3000){
    console.log("ぴったりです");
}
else {
    console.log("購入することができません");
}