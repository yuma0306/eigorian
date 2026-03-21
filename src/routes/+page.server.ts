import { getSituations } from '$lib/microcms';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const situations = await getSituations();
	return { situations };
};
