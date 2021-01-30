import React, { CSSProperties } from 'react'
import './style.scss'

interface WordProps {
    value: string,
    x: number,
    duration: number,
    id: string,
    [otherProp: string]: any
}

const Word = (props: WordProps) => {
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