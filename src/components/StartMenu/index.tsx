import React, { useEffect, useState } from 'react'
import { getScores, registerUser, userIsNew } from '../../ts/utils'
import Rules from './Rules'
import Buttons from './Buttons'

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
                {/* Icon: FaMedal */}
                <span>Best score: <strong>{best}</strong></span>
                <span>Last score: <strong>{last}</strong></span>
            </div>
            <button id="play" onClick={onPlay}>
                {/* Icon: PlayCircle */}
            </button>
            {showRules
                ? <Rules onClose={() => setShowRules(false)} />
                : <Buttons onHelp={() => setShowRules(true)} />
            }
        </div>
    )

}

export default StartMenu