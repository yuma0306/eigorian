<script lang="ts">
	import type { Snippet } from 'svelte';
	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="inner">
	{@render children()}
</div>

<style>
	.inner {
		width: 100%;
		margin-inline: auto;
	}
	@media (min-width: 640px) {
		.inner {
			max-width: 1200px;
		}
	}
</style>
