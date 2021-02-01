import React, { CSSProperties } from 'react'
import { WordAttributes } from '../../../ts/types'
import './style.scss'

interface WordProps extends WordAttributes {
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