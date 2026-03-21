<script lang="ts">
	import type { ExamQuestion } from '$lib/types';
	import Stack from '$lib/components/Stack/Stack.svelte';
	import Typography from '$lib/components/Typography/Typography.svelte';
	import FlexColumn from '$lib/components/FlexColumn/FlexColumn.svelte';
	import VoiceButton from '$lib/components/VoiceButton/VoiceButton.svelte';
	import CopyButton from '$lib/components/CopyButton/CopyButton.svelte';
	import ToggleRevealButton from '$lib/components/ToggleRevealButton/ToggleRevealButton.svelte';

	type Props = {
		question: ExamQuestion;
	};

	let { question }: Props = $props();

	let showQuestionMeaning = $state(false);

	function toggleQuestionMeaning() {
		showQuestionMeaning = !showQuestionMeaning;
	}
</script>

<Stack size={1} variant="div">
	<Typography size={4} variant="p" color="primary" weight="bold" align="center">
		{question.title}
	</Typography>
	<FlexColumn gap={1} variant="div" alignItems="center" justifyContent="center">
		{#if question.title}
			<VoiceButton text={question.title} />
			<CopyButton text={question.title} />
		{/if}
		<ToggleRevealButton
			expanded={showQuestionMeaning}
			showLabel="👀 訳を見る"
			hideLabel="🙈 訳を隠す"
			ariaLabel="訳を見る"
			onclick={toggleQuestionMeaning}
		/>
	</FlexColumn>
	{#if showQuestionMeaning}
		<Typography size={2} variant="p" color="dark" weight="normal" align="center">
			{question.meaning}
		</Typography>
	{/if}
</Stack>
