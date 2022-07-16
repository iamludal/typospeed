<script lang="ts">
  import Playground from './Playground.svelte';
  import StartMenu from './StartMenu.svelte';
  import EndScreen from './EndScreen.svelte';
  import Game from '../ts/game';
  import type { GameService, States } from '../ts/types';
  import { onMount } from 'svelte';
  import settings from '../store/settings';
  import { loadSettings } from '../services/settings';
  import { getScores, saveScore } from '../services/score';
  import type { Words } from '../services/words';

  export let wordsList: Words;

  let state: States = 'IDLE';
  let game: Game;

  let soundsEnabled: boolean = loadSettings().soundsEnabled;

  const handleStateChange = (gs: GameService) => {
    state = gs.machine.current;

    if (state == 'FINISHED') saveScore(game.score);
  };

  const setState = (newState: States) => (state = newState);

  const start = () => {
    game = new Game(wordsList, handleStateChange, soundsEnabled);
    game.start();
  };

  onMount(() => {
    settings.subscribe(settings => (soundsEnabled = settings.soundsEnabled));
  });
</script>

{#if state == 'IDLE'}
  <StartMenu on:start={start} />
{:else if state == 'PLAYING'}
  <Playground {game} />
{:else if state == 'FINISHED'}
  <EndScreen scores={getScores()} on:menu={() => setState('IDLE')} on:playagain={start} />
{/if}
