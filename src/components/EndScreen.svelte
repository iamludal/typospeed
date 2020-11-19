<script lang="ts">
    import type { Scores } from "../ts/types";
    import { createEventDispatcher } from "svelte";
    import PlayCircle from "svelte-icons/md/MdPlayArrow.svelte";
    import MdMenu from "svelte-icons/md/MdMenu.svelte";
    import FaRegSadCry from "svelte-icons/fa/FaRegSadCry.svelte";

    export let scores: Scores;

    const { last, best } = scores;

    const dispatch = createEventDispatcher();
</script>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .btn {
        background: var(--color-secondary);
        border-radius: var(--radius-high);
        padding: 0.6em 1em;
        font-weight: bold;
        font-size: 1.05em;
        color: var(--color-primary);
        margin: 0.5em;
        transition: var(--transition);
        border: 0.2em solid var(--color-secondary);
    }

    .btn:hover {
        color: var(--color-secondary);
        background: transparent;
    }
</style>

<div class="wrapper">
    <h1>
        <FaRegSadCry />
        Game Over!
    </h1>

    <h2>Your score: {last}</h2>
    <p>Best score: {best}</p>

    <div>
        <button class="btn" on:click={() => dispatch('menu')}>
            <MdMenu />
            Menu
        </button>
        <button class="btn" on:click={() => dispatch('playagain')}>
            <PlayCircle />
            Play again
        </button>
    </div>
</div>
