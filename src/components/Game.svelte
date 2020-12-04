<script lang="ts">
    import Playground from "./Playground.svelte";
    import StartMenu from "./StartMenu.svelte";
    import EndScreen from "./EndScreen.svelte";
    import Game from "../ts/Game";
    import type { GameService, States, words } from "../ts/types";
    import { getScores, saveScore } from "../ts/utils";

    export let wordsList: words;

    let state: States = "IDLE";

    const handleStateChange = (gs: GameService) => {
        state = gs.machine.current;

        if (state == "FINISHED") saveScore(game.score);
    };

    let game;

    const setState = (newState: States) => (state = newState);

    const start = () => {
        game = new Game(wordsList, handleStateChange);
        game.start();
    };
</script>

{#if state == 'IDLE'}
    <StartMenu on:start={start} />
{:else if state == 'PLAYING'}
    <Playground {game} />
{:else if state == 'FINISHED'}
    <EndScreen
        scores={getScores()}
        on:menu={() => setState('IDLE')}
        on:playagain={start} />
{/if}
