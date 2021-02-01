import React from 'react'
import { FaGithubAlt } from 'react-icons/fa'
import { IoMdHelpCircle } from 'react-icons/io'
import { callback } from '../../../ts/types'
import './style.scss'

const REPO_URL = 'https://github.com/iamludal/typospeed'

interface ButtonsProps {
    onHelp: callback
}

const Buttons: React.FC<ButtonsProps> = ({ onHelp }) => {
    return (
        <div className="buttons">
            <a href={REPO_URL} className="btn" target="_blank"
                title="Star me on Github!">
                <FaGithubAlt />
            </a>
            <button className="btn help" title="Click me for help"
                onClick={onHelp}>
                <IoMdHelpCircle />
            </button>
        </div>
    )
}

export default Buttons