<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		symbol: 'dot' | 'asterisk' | 'number' | 'none';
	};

	let { children, symbol }: Props = $props();
</script>

<li class="item" data-symbol={symbol}>
	<div>{@render children()}</div>
</li>

<style>
	.item {
		counter-increment: item;
		position: relative;
		align-items: start;
		display: grid;
		line-height: var(--line-height);
		grid-template-columns: auto 1fr;
		&[data-symbol='dot'] {
			&::before {
				content: '・';
			}
		}
		&[data-symbol='asterisk'] {
			&::before {
				content: '※';
			}
		}
		&[data-symbol='number'] {
			&::before {
				content: counter(item) '.';
			}
		}
		&[data-symbol='none'] {
			&::before {
				content: none;
			}
		}
	}
	@media (min-width: 640px) {
		.item {
			font-size: calc(var(--font-size-1) * 1px);
			column-gap: calc(var(--spacing-1) * 1px);
		}
	}
	@media (max-width: 639px) {
		.item {
			font-size: calc(var(--calc-sp) * var(--font-size-1));
			column-gap: calc(var(--calc-sp) * var(--spacing-1));
		}
	}
</style>
