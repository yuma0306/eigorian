<script lang="ts">
	import type { PageData } from './$types';
	import Stack from '$lib/components/Stack/Stack.svelte';
	import Typography from '$lib/components/Typography/Typography.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import ExamQuestionCard from '$lib/components/ExamQuestionCard/ExamQuestionCard.svelte';
	import { paths } from '$lib/constants/paths';
	import Inner from '$lib/components/Inner/Inner.svelte';
	import Crumbs from '$lib/components/Crumbs/Crumbs.svelte';

	let { data }: { data: PageData } = $props();
	const exam = $derived(data.exam);
</script>

<Inner>
	{#if exam.title}
		<Crumbs items={[{ text: exam.title, href: paths.exam(exam.id) }]} />
	{/if}
	<Stack size={3} variant="section">
		<Typography size={5} variant="h1" color="secondary" weight="bold" align="center">
			{exam.title}
		</Typography>
		<Button color="secondary" variant="a" href={paths.examLesson(exam.id)}>試験をスタート</Button>
		<Stack size={2} variant="ul">
			{#each exam.questions as question}
				<ExamQuestionCard {question} borderColor="gray" />
			{/each}
		</Stack>
	</Stack>
</Inner>
