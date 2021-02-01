import React, { useEffect, useRef, useState } from 'react'
import type { WordAttributes } from '../../ts/types'
import type Game from '../../ts/Game'
import Word from './Word'
import classNames from 'classnames'
import './style.scss'

interface PlaygroundProps {
    game: Game
}

const Playground: React.FC<PlaygroundProps> = ({ game }) => {

    const [fallingWords, setFallingWords] = useState<WordAttributes[]>([])
    const [score, setScore] = useState<number>(0)
    const [invalid, setInvalid] = useState<boolean>(false)
    const input = useRef<HTMLInputElement>(null)
    const [typedWord, setTypedWord] = useState<string>('')

    const handleBlur = () => input.current?.focus()

    const handeKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setInvalid(false)

        if (e.key == 'Enter') {
            setInvalid(!game.handle(typedWord))
            setTypedWord('')
        }
    }

    useEffect(() => {
        game.registerWordsListener(setFallingWords)
        game.registerScoreListener(setScore)
        handleBlur()
    }, [])

    return (
        <div className={classNames('playground', { invalid })}>
            <div className="words-container">
                {fallingWords.map(w => <Word key={w.value + w.x} {...w} />)}
            </div>
            <div className="bottom-bar">
                <div className="score">
                    {/* Icon: Star */} Score: {score}
                </div>
                <input type="text" className="input" spellCheck={false}
                    ref={input} onKeyUp={handeKeyUp} value={typedWord} />
            </div>
        </div>
    )
}

export default Playground