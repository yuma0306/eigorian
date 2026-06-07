<script lang="ts">
import CardImage from '$lib/components/CardImage/CardImage.svelte';
import CardImageList from '$lib/components/CardImageList/CardImageList.svelte';
import Inner from '$lib/components/Inner/Inner.svelte';
import Stack from '$lib/components/Stack/Stack.svelte';
import Typography from '$lib/components/Typography/Typography.svelte';
import { paths } from '$lib/constants/paths';
import type { PageData } from './$types';

let { data }: { data: PageData } = $props();
const situations = $derived(data.situations);
</script>

<Inner>
	<Stack size={3} variant="div">
		<Stack size={2} variant="section">
			<Typography size={4} variant="h2" color="secondary" weight="bold" align="center">
				フレーズ
			</Typography>
			<CardImageList>
				{#each situations as situation (situation.id)}
					<CardImage href={paths.situation(situation.id)} title={situation.title} />
				{/each}
			</CardImageList>
		</Stack>
	</Stack>
</Inner>
