import { getExamById } from '$lib/microcms';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const exam = await getExamById(params.id);

	if (!exam) {
		error(404, '試験が見つかりません');
	}

	return { exam };
};
