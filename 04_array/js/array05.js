// 配列 word を作成し、下記の要素を入れておきましょう
// apple / gorilla / trumpet / bread
// 1.配列 wordをコンソール画面に表示し、一覧が作成されているか確認する
// 2.配列 word の要素の先頭に、light を追加しましょう
// 3.コンソール画面を表示して、先頭にlightが追加されているかを確認する
// 4.配列 word の要素の先頭を削除する
// 5.コンソール画面を表示して、先頭の要素が削除されているかを確認する

let word = ["apple", "gorilla", "trumpet", "bread"];
console.log(word);

word.unshift("light");
console.log(word);

word.shift();
console.log(word);