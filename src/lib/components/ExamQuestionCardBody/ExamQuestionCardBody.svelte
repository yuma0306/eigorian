<script lang="ts">
	import type { ExamQuestion } from '$lib/types';
	import Stack from '$lib/components/Stack/Stack.svelte';
	import Typography from '$lib/components/Typography/Typography.svelte';
	import FlexColumn from '$lib/components/FlexColumn/FlexColumn.svelte';
	import ListItem from '$lib/components/ListItem/ListItem.svelte';
	import VoiceButton from '$lib/components/VoiceButton/VoiceButton.svelte';
	import CopyButton from '$lib/components/CopyButton/CopyButton.svelte';

	type Props = {
		question: ExamQuestion;
	};

	let { question }: Props = $props();
</script>

{#if question.options && question.options.length > 0}
	<ul>
		{#each question.options as option, i}
			<li
				class="option"
				data-is-correct={option.isCorrect}
				data-has-words={option.words && option.words.length > 0}
			>
				<div class="option-inner">
					<FlexColumn
						gap={1}
						variant="div"
						alignItems="center"
						justifyContent="start"
						isWrap={true}
					>
						<Typography size={2} variant="span" color="primary" weight="normal" align="left">
							{i + 1}.
						</Typography>
						<Typography size={2} variant="span" color="primary" weight="bold" align="left">
							{option.option}
						</Typography>
						<FlexColumn
							gap={1}
							variant="div"
							alignItems="center"
							justifyContent="start"
							isWrap={true}
						>
							{#if option.option}
								<VoiceButton text={option.option} />
								<CopyButton text={option.option} />
							{/if}
						</FlexColumn>
					</FlexColumn>
					{#if option.meaning}
						<Typography size={2} variant="span" color="dark" weight="normal" align="left">
							{option.meaning}
						</Typography>
					{/if}
				</div>
				{#if option.words?.length}
					<Stack size={1} variant="ul">
						{#each option.words as word}
							<ListItem symbol="none">
								<FlexColumn
									gap={1}
									variant="div"
									alignItems="center"
									justifyContent="start"
									isWrap={true}
								>
									<Typography size={2} variant="span" color="primary" weight="bold" align="left">
										{word.word}
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
										{#if word.word}
											<VoiceButton text={word.word} />
											<CopyButton text={word.word} />
										{/if}
									</FlexColumn>
								</FlexColumn>
							</ListItem>
						{/each}
					</Stack>
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	.option {
		display: grid;
		align-items: start;
	}
	.option-inner {
		display: grid;
		align-items: start;
	}
	@media (min-width: 640px) {
		.option {
			row-gap: calc(var(--spacing-1) * 1px);
			padding: calc(var(--spacing-2) * 1px);
			border-bottom: 1px solid var(--color-gray);
			&:first-of-type {
				border-top: 1px solid var(--color-gray);
			}
			&[data-is-correct='true'] {
				border-left: 3px solid var(--color-success);
			}
			&[data-has-words='true'] {
				grid-template-columns: 1fr 1fr;
				position: relative;
				gap: calc(var(--spacing-4) * 1px);
				&::before {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					width: 1px;
					height: calc(100% - calc(var(--spacing-4) * 1px));
					background-color: var(--color-gray);
					translate: 0 -50%;
				}
			}
		}
		.option-inner {
			gap: calc(var(--spacing-1) * 1px);
		}
	}
	@media (max-width: 639px) {
		.option {
			row-gap: calc(var(--calc-sp) * var(--spacing-1));
			padding: calc(var(--calc-sp) * var(--spacing-2));
			border-bottom: calc(var(--calc-sp) * 1) solid var(--color-gray);
			&:first-of-type {
				border-top: calc(var(--calc-sp) * 1) solid var(--color-gray);
			}
			&[data-is-correct='true'] {
				border-left: calc(var(--calc-sp) * 3) solid var(--color-success);
			}
		}
		.option-inner {
			gap: calc(var(--calc-sp) * var(--spacing-1));
		}
	}
</style>
