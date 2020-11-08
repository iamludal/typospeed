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

    let game = new Game(wordsList, handleStateChange);

    const handleMenu = () => {
        state = "IDLE";
        game = new Game(wordsList, handleStateChange);
    };

    const handlePlayAgain = () => {
        game = new Game(wordsList, handleStateChange);
        game.start();
    };
</script>

{#if state == 'IDLE'}
    <StartMenu on:click={() => game.start()} />
{:else if state == 'PLAYING'}
    <Playground {game} />
{:else if state == 'FINISHED'}
    <EndScreen
        scores={getScores()}
        on:menu={handleMenu}
        on:playagain={handlePlayAgain} />
{/if}
