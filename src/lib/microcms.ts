import { createClient } from 'microcms-js-sdk';
import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from '$env/static/private';
import type { Phrase, Situation } from './types';

const client = createClient({
	serviceDomain: MICROCMS_SERVICE_DOMAIN,
	apiKey: MICROCMS_API_KEY
});

function trimPhrase(phrase: Phrase): Phrase {
	return {
		...phrase,
		phrase: phrase.phrase?.trim(),
		meaning: phrase.meaning?.trim(),
		words: phrase.words?.map((word) => ({
			...word,
			word: word.word?.trim(),
			meaning: word.meaning?.trim()
		}))
	};
}

function trimSituation(situation: Situation): Situation {
	return {
		...situation,
		title: situation.title?.trim(),
		youtubeId: situation.youtubeId?.trim(),
		phrases: situation.phrases?.map(trimPhrase)
	};
}

export async function getSituations(): Promise<Situation[]> {
	const response = await client.getList<Situation>({
		endpoint: 'situations',
		queries: {
			limit: 100,
			fields: 'id,title'
		}
	});
	return response.contents.map(trimSituation);
}

export async function getSituationById(id: string): Promise<Situation | undefined> {
	try {
		const situation = await client.getListDetail<Situation>({
			endpoint: 'situations',
			contentId: id
		});
		return trimSituation(situation);
	} catch {
		return undefined;
	}
}
