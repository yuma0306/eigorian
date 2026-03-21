import { getSituations, getExams } from '$lib/microcms';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [situations, exams] = await Promise.all([getSituations(), getExams()]);
	return { situations, exams };
};
