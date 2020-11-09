<script lang="ts">
    import { onMount } from "svelte/internal";
    import type Game from "../ts/Game";
    import type { WordProps } from "../ts/types";
    import Word from "./Word.svelte";
    import { fade } from "svelte/transition";

    export let game: Game;

    let score: number = 0;
    let typedWord: string = "";
    let input: HTMLInputElement;
    let invalidInput: Boolean = false;
    let fallingWords: Array<WordProps> = [];

    game.registerWordsListener((updatedList: Array<WordProps>) => {
        fallingWords = updatedList;
    });

    game.registerScoreListener((newScore: number) => {
        score = newScore;
    });

    onMount(() => handleBlur());

    const handleBlur = () => input.focus();

    const handleKeyUp = (e: KeyboardEvent) => {
        invalidInput = false;
        if (e.key == "Enter") {
            if (game.handle(typedWord)) typedWord = "";
            else invalidInput = true;
        }
    };
</script>

<style>
    .playground {
        height: 100vh;
    }

    .words-container {
        height: 100vh;
        width: 100vw;
    }

    .bottom-bar {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
    }

    .input {
        padding: 0.6em 0;
        background: var(--color-primary);
        text-transform: uppercase;
        text-align: center;
        font-size: 1.1em;
        border-radius: var(--radius-high);
        background: var(--color-secondary-transparent);
        transition: transform var(--transition);
    }

    .input.invalid {
        animation: invalid 0.2s forwards linear;
    }

    .score {
        opacity: 0.9;
        padding: 0.5em;
    }

    @keyframes invalid {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-10%);
        }
        75% {
            transform: translateX(10%);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>

<div class="playground" transition:fade={{ duration: 500 }}>
    <div class="words-container">
        {#each fallingWords as props (props.id)}
            <Word {props} />
        {/each}
    </div>
    <div class="bottom-bar">
        <div class="score">Score: {score}</div>
        <input
            class="input"
            type="text"
            spellcheck={false}
            bind:value={typedWord}
            bind:this={input}
            on:keyup={handleKeyUp}
            on:blur={handleBlur}
            class:invalid={invalidInput} />
    </div>
</div>
