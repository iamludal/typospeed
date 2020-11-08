<script>
    import { fade } from "svelte/transition";
</script>

<style>
    #spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 64px;
        height: 64px;
        border: 7px solid;
        border-color: white transparent white transparent;
        border-radius: var(--radius-high);
        pointer-events: none;
        animation: spin 1s forwards infinite linear;
    }

    @keyframes spin {
        from {
            transform: translate(-50%, -50%) rotate(0);
        }
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
</style>

<div id="spinner" out:fade />
