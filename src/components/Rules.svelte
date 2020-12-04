<script>
    import { fly } from "svelte/transition";
    import IoMdHelpCircle from "svelte-icons/io/IoMdHelpCircle.svelte";
    import MdClose from "svelte-icons/md/MdClose.svelte";
    import Icon from "./Icon.svelte";
</script>

<style>
    .container {
        position: absolute;
        padding: 1em;
        background: var(--color-secondary-transparent);
        color: var(--color-secondary);
        border-radius: 1em;
        top: 1rem;
        right: 1rem;
        max-width: 30em;
        opacity: 0.8;
        transform: scale(0.9);
        transform-origin: top right;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .close {
        padding: 0.6em;
        box-sizing: content-box;
        border-radius: var(--radius-high);
        background: none;
        border: none;
        width: 1.6em;
        height: 1.6em;
    }

    .close:hover {
        background-color: var(--color-secondary-transparent);
    }

    p {
        text-align: justify;
        margin: 0;
        margin-top: 1em;
    }

    h1 {
        margin: 0.2em 0;
        font-size: 1.8em;
    }
</style>

<div class="container" transition:fly={{ x: 40, duration: 400 }}>
    <div class="header">
        <h1>
            <Icon>
                <IoMdHelpCircle />
            </Icon>
            How to play?
        </h1>
        <button class="close" on:click>
            <MdClose />
        </button>
    </div>
    <p>
        As soon as you'll start the game, words are going to fall out. Type them
        as fast as possible to remove them. If a word reaches the bottom of the
        screen, you'll loose the game. Good luck!
    </p>
</div>
