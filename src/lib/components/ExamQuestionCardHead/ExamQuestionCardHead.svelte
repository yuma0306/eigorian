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

<div class="question-block" data-has-words={question.words && question.words.length > 0}>
	<Stack size={1} variant="div">
		<FlexColumn gap={1} variant="div" alignItems="center" justifyContent="start">
			<Typography size={4} variant="p" color="primary" weight="bold" align="left">
				{question.title}
			</Typography>
			{#if question.title}
				<VoiceButton text={question.title} />
				<CopyButton text={question.title} />
			{/if}
		</FlexColumn>
		<Typography size={2} variant="p" color="dark" weight="normal" align="left">
			{question.meaning}
		</Typography>
	</Stack>
	{#if question.words?.length}
		<Stack size={1} variant="ul">
			{#each question.words as word}
				<ListItem symbol="none">
					<FlexColumn gap={1} variant="div" alignItems="center" justifyContent="start" isWrap>
						<Typography size={2} variant="span" color="primary" weight="bold" align="left">
							{word.word}
						</Typography>
						<Typography size={2} variant="span" color="dark" weight="normal" align="left">
							{word.meaning}
						</Typography>
						<FlexColumn gap={1} variant="div" alignItems="center" justifyContent="start" isWrap>
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
</div>

<style>
	.question-block {
		position: relative;
		display: grid;
		align-items: start;
	}
	@media (min-width: 640px) {
		.question-block {
			gap: calc(var(--spacing-4) * 1px);
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
		.question-block[data-has-words='true'] {
			gap: calc(var(--spacing-2) * var(--calc-sp));
		}
	}
</style>
