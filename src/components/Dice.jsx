import React, { useState } from 'react';
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'


function Dice() {
    const diceArr = [dice1,dice2,dice3,dice4,dice5,dice6];
    const [dice, setDice] = useState(dice0);
    const [random, setRandom] = useState(0)

    const randomDice = () => {
        setRandom(Math.floor(Math.random()* 6))
    }

    const updateDice = () => {
        setDice(dice0)
        setTimeout(() => {
            setDice(diceArr[random]);
        }, 1000)
    }

    return(
        <img onClick={() => {updateDice(randomDice())}} src={dice} width="20%" alt=""/>
    )
}

export default Dice