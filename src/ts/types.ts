import { transition, state, createMachine, InterpretOnChangeFunction, Service } from 'robot3';

export type States = typeof GameMachine.current;
export type GameService = Service<typeof GameMachine>;
export type OnChangeListener = InterpretOnChangeFunction<typeof GameMachine>;

export const GameMachine = createMachine('IDLE', {
  IDLE: state(transition('start', 'PLAYING')),
  PLAYING: state(transition('pause', 'PAUSED'), transition('end', 'FINISHED')),
  PAUSED: state(transition('resume', 'PLAY')),
  FINISHED: state(),
});
