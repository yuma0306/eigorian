<script lang="ts">
	import { paths } from '$lib/constants/paths';

	type CrumbItem = {
		text: string;
		href: string;
	};
	type Props = {
		items: CrumbItem[];
	};

	const HOME_CRUMB: CrumbItem = { text: 'ホーム', href: paths.home };

	let { items }: Props = $props();
	const allItems = $derived([HOME_CRUMB, ...items]);
</script>

<ul class="crumbs">
	{#each allItems as item, index}
		<li class="crumbs__item">
			{#if index === allItems.length - 1}
				<span class="crumbs__text">{item.text}</span>
			{:else}
				<a class="crumbs__link" href={item.href}>{item.text}</a>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.crumbs {
		display: flex;
		align-items: end;
		overflow-x: auto;
		white-space: nowrap;
	}
	@media (min-width: 640px) {
		.crumbs {
			gap: calc(var(--spacing-4) * 1px);
			padding-bottom: calc(var(--spacing-2) * 1px);
		}
	}
	@media (max-width: 639px) {
		.crumbs {
			gap: calc(var(--calc-sp) * var(--spacing-4));
			padding-bottom: calc(var(--calc-sp) * var(--spacing-2));
		}
	}
	.crumbs__item {
		position: relative;
		&:not(:last-of-type)::after {
			position: absolute;
			top: 50%;
			translate: 50% -50%;
			rotate: 45deg;
			content: '';
		}
	}
	@media (min-width: 640px) {
		.crumbs__item {
			&:not(:last-of-type)::after {
				right: calc(var(--spacing-2) * -1px);
				width: calc(var(--spacing-1) * 1px);
				height: calc(var(--spacing-1) * 1px);
				border-top: 2px solid var(--color-dark);
				border-right: 2px solid var(--color-dark);
			}
		}
	}
	@media (max-width: 639px) {
		.crumbs__item {
			&:not(:last-of-type)::after {
				right: calc(var(--calc-sp) * var(--spacing-2) * -1);
				width: calc(var(--calc-sp) * var(--spacing-1));
				height: calc(var(--calc-sp) * var(--spacing-1));
				border-top: calc(var(--calc-sp) * 2) solid var(--color-dark);
				border-right: calc(var(--calc-sp) * 2) solid var(--color-dark);
			}
		}
	}
	.crumbs__link {
		text-decoration: underline;
		color: var(--color-primary);
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
		.crumbs__link {
			font-size: calc(var(--font-size-2) * 1px);
			transition: opacity var(--transition);
			&:hover {
				opacity: var(--opacity);
			}
		}
	}
	@media (max-width: 639px) {
		.crumbs__link {
			font-size: calc(var(--calc-sp) * var(--font-size-2));
		}
	}
	.crumbs__text {
		color: var(--color-primary);
	}
	@media (min-width: 640px) {
		.crumbs__text {
			font-size: calc(var(--font-size-2) * 1px);
		}
	}
	@media (max-width: 639px) {
		.crumbs__text {
			font-size: calc(var(--calc-sp) * var(--font-size-2));
		}
	}
</style>
