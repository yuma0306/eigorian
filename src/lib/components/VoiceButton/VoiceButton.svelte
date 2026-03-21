<script lang="ts">
	import type { Phrase } from '$lib/types';
	import SoundIcon from '../Icon/SoundIcon.svelte';

	type Props = {
		text: Phrase['thai'];
	};

	let { text }: Props = $props();
	let isSpeaking = $state(false);

	function speak(text: string) {
		if (isSpeaking) return;
		isSpeaking = true;
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.lang = 'th-TH';
		utterance.onend = () => {
			isSpeaking = false;
		};
		utterance.onerror = () => {
			isSpeaking = false;
		};
		speechSynthesis.speak(utterance);
	}

	$effect(() => {
		const interval = setInterval(() => {
			isSpeaking = speechSynthesis.speaking;
		}, 100);
		return () => clearInterval(interval);
	});
</script>

<button onclick={() => speak(text)} class="button" disabled={isSpeaking}>
	<SoundIcon />
</button>

<style>
	.button {
		display: grid;
		place-content: center;
		background-color: var(--color-primary-10);
		border: 1px solid var(--color-primary);
		line-height: 1;
		@media (hover: hover) {
			&:hover {
				opacity: var(--opacity);
			}
		}
		&:active {
			opacity: var(--opacity);
		}
		&:disabled {
			opacity: var(--opacity);
			cursor: not-allowed;
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
