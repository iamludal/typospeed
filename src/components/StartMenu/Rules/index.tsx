import React from 'react'
import './style.scss'

interface RulesProps {
    onClose: () => any
}

const Rules: React.FC<RulesProps> = ({ onClose }) => {
    return (
        <div className="container">
            <div className="header">
                {/* Icon */}
                <h1>How to play?</h1>
                <div className="close" onClick={onClose}></div>
            </div>
            <p>
                As soon as you'll start the game, words are going to fall out.
                Type them as fast as possible to remove them. If a word reaches
                the bottom of the screen, you'll loose the game. Good luck!
            </p>
        </div>
    )
}

export default Rules