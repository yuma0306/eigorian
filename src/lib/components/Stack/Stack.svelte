<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type CommonProps = {
		size: 1 | 2 | 3 | 4 | 5;
		variant: 'div' | 'ul' | 'section' | 'dl' | 'li';
		children: Snippet;
	};
	type Props = CommonProps & HTMLAttributes<HTMLElement>;

	let props: Props = $props();
</script>

<svelte:element this={props.variant} class="stack" data-size={props.size} {...props}>
	{@render props.children()}
</svelte:element>

<style>
	.stack {
		display: grid;
	}
	@media (min-width: 640px) {
		.stack {
			&[data-size='1'] {
				row-gap: calc(var(--spacing-1) * 1px);
			}
			&[data-size='2'] {
				row-gap: calc(var(--spacing-2) * 1px);
			}
			&[data-size='3'] {
				row-gap: calc(var(--spacing-3) * 1px);
			}
			&[data-size='4'] {
				row-gap: calc(var(--spacing-4) * 1px);
			}
			&[data-size='5'] {
				row-gap: calc(var(--spacing-5) * 1px);
			}
		}
	}
	@media (max-width: 639px) {
		.stack {
			&[data-size='1'] {
				row-gap: calc(var(--calc-sp) * var(--spacing-1));
			}
			&[data-size='2'] {
				row-gap: calc(var(--calc-sp) * var(--spacing-2));
			}
			&[data-size='3'] {
				row-gap: calc(var(--calc-sp) * var(--spacing-3));
			}
			&[data-size='4'] {
				row-gap: calc(var(--calc-sp) * var(--spacing-4));
			}
			&[data-size='5'] {
				row-gap: calc(var(--calc-sp) * var(--spacing-5));
			}
		}
	}
</style>
