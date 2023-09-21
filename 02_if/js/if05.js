let photoshop = Number(prompt("Photoshopの点数は？"));
let illustrator = Number(prompt("Illustratorの点数は？"));

console.log(`Photoshopは${photoshop}点ね、Illustratorは${illustrator}点ね、平均${(photoshop+illustrator)/2}点`);

if ((photoshop+illustrator)/2 >=0 && (photoshop+illustrator)/2 <= 30) {
    console.log("がんばりなさい");
}
else if ((photoshop+illustrator)/2 >=31 && (photoshop+illustrator)/2 <= 60) {
    console.log("まずまずね");
}  
else if ((photoshop+illustrator)/2 >=61 && (photoshop+illustrator)/2 <= 100) {
    console.log("頑張ったね");
}
else{
    console.log("嘘をつくんじゃない");
}