import React, { useEffect, useState } from 'react'
import { getScores, registerUser, userIsNew } from '../../ts/utils'
import { FaMedal } from 'react-icons/fa'
import { MdPlayArrow } from 'react-icons/md'
import Rules from './Rules'
import Buttons from './Buttons'
import './style.scss'

interface StartMenuProps {
    onPlay: () => any
}

const StartMenu: React.FC<StartMenuProps> = ({ onPlay }) => {
    const { best, last } = getScores()
    const [showRules, setShowRules] = useState<boolean>(userIsNew())

    useEffect(() => {
        if (userIsNew())
            registerUser()
    }, [])

    return (
        <div id="start-menu">
            <div className="scores">
                <FaMedal />
                <span>Best score: <strong>{best}</strong></span>
                <span>Last score: <strong>{last}</strong></span>
            </div>
            <button id="play" onClick={onPlay}>
                <MdPlayArrow />
            </button>
            {showRules
                ? <Rules onClose={() => setShowRules(false)} />
                : <Buttons onHelp={() => setShowRules(true)} />
            }
        </div>
    )

}

export default StartMenu