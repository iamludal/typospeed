import { interpret } from 'xstate'
import { GameMachine } from './types'
import type {
    GameInterpreter,
    stateChangeListener,
    WordAttributes,
    words
} from './types'

class Game {

    private _fallTime = 2 * 1000 // drop a word every 2s (2000ms)
    private _duration = 10 // word time (in sec) to reach bottom of screen
    private _score = 0
    private _wordsList: words
    private _fallingWords: WordAttributes[] = []
    private _wordsListener?: Function
    private _scoreListener?: Function
    private _intervals: Record<string, number> = {}
    private state: GameInterpreter

    constructor(wordsList: words, stateListener: stateChangeListener) {
        this._wordsList = wordsList
        this.state = interpret(GameMachine)
            .onTransition(stateListener)
            .start()
    }

    public start(): void {
        this.state.send('start')
        this.updateFallInterval()

        this._intervals.difficulty = window.setInterval(() => {
            this.increaseDifficulty()
        }, 20 * 1000)
    }

    private increaseDifficulty(): void {
        this._fallTime -= 200
        this._duration -= .8
        this.updateFallInterval()
    }

    private updateFallInterval(): void {
        clearInterval(this._intervals.fall)
        this._intervals.fall = window.setInterval(() => {
            this.addWord()
        }, this._fallTime)
    }

    public get fallingWords(): WordAttributes[] {
        return this._fallingWords
    }

    public set fallingWords(fallingWords: WordAttributes[]) {
        this._fallingWords = fallingWords

        if (this._wordsListener)
            this._wordsListener(fallingWords)
    }

    public get score(): number {
        return this._score
    }

    public set score(x: number) {
        this._score = x

        if (this._scoreListener)
            this._scoreListener(x)
    }

    public handle(typedWord: string): boolean {
        const word = typedWord.toLocaleLowerCase()
        const valid = this.isValid(word)

        if (valid) {
            const removed: WordAttributes = this.removeWord(word)
            this.applyScore(removed)
            clearInterval(removed.timeout)
        }

        return valid
    }

    private isValid(word: string): boolean {
        return this.fallingWords.some(w => w.value == word)
    }

    private removeWord(word: string): WordAttributes {
        const index = this.fallingWords.findIndex(w => w.value == word)
        const toRemove = this.fallingWords[index]
        this.fallingWords = this.fallingWords.filter((_, i) => i != index)
        clearInterval(toRemove.timeout)
        return toRemove
    }

    private applyScore(word: WordAttributes): void {
        this.score += Math.round(word.value.length * (100 / word.duration))
    }

    private addWord(): void {
        const newWord = this.generateWord()
        this.fallingWords = [...this.fallingWords, newWord]
    }

    private generateWord(): WordAttributes {
        const i = Math.floor(Math.random() * this._wordsList.length)
        const value = this._wordsList[i]
        const x = this.randomPos()
        const duration = this._duration

        return {
            x,
            value,
            duration,
            id: value + x,
            timeout: setTimeout(() => this.loose(), duration * 1000)
        }
    }

    private loose(): void {
        this.state.send('end')

        for (let interval of Object.values(this._intervals))
            clearInterval(interval)

        for (let word of this.fallingWords)
            this.removeWord(word.value)
    }

    private randomPos(): number {
        return this.randint(-100, 100)
    }

    private randint(lowerBound: number, upperBound: number): number {
        const delta = upperBound - lowerBound
        return Math.round(Math.random() * delta) + lowerBound
    }

    public registerWordsListener(listener: (word: WordAttributes[]) => any): void {
        this._wordsListener = listener
    }

    public registerScoreListener(listener: (score: number) => any): void {
        this._scoreListener = listener
    }
}

export default Game