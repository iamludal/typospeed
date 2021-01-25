import React, { CSSProperties } from 'react'
import { WordProps } from '../../ts/types'
import './style.scss'

function Word(props: WordProps) {
    const { value, x, duration } = props

    const style: CSSProperties = {
        animationDuration: `${duration}s`,
        left: `${x}%`,
        transform: `translateX(${-x}%)`
    }

    return (
        <div className="word" style={style}>
            {value}
        </div>
    )
}

export default Word