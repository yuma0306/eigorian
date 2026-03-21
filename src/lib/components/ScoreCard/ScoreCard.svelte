<script lang="ts">
	import Card from '../Card/Card.svelte';
	import FlexColumn from '../FlexColumn/FlexColumn.svelte';
	import Typography from '../Typography/Typography.svelte';

	type Props = {
		score: number;
		total: number;
	};

	let { score, total }: Props = $props();
</script>

<Card variant="div" borderColor="gray" hasBorderLeft={false}>
	<Typography size={2} variant="p" color="dark" weight="bold" align="center">スコア</Typography>
	<FlexColumn gap={1} variant="div" alignItems="center" justifyContent="center">
		<Typography size={5} variant="p" color="secondary" weight="bold" align="center">
			{score}
		</Typography>
		<Typography size={5} variant="span" color="dark" weight="normal" align="center">/</Typography>
		<Typography size={5} variant="p" color="secondary" weight="bold" align="center">
			{total}
		</Typography>
	</FlexColumn>
</Card>
