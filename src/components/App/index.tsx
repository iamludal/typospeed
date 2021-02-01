import React, { useState, useEffect, ReactNode } from 'react'
import { getWords } from '../../ts/utils'
import Loader from '../Loader'
import Error from '../Error'
import GameUI from '../GameUI'
import Context from './Context'
import './style.scss'

const App: React.FC = () => {

    const [screen, setScreen] = useState<ReactNode>(<Loader />)

    useEffect(() => {
        getWords()
            .then(wordsList => { setScreen(<GameUI wordsList={wordsList} />) })
            .catch(err => setScreen(<Error message={err} />))
    }, [])

    return (
        <Context>
            <main>
                {screen}
            </main>
        </Context>
    )
}

export default App