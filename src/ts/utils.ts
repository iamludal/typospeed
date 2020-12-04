import type { Scores, words } from "./types"
import { v4 as uuidv4, validate } from "uuid"

const WORDS_URL = "assets/data/words.json"

/**
 * Get the words list (from local storage or url), and store it if not stored
 * 
 * @returns a Promise, which resolves in the words list (array of string)
 */
export async function getWords(): Promise<words> {
    let wordsList: words = JSON.parse(localStorage.getItem('words'))

    if (!wordsList) {
        wordsList = await fetchWordsList()
        localStorage.setItem('words', JSON.stringify(wordsList))
    }

    return wordsList
}

/**
 * Fetch the words list
 * 
 * @returns a Promise, which resolves in the words list (array of string)
 */
async function fetchWordsList(): Promise<words> {
    return fetch(WORDS_URL).then(data => data.json())
}

/**
 * Get the last score and best score from previous games. If no scores were
 * found, set their values to 0
 * 
 * @returns the scores
 */
export function getScores(): Scores {
    const last = parseInt(localStorage.getItem('last')) || 0
    const best = parseInt(localStorage.getItem('best')) || last

    return { best, last }
}

/**
 * Save the score into the local storage
 * 
 * @param score the score
 */
export function saveScore(score: number): void {
    const localBest = parseInt(localStorage.getItem('best')) || 0
    const best = Math.max(score, localBest)

    localStorage.setItem('best', best.toString())
    localStorage.setItem('last', score.toString())
}

/**
 * Return true if the user is new (opening the game for the first time)
 */
export function userIsNew(): Boolean {
    const uuid = localStorage.getItem('uuid') || ''
    return !validate(uuid)
}

export function registerUser(): void {
    localStorage.setItem('uuid', uuidv4())
}