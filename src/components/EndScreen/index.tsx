import React from 'react'
import { FaSadTear } from 'react-icons/fa'
import { callback, Scores } from '../../ts/types'
import './style.scss'

interface EndScreenProps extends Scores {
    onMenu: callback
    onPlayAgain: callback
}

const EndScreen: React.FC<EndScreenProps> = (
    { best, last, onMenu, onPlayAgain }
) => {
    return (
        <div className="wrapper">
            <h1>
                <FaSadTear /> Game over
            </h1>
            <h2>You score: {last}</h2>
            <p>Best score: {best}</p>
            <div>
                <button className="btn" onClick={onMenu}>
                    Menu
                </button>
                <button className="btn" onClick={onPlayAgain}>
                    Play again
                </button>
            </div>
        </div>
    )
}

export default EndScreen