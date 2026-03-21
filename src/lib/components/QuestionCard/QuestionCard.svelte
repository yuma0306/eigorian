<script lang="ts">
	import Card from '../Card/Card.svelte';
	import FlexColumn from '../FlexColumn/FlexColumn.svelte';
	import Stack from '../Stack/Stack.svelte';
	import Typography from '../Typography/Typography.svelte';
	import VoiceButton from '../VoiceButton/VoiceButton.svelte';
	import type { Phrase } from '$lib/types';
	import CopyButton from '../CopyButton/CopyButton.svelte';
	import ToggleRevealButton from '../ToggleRevealButton/ToggleRevealButton.svelte';

	type Props = {
		phrase: Phrase['phrase'];
		meaning: Phrase['meaning'];
		showAnswer: boolean;
	};

	let { phrase, meaning, showAnswer = $bindable() }: Props = $props();
</script>

<Card variant="div" borderColor="gray" hasBorderLeft={false}>
	<Stack size={2} variant="div">
		<Stack size={1} variant="div">
			<Typography size={2} variant="p" color="dark" weight="normal" align="center">
				{meaning}
			</Typography>
		</Stack>
		<FlexColumn gap={1} variant="div" alignItems="stretch" justifyContent="center">
			<VoiceButton text={phrase} />
			<ToggleRevealButton
				expanded={showAnswer}
				showLabel="👀 回答を見る"
				hideLabel="🙈 回答を隠す"
				ariaLabel="回答を見る"
				onclick={() => (showAnswer = !showAnswer)}
			/>
		</FlexColumn>
		{#if showAnswer}
			<FlexColumn gap={1} variant="div" alignItems="center" justifyContent="center">
				<Typography size={3} variant="p" color="primary" weight="bold" align="left">
					{phrase}
				</Typography>
				<CopyButton text={phrase} />
			</FlexColumn>
		{/if}
	</Stack>
</Card>
