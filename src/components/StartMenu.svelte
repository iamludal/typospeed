<script lang="ts">
    import { fade } from "svelte/transition";
    import { getScores, userIsNew, registerUser } from "../ts/utils";
    import { createEventDispatcher } from "svelte";
    import PlayCircle from "svelte-icons/md/MdPlayArrow.svelte";
    import FaMedal from "svelte-icons/fa/FaMedal.svelte";
    import Rules from "./Rules.svelte";
    import Icon from "./Icon.svelte";
    import type { Scores } from "../ts/types";
    import IoMdHelpCircle from "svelte-icons/io/IoMdHelpCircle.svelte";

    export let scores: Scores = getScores();
    let isNew: Boolean = userIsNew();

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
        display: flex;
        position: absolute;
        background: var(--color-secondary-transparent);
        padding: 20px;
        border-radius: var(--radius-high);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: var(--transition);
        font-size: 2em;
    }

    #play:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .help {
        top: 1rem;
        right: 1rem;
        position: absolute;
        font-size: 2em;
        opacity: 0.6;
        transition: var(--transition);
        background: none;
    }

    .help:hover {
        opacity: 0.8;
        transform: scale(1.05);
    }
</style>

<div id="start-menu" class:hidden transition:fade={{ duration: 500 }}>
    <div id="scores">
        <div>
            <Icon>
                <FaMedal />
            </Icon>
            Best score:
            <strong>{best}</strong>
        </div>
        <div>Last score: <strong>{last}</strong></div>
    </div>
    <button id="play" on:click={() => dispatch('start')}>
        <Icon>
            <PlayCircle />
        </Icon>
    </button>
    {#if isNew}
        <Rules
            on:click={() => {
                registerUser();
                isNew = false;
            }} />
    {:else}
        <button
            class="help"
            title="Click me for help"
            on:click={() => (isNew = true)}
            transition:fade={{ duration: 200 }}>
            <Icon>
                <IoMdHelpCircle />
            </Icon>
        </button>
    {/if}
</div>
