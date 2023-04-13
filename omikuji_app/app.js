var fortunes = [
    { level: "大吉", description: "全てのことが大成功するでしょう！" },
    {
        level: "中吉",
        description: "成功することがありますが、障害には注意してください。",
    },
    { level: "小吉", description: "小さな成功や改善があります。" },
    {
        level: "凶",
        description: "困難や逆境に直面するかもしれませんが、強く耐え忍んでください。",
    },
];
function pickFortune() {
    var index = Math.floor(Math.random() * (fortunes.length + 1));
    return fortunes[index];
}
function displayFortune(fortune) {
    var fortuneResult = document.getElementById("fortune-result");
    fortuneResult.innerText = "\u4ECA\u65E5\u306E\u304A\u307F\u304F\u3058\u306F\u300C".concat(fortune.level, "\u300D\u3067\u3059\u3002\u300C").concat(fortune.description, "\u300D");
}
// HTMLからボタン要素を選択する
var button = document.querySelector("button");
// ボタンにクリックイベントリスナーを追加する
button.addEventListener("click", function () {
    // おみくじを選ぶ
    var fortune = pickFortune();
    // おみくじを表示する
    displayFortune(fortune);
});
