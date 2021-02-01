import React, { ReactNode } from 'react'
import { IconContext } from 'react-icons'

interface ContextProps {
    children: ReactNode
}

const Context: React.FC<ContextProps> = ({ children }) => {

    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            {children}
        </IconContext.Provider>
    )
}

export default Context