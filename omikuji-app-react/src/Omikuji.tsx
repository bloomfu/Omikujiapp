import React, { useState } from "react";
import OmikujiResult from "./OmikujiResult";
import "./Omikuji.css";

const Omikuji: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);

  const generateOmikujiResult = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    let omikujiResult = "";

    switch (randomNumber) {
      case 1:
        omikujiResult = "大吉";
        break;
      case 2:
        omikujiResult = "中吉";
        break;
      case 3:
        omikujiResult = "小吉";
        break;
      case 4:
        omikujiResult = "吉";
        break;
      case 5:
        omikujiResult = "末吉";
        break;
      case 6:
        omikujiResult = "凶";
        break;
    }

    setResult(omikujiResult);
  };

  return (
    <div className="container">
      <h1>おみくじアプリ</h1>
      <button onClick={generateOmikujiResult}>おみくじを引く</button>
      {result && <OmikujiResult result={result} />}
    </div>
  );
};

export default Omikuji;
