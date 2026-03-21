<script lang="ts">
	import type { ExamQuestion } from '$lib/types';
	import Card from '$lib/components/Card/Card.svelte';
	import Stack from '$lib/components/Stack/Stack.svelte';
	import Typography from '$lib/components/Typography/Typography.svelte';
	import FlexColumn from '$lib/components/FlexColumn/FlexColumn.svelte';
	import VoiceButton from '$lib/components/VoiceButton/VoiceButton.svelte';
	import CopyButton from '$lib/components/CopyButton/CopyButton.svelte';
	import ToggleRevealButton from '$lib/components/ToggleRevealButton/ToggleRevealButton.svelte';
	import ExamQuizCardHead from '$lib/components/ExamQuizCardHead/ExamQuizCardHead.svelte';
	import ExamQuizOptionButton from '$lib/components/ExamQuizOptionButton/ExamQuizOptionButton.svelte';

	type Props = {
		question: ExamQuestion;
		onSelect: (optionIndex: number) => void;
		selectedIndex?: number;
	};

	let { question, onSelect, selectedIndex }: Props = $props();

	const showResult = $derived(selectedIndex !== undefined);
	let showOptionMeaning = $state<Record<number, boolean>>({});

	function toggleOptionMeaning(i: number) {
		showOptionMeaning = { ...showOptionMeaning, [i]: !showOptionMeaning[i] };
	}
</script>

<Card variant="div" borderColor="gray" hasBorderLeft={false}>
	<Stack size={2} variant="div">
		<ExamQuizCardHead {question} />
		<Stack size={2} variant="ul">
			{#each question.options as option, i}
				<Stack size={1} variant="li">
					<ExamQuizOptionButton
						optionNumber={i + 1}
						optionText={option.option ?? ''}
						correct={showResult && !!option.isCorrect}
						incorrect={showResult && selectedIndex === i && !option.isCorrect}
						disabled={showResult}
						onclick={() => onSelect(i)}
					/>
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
						<ToggleRevealButton
							expanded={showOptionMeaning[i]}
							showLabel="👀 訳を見る"
							hideLabel="🙈 訳を隠す"
							ariaLabel="訳を見る"
							onclick={(e) => {
								e.stopPropagation();
								toggleOptionMeaning(i);
							}}
						/>
					</FlexColumn>
					{#if showOptionMeaning[i]}
						<Typography size={2} variant="p" color="dark" weight="normal" align="left">
							{option.meaning}
						</Typography>
					{/if}
				</Stack>
			{/each}
		</Stack>
	</Stack>
</Card>
