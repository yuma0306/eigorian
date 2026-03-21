<script lang="ts">
	type Props = {
		expanded?: boolean;
		showLabel: string;
		hideLabel: string;
		ariaLabel: string;
		onclick?: (e: MouseEvent) => void;
	};

	let { expanded = false, showLabel, hideLabel, ariaLabel, onclick }: Props = $props();
</script>

<button type="button" class="toggle-reveal-button" {onclick} aria-label={ariaLabel}>
	{expanded ? hideLabel : showLabel}
</button>

<style>
	.toggle-reveal-button {
		background: var(--color-primary-10);
		border: 1px solid var(--color-primary);
		color: var(--color-primary);
		transition: opacity var(--transition);
		cursor: pointer;
	}
	.toggle-reveal-button:hover {
		opacity: var(--opacity);
	}
	.toggle-reveal-button:active {
		opacity: var(--opacity);
	}
	@media (min-width: 640px) {
		.toggle-reveal-button {
			border-radius: calc(var(--border-radius) * 1px);
			padding: calc(var(--spacing-1) * 1px);
			font-size: calc(var(--font-size-2) * 1px);
		}
	}
	@media (max-width: 639px) {
		.toggle-reveal-button {
			border-radius: calc(var(--calc-sp) * var(--border-radius));
			padding: calc(var(--calc-sp) * var(--spacing-1));
			font-size: calc(var(--calc-sp) * var(--font-size-2));
		}
	}
</style>
