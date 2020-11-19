<script lang="ts">
    import { fade } from "svelte/transition";
    import { getScores } from "../ts/utils";
    import { createEventDispatcher } from "svelte";

    export let scores = getScores();

    const { best, last } = scores;
    const dispatch = createEventDispatcher();

    let hidden = false;
</script>

<style>
    #start-menu {
        transition: var(--transition);
    }

    #start-menu.hidden #play {
        transform: translate(-50%, -50%) scale(10);
    }

    #start-menu.hidden #scores {
        transform: translateY(-100%);
    }

    #scores {
        flex-direction: column;
        padding: 20px;
        position: absolute;
        top: 0;
        left: 0;
        columns: 2;
        column-rule: 1px solid var(--color-secondary);
        transition: var(--transition);
    }

    #play {
        position: absolute;
        background: var(--color-secondary-transparent);
        width: 100px;
        height: 100px;
        border-radius: var(--radius-high);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: var(--transition);
        font-size: 1.2em;
    }

    #play:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }
</style>

<div id="start-menu" class:hidden transition:fade={{ duration: 500 }}>
    <div id="scores">
        <div>Best score: {best}</div>
        <div>Last score: {last}</div>
    </div>
    <button id="play" on:click={() => dispatch('start')}>PLAY</button>
</div>
