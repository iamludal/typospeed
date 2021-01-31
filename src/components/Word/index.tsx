import React, { CSSProperties } from 'react'
import './style.scss'

interface WordProps {
    value: string,
    x: number,
    duration: number,
    [otherProp: string]: any
}

const Word: React.FC<WordProps> = ({ value, x, duration }) => {

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