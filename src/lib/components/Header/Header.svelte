<script lang="ts">
	import Inner from '$lib/components/Inner/Inner.svelte';
	import Logo from '$lib/components/Logo/Logo.svelte';
</script>

<header class="header">
	<Inner>
		<Logo />
	</Inner>
</header>

<style>
	.header {
		background-color: var(--color-primary);
	}
	@media (min-width: 640px) {
		.header {
			padding: calc(var(--spacing-2) * 1px);
		}
	}
	@media (max-width: 639px) {
		.header {
			padding: calc(var(--calc-sp) * var(--spacing-2));
		}
	}
</style>
