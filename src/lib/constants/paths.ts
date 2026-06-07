import type { Pathname } from '$app/types';
import type { Situation } from '$lib/types';

export const paths = {
	home: '/' as const satisfies Pathname,
	situations: '/situations',
	situation: (id: Situation['id']) => `/situations/${id}` as `/situations/${string}` & {},
	lesson: (id: Situation['id']) => `/situations/${id}/lesson` as `/situations/${string}/lesson` & {}
} as const;
