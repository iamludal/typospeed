import React, { useState, useEffect, ReactNode } from 'react'
import { getWords } from '../../ts/utils'
import Loader from '../Loader'
import Error from '../Error'
import './style.scss'
import Game from '../Game'

const App: React.FC = () => {

    const [screen, setScreen] = useState<ReactNode>(<Loader />)

    useEffect(() => {
        getWords()
            .then(wordsList => { setScreen(<Game wordsList={wordsList} />) })
            .catch(err => setScreen(<Error message={err} />))
    }, [])

    return (
        <main>
            {screen}
        </main>
    )
}

export default App