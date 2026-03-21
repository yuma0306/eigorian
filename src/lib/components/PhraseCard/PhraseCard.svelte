<script lang="ts">
	import type { Phrase } from '$lib/types';
	import FlexColumn from '../FlexColumn/FlexColumn.svelte';
	import ListItem from '../ListItem/ListItem.svelte';
	import Stack from '../Stack/Stack.svelte';
	import Typography from '../Typography/Typography.svelte';
	import VoiceButton from '../VoiceButton/VoiceButton.svelte';
	import CopyButton from '../CopyButton/CopyButton.svelte';

	type CardProps = {
		phrase: Phrase;
	};

	let { phrase }: CardProps = $props();
</script>

<div class="card" data-has-words={phrase.words && phrase.words.length > 0}>
	<Stack size={1} variant="dl">
		<FlexColumn gap={1} variant="dt" alignItems="center" justifyContent="start">
			<Typography size={4} variant="p" color="primary" weight="bold" align="left">
				{phrase.thai}
			</Typography>
			<VoiceButton text={phrase.thai} />
			<CopyButton text={phrase.thai} />
		</FlexColumn>
		<Typography size={2} variant="dd" color="dark" weight="normal" align="left">
			{phrase.japanese}
		</Typography>
		{#if phrase.english}
			<Typography size={2} variant="span" color="dark" weight="normal" align="left">
				{phrase.english}
			</Typography>
		{/if}
	</Stack>
	{#if phrase.words && phrase.words.length > 0}
		<div class="footer">
			<Stack size={2} variant="ul">
				{#each phrase.words as word}
					<ListItem symbol="none">
						<FlexColumn
							gap={1}
							variant="div"
							alignItems="center"
							justifyContent="start"
							isWrap={true}
						>
							<Typography size={2} variant="span" color="primary" weight="bold" align="left">
								{word.thai}
							</Typography>
							<Typography size={2} variant="span" color="dark" weight="normal" align="left">
								{word.meaning}
							</Typography>
							<FlexColumn
								gap={1}
								variant="div"
								alignItems="center"
								justifyContent="start"
								isWrap={true}
							>
								<VoiceButton text={word.thai} />
								<CopyButton text={word.thai} />
							</FlexColumn>
						</FlexColumn>
					</ListItem>
				{/each}
			</Stack>
		</div>
	{/if}
</div>

<style>
	.card {
		position: relative;
		display: grid;
		align-items: start;
		background-color: var(--color-white);
	}
	@media (min-width: 640px) {
		.card {
			row-gap: calc(var(--spacing-4) * 1px);
			column-gap: calc(var(--spacing-4) * 1px);
			&[data-has-words='true'] {
				grid-template-columns: 1fr 1fr;
				&::before {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					width: 1px;
					height: 100%;
					background-color: var(--color-gray);
					translate: 0 -50%;
				}
			}
		}
	}
	@media (max-width: 639px) {
		.card {
			&[data-has-words='true'] {
				gap: calc(var(--spacing-4) * var(--calc-sp));
				grid-template-rows: auto 1fr;
			}
		}
	}
	.footer {
		position: relative;
	}
	@media (max-width: 639px) {
		.footer {
			&::before {
				content: '';
				position: absolute;
				top: calc(-1 * var(--spacing-2) * var(--calc-sp));
				left: 0;
				width: 100%;
				height: 1px;
				background-color: var(--color-gray);
			}
		}
	}
</style>
