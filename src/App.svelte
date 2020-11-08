<script lang="ts">
    import Loader from "./components/Loader.svelte";
    import { getWords } from "./ts/utils";
    import Game from "./components/Game.svelte";

    const wordsPromise = getWords();
</script>

<style>
    :global(:root) {
        --color-primary: #3498db;
        --color-secondary: #fff;
        --color-secondary-transparent: rgba(255, 255, 255, 0.1);
        --font-family: "Montserrat";
        --transition: 0.3s;
        --radius-high: 500em;
    }

    :global(*) {
        box-sizing: border-box;
    }

    :global(body) {
        background: var(--color-primary);
        margin: 0;
        font-family: var(--font-family), sans-serif;
        color: var(--color-secondary);
        overflow: hidden;
    }

    :global(button) {
        border: none;
        outline: none;
        cursor: pointer;
    }

    :global(button, input) {
        color: var(--color-secondary);
        outline: none;
        border: none;
    }

    :global(.hidden) {
        opacity: 0;
        pointer-events: none;
    }

    .error {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
</style>

{#await wordsPromise}
    <Loader />
{:then wordsList}
    <Game {wordsList} />
{:catch e}
    <p class="error">An error occurred: {e.message}</p>
{/await}
