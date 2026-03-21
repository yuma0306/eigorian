import { createClient } from 'microcms-js-sdk';
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
import type { Situation, Exam } from './types';

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

export async function getExams(): Promise<Exam[]> {
	try {
		const response = await client.getList<Exam>({
			endpoint: 'exams',
			queries: {
				limit: 100,
				fields: 'id,title'
			}
		});
		return response.contents;
	} catch {
		// エンドポイントが存在しない場合（404等）は空配列を返す
		return [];
	}
}

export async function getExamById(id: string): Promise<Exam | undefined> {
	try {
		return await client.getListDetail<Exam>({
			endpoint: 'exams',
			contentId: id
		});
	} catch {
		return undefined;
	}
}
