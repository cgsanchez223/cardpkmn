import axios from 'axios';
import { useState } from 'react';
import {v1 as uuid} from "uuid";

export function useFlip() {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };

    return [isFacingUp, flipCard]
}

export function useAxios(url) {
    const [cards, setCards] = useState([]);
    const addCard = async (name="") => {
        const response = await axios.get(`${url}${name}`);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return [cards, addCard]
}

export default { useFlip, useAxios };