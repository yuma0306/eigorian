<script lang="ts">
	type Props = {
		value: number;
		max: number;
	};

	let { value, max }: Props = $props();
</script>

<progress class="progress-bar" {value} {max}></progress>

<style>
	.progress-bar {
		width: 100%;
		overflow: hidden;
		background-color: var(--color-primary-10);
	}
	.progress-bar::-webkit-progress-bar {
		background-color: var(--color-primary-10);
	}
	.progress-bar::-webkit-progress-value {
		background-color: var(--color-secondary);
		transition: width var(--transition);
	}
	.progress-bar::-moz-progress-bar {
		background-color: var(--color-secondary);
	}
	@media (min-width: 640px) {
		.progress-bar {
			height: calc(var(--spacing-1) * 1px);
			border-radius: calc(var(--border-radius) * 1px);
		}
	}
	@media (max-width: 639px) {
		.progress-bar {
			height: calc(var(--calc-sp) * var(--spacing-1));
			border-radius: calc(var(--calc-sp) * var(--border-radius));
		}
	}
</style>
