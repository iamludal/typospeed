<script lang="ts">
    import { onMount } from "svelte/internal";
    import type Game from "../ts/Game";
    import type { WordProps } from "../ts/types";
    import Word from "./Word.svelte";
    import { fade } from "svelte/transition";
    import MdStars from "svelte-icons/md/MdStars.svelte";
    import Icon from "./Icon.svelte";

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
            if (!game.handle(typedWord)) invalidInput = true;
            typedWord = "";
        }
    };
</script>

<style>
    .playground {
        height: 100vh;
    }

    .playground.invalid {
        animation: invalid 0.2s 2 alternate backwards;
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

    .score {
        opacity: 0.9;
        padding: 0.5em;
    }

    @keyframes invalid {
        75%,
        100% {
            background-color: #db3434;
        }
    }
</style>

<div
    class="playground"
    class:invalid={invalidInput}
    transition:fade={{ duration: 500 }}>
    <div class="words-container">
        {#each fallingWords as props (props.id)}
            <Word {props} />
        {/each}
    </div>
    <div class="bottom-bar">
        <div class="score">
            <Icon>
                <MdStars />
            </Icon>
            Score:
            {score}
        </div>
        <input
            class="input"
            type="text"
            spellcheck={false}
            bind:value={typedWord}
            bind:this={input}
            on:keyup={handleKeyUp}
            on:blur={handleBlur} />
    </div>
</div>
