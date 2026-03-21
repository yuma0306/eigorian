<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="wrapper">
	{@render children()}
</div>

<style>
	.wrapper {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
</style>
