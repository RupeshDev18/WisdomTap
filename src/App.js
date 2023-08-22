import "./App.css";
import { useEffect, useState } from "react";
import dice from "./dice.png";
import divider from "./divider.png";
function App() {
  const [advice, setAdvice] = useState("");
  const [adviceNo, setAdviceNo] = useState("");
  async function getAdvice() {
    const data = await fetch("https://api.adviceslip.com/advice");
    const res = await data.json();
    setAdvice(res.slip.advice);
    setAdviceNo(res.slip.id);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div className="advice-generator">
      <div className="advice-generator-output">
        <span className="advice-generator-advice-number">
          ADVICE #{adviceNo}
        </span>
        <q className="advice-generator-quote">{advice}</q>

        <picture className="advice-generator-divider">
          <img src={divider} alt="div" style={{ width: "10rem" }} />
        </picture>
      </div>
      <button onClick={getAdvice} className="advice-generator-btn">
        <img
          src={dice}
          style={{ width: "4rem" }}
          alt="dice img"
          className="advice-generator-btn-img"
        />
      </button>
    </div>
  );
}

export default App;
