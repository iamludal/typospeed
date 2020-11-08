<script lang="ts">
    import type { WordProps } from "../ts/types";
    import { fade } from "svelte/transition";

    export let props: WordProps;

    const { value, x, duration } = props;
    const offset = (x + 100) / 2;

    const style = `
        left: ${offset}%;
        animation-duration: ${duration}s;
        --transX: translateX(${-offset}%);
    `;
</script>

<style>
    .word {
        position: absolute;
        padding: 0.8em 1em;
        text-transform: uppercase;
        user-select: none;
        animation: falling forwards linear;
    }

    .word::after {
        content: "";
        position: absolute;
        background: var(--color-secondary);
        opacity: 0.1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--radius-high);
    }

    @keyframes falling {
        from {
            top: 0;
            transform: var(--transX) translateY(-100%);
        }
        to {
            top: 100%;
            transform: var(--transX) translateY(0);
        }
    }
</style>

<div out:fade>
    <div class="word" {style}>{value}</div>
</div>
