import dividerMobile from "../assets/pattern-divider-mobile.svg";
import dividerDesktop from "../assets/pattern-divider-desktop.svg";
import iconDice from "../assets/icon-dice.svg";
import { useState, useEffect } from "react";

function Card() {
  const [index, setIndex] = useState([]);
  const [advice, setAdvice] = useState([]);
  async function loadData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setIndex(data.slip.id);
    setAdvice(data.slip.advice);
  }
  useEffect(() => {
    loadData();
  }, []);
  const nextAdvice = () => {
    loadData();
  };
  return (
    <div className="card-container">
      <h1>ADVICE #{index}</h1>
      <p>"{advice}"</p>
      <picture>
        <source srcSet={dividerDesktop} media="(min-width: 1080px)" />
        <img className="divider" src={dividerMobile} alt="" />
      </picture>
      <div className="icon-container" onClick={nextAdvice}>
        <img src={iconDice} alt="" />
      </div>
    </div>
  );
}
export default Card;
