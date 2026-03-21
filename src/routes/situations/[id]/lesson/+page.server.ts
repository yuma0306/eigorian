import { getSituationById } from '$lib/microcms';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const situation = await getSituationById(params.id);

	if (!situation) {
		error(404, 'シチュエーションが見つかりません');
	}

	return { situation };
};
