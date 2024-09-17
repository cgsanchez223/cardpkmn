import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import { useFlip } from './hooks'

/* Renders a single playing card. */
// Changed states to flip
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, setIsFlipped] = useFlip()
  
  return (
    <img
      src={isFlipped ? front : back}
      alt="playing card"
      onClick={setIsFlipped}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
