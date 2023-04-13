interface Fortune {
  level: string;
  description: string;
}

const fortunes: Fortune[] = [
  { level: "大吉", description: "全てのことが大成功するでしょう！" },
  {
    level: "中吉",
    description: "成功することがありますが、障害には注意してください。",
  },
  { level: "小吉", description: "小さな成功や改善があります。" },
  {
    level: "凶",
    description:
      "困難や逆境に直面するかもしれませんが、強く耐え忍んでください。",
  },
];

function pickFortune(): Fortune {
  const index = Math.floor(Math.random() * (fortunes.length + 1));
  return fortunes[index];
}

function displayFortune(fortune: Fortune): void {
  const fortuneResult = document.getElementById("fortune-result");
  fortuneResult.innerText = `今日のおみくじは「${fortune.level}」です。「${fortune.description}」`;
}

// HTMLからボタン要素を選択する
const button = document.querySelector("button");

// ボタンにクリックイベントリスナーを追加する
button.addEventListener("click", () => {
  // おみくじを選ぶ
  const fortune = pickFortune();

  // おみくじを表示する
  displayFortune(fortune);
});
