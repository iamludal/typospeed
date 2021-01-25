import React, { useState } from 'react'
import type { words, GameStates } from '../../ts/types'
import Error from '../Error';

interface props {
    wordsList: words
}

function Game(props: props) {
    const screen: { [key: string]: JSX.Element } = {
        IDLE: <Error message="Idle" />,
        OVER: <Error message="" />,
        PLAYING: <div>PLAYING</div>
    }

    const [state, setState] = useState<GameStates>('IDLE');

    setTimeout(() => setState('PLAYING'), 1000)

    return <div>{screen[state]}</div>
}

export default Game