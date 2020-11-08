import type { OnChangeListener, WordProps, words } from "./types"
import { interpret, Service } from 'robot3'
import { GameMachine } from './types'

class Game {

    private _fallTime = 2 * 1000
    private _score = 0;
    private _wordsList: words;
    private _fallingWords: WordProps[] = []
    private _wordsListener: Function
    private _scoreListener: Function
    private _interval: number
    private state: Service<typeof GameMachine>

    constructor(wordsList: words, stateListener: OnChangeListener) {
        this._wordsList = wordsList
        this.state = interpret(GameMachine, stateListener)
    }

    public start() {
        this.state.send('start')
        this._interval = setInterval(this.addWord.bind(this), this._fallTime)
    }

    public get fallingWords(): WordProps[] {
        return this._fallingWords
    }

    public set fallingWords(fallingWords: WordProps[]) {
        this._fallingWords = fallingWords
        this._wordsListener(fallingWords)
    }

    public get score(): number {
        return this._score
    }

    public set score(x: number) {
        this._score = x
        this._scoreListener(x)
    }

    public handle(word: string): Boolean {
        const valid = this.isValid(word)

        if (valid) {
            const removed: WordProps = this.removeWord(word)
            this.applyScore(removed)
            clearInterval(removed.timeout)
        }

        return valid
    }

    public isValid(word: string): Boolean {
        return this.fallingWords.some(w => w.value == word)
    }

    public removeWord(word: string): WordProps {
        const index = this.fallingWords.findIndex(w => w.value == word)
        const toRemove = this.fallingWords[index]
        this.fallingWords = this.fallingWords.filter((_, i) => i != index)
        return toRemove
    }

    private applyScore(word: WordProps): void {
        this.score += Math.round(word.value.length * (100 / word.duration))
    }

    private addWord(): void {
        const newWord = this.generateWord()
        this.fallingWords = [...this.fallingWords, newWord]
    }

    private generateWord(): WordProps {
        const i = Math.floor(Math.random() * this._wordsList.length)
        const value = this._wordsList[i]
        const x = this.randomPos()
        const duration = 10

        return {
            x,
            value,
            duration,
            id: value + x,
            timeout: setTimeout(this.loose.bind(this), duration * 1000)
        }
    }

    private loose(): void {
        this.state.send('end')
        clearInterval(this._interval)

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

    public registerWordsListener(listener: (word: WordProps[]) => any): void {
        this._wordsListener = listener;
    }

    public registerScoreListener(listener: (score: number) => any): void {
        this._scoreListener = listener;
    }
}

export default Game