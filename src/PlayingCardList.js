import React from "react";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import { useAxios } from './hooks'
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

  // Edited to make it to draw from a single link. Then use axios to expand and draw cards
  const BASE_URL = 'https://deckofcardsapi.com/api/deck'
  const [cards, setCards] = useAxios(BASE_URL + '/new/draw')
  
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={setCards}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
