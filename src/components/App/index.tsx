import React, { useState, useEffect } from 'react'
import { getWords } from '../../ts/utils'
import Loader from '../Loader'
import Error from '../Error'
import './style.scss'
import Game from '../Game'

const App = () => {

    const [screen, setScreen] = useState<JSX.Element>(<Loader />)

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