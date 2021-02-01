import React from 'react'
import './style.scss'

const REPO_URL = 'https://github.com/iamludal/typospeed'

interface ButtonsProps {
    onHelp: () => any
}

const Buttons: React.FC<ButtonsProps> = ({ onHelp }) => {
    return (
        <div className="buttons">
            <a href={REPO_URL} className="btn" target="_blank"
                title="Star me on Github!">
                {/* Icon: GitHub */}
            </a>
            <button className="btn help" title="Click me for help"
                onClick={onHelp}>
                {/* Icon: Help */}
            </button>
        </div>
    )
}

export default Buttons