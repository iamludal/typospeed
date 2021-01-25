import { Machine, Interpreter, AnyEventObject, State } from 'xstate'
import { StateListener } from 'xstate/lib/interpreter'

export interface WordProps {
    value: string,
    x: number,
    duration: number,
    id: string,
    [otherProp: string]: any
}

export type words = Array<string>

export interface Scores {
    best: number,
    last: number
}

export type GameStates = 'IDLE' | 'PLAYING' | 'OVER'

export const GameMachine = Machine({
    id: 'game',
    initial: 'IDLE',
    states: {
        IDLE: {
            on: { start: 'PLAYING' }
        },
        PLAYING: {
            on: { end: 'OVER' }
        },
        OVER: {}
    }
})

export type GameInterpreter = Interpreter<typeof GameMachine>
export type stateChangeListener = StateListener<any, AnyEventObject>

console.log(GameMachine.states)