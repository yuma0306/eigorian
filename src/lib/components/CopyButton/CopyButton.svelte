<script lang="ts">
	import type { Phrase } from '$lib/types';
	import CopyIcon from '../Icon/CopyIcon.svelte';

	type Props = {
		text: Phrase['thai'];
	};

	let { text }: Props = $props();
	let copied = $state(false);

	async function copyToClipboard(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
</script>

<button
	onclick={() => copyToClipboard(text)}
	class="button"
	title={copied ? 'コピーしました！' : 'コピー'}
>
	<CopyIcon />
</button>

<style>
	.button {
		display: grid;
		place-content: center;
		background-color: var(--color-primary-10);
		border: 1px solid var(--color-primary);
		line-height: 1;
		transition: opacity var(--transition);
		@media (hover: hover) {
			&:hover {
				opacity: var(--opacity);
			}
		}
		&:active {
			opacity: var(--opacity);
		}
	}
	@media (min-width: 640px) {
		.button {
			cursor: pointer;
			padding: calc(var(--spacing-1) * 1px);
			border-radius: calc(var(--border-radius) * 1px);
		}
	}
	@media (max-width: 639px) {
		.button {
			border-radius: calc(var(--calc-sp) * var(--border-radius));
			padding: calc(var(--calc-sp) * var(--spacing-1));
		}
	}
</style>
