<script lang="ts">
	import type { ExamQuestion } from '$lib/types';
	import Card from '$lib/components/Card/Card.svelte';
	import Stack from '$lib/components/Stack/Stack.svelte';
	import ExamQuestionCardHead from '$lib/components/ExamQuestionCardHead/ExamQuestionCardHead.svelte';
	import ExamQuestionCardBody from '$lib/components/ExamQuestionCardBody/ExamQuestionCardBody.svelte';
	import type { ComponentProps } from 'svelte';

	type Props = {
		question: ExamQuestion;
		borderColor: ComponentProps<typeof Card>['borderColor'];
	};

	let { question, borderColor }: Props = $props();
</script>

<Card variant="li" {borderColor} hasBorderLeft={true}>
	<Stack size={2} variant="div">
		<ExamQuestionCardHead {question} />
		<ExamQuestionCardBody {question} />
	</Stack>
</Card>
