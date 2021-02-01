import React from 'react'
import { IoMdHelpCircle } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import './style.scss'

interface RulesProps {
    onClose: () => any
}

const Rules: React.FC<RulesProps> = ({ onClose }) => {
    return (
        <div className="container">
            <div className="header">
                <h1>
                    <IoMdHelpCircle /> How to play?
                </h1>
                <div className="close" onClick={onClose}>
                    <MdClose />
                </div>
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