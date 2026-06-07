<script lang="ts">
import Button from '$lib/components/Button/Button.svelte';
import Card from '$lib/components/Card/Card.svelte';
import Crumbs from '$lib/components/Crumbs/Crumbs.svelte';
import FlexColumn from '$lib/components/FlexColumn/FlexColumn.svelte';
import Inner from '$lib/components/Inner/Inner.svelte';
import PhraseCard from '$lib/components/PhraseCard/PhraseCard.svelte';
import Stack from '$lib/components/Stack/Stack.svelte';
import ToggleRevealButton from '$lib/components/ToggleRevealButton/ToggleRevealButton.svelte';
import Typography from '$lib/components/Typography/Typography.svelte';
import YoutubeFrame from '$lib/components/YoutubeFrame/YoutubeFrame.svelte';
import { paths } from '$lib/constants/paths';
import type { PageData } from './$types';

let { data }: { data: PageData } = $props();
const situation = $derived(data.situation);
let showEnglish = $state(true);
</script>

<Inner>
	<Crumbs items={[{ text: situation.title ?? '', href: paths.situation(situation.id) }]} />
	<Stack size={3} variant="section">
		<Typography size={5} variant="h1" color="secondary" weight="bold" align="center">
			{situation.title}
		</Typography>
		<FlexColumn gap={2} variant="div" alignItems="center" justifyContent="center" isWrap={true}>
			{#if situation.youtubeId}
				<YoutubeFrame youtubeId={situation.youtubeId} />
			{/if}
			<ToggleRevealButton
				expanded={showEnglish}
				showLabel="👀 英語を表示"
				hideLabel="🙈 英語を隠す"
				ariaLabel="英語を表示"
				onclick={() => (showEnglish = !showEnglish)}
			/>
		</FlexColumn>
		<Stack size={2} variant="ul">
			{#each situation.phrases as phrase, index (index)}
				<Card variant="li" borderColor="gray" hasBorderLeft={true}>
					<PhraseCard {phrase} {showEnglish} />
				</Card>
			{/each}
		</Stack>
		<Button color="secondary" variant="a" href={`${paths.lesson(situation.id)}`}>
			レッスンをスタート
		</Button>
	</Stack>
</Inner>
