import { createClient } from 'microcms-js-sdk';
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
import type { Situation } from './types';

const client = createClient({
	serviceDomain: MICROCMS_SERVICE_DOMAIN,
	apiKey: MICROCMS_API_KEY
});

export async function getSituations(): Promise<Situation[]> {
	const response = await client.getList<Situation>({
		endpoint: 'situations',
		queries: {
			limit: 100,
			fields: 'id,title'
		}
	});
	return response.contents;
}

export async function getSituationById(id: string): Promise<Situation | undefined> {
	try {
		return await client.getListDetail<Situation>({
			endpoint: 'situations',
			contentId: id
		});
	} catch {
		return undefined;
	}
}
