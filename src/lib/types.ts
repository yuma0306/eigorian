type Word = {
	fieldId: string;
} & Partial<{
	word: string;
	meaning: string;
}>;

export type Phrase = {
	fieldId: string;
} & Partial<{
	phrase: string;
	meaning: string;
	words: Word[];
}>;

export type Situation = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
} & Partial<{
	title: string;
	youtubeId: string;
	phrases: Phrase[];
}>;

export type LessonResult = {
	phrase: Phrase;
	correct: boolean;
};
