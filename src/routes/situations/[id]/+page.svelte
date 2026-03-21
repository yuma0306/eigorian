<script lang="ts">
	import type { PageData } from './$types';
	import Stack from '$lib/components/Stack/Stack.svelte';
	import Typography from '$lib/components/Typography/Typography.svelte';
	import { paths } from '$lib/constants/paths';
	import Button from '$lib/components/Button/Button.svelte';
	import PhraseCard from '$lib/components/PhraseCard/PhraseCard.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import Inner from '$lib/components/Inner/Inner.svelte';
	import Crumbs from '$lib/components/Crumbs/Crumbs.svelte';

	let { data }: { data: PageData } = $props();
	const situation = $derived(data.situation);
</script>

<Inner>
	<Crumbs items={[{ text: situation.title, href: paths.situation(situation.id) }]} />
	<Stack size={3} variant="section">
		<Typography size={5} variant="h1" color="secondary" weight="bold" align="center">
			{situation.title}
		</Typography>
		<Button color="secondary" variant="a" href={`${paths.lesson(situation.id)}`}>
			レッスンをスタート
		</Button>
		<Stack size={2} variant="ul">
			{#each situation.phrases as phrase}
				<Card variant="li" borderColor="gray" hasBorderLeft={true}>
					<PhraseCard {phrase} />
				</Card>
			{/each}
		</Stack>
	</Stack>
</Inner>
