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
	phrases: Phrase[];
}>;

export type LessonResult = {
	phrase: Phrase;
	correct: boolean;
};

// {
// 	"contents": [
// 			{
// 					"id": "gq0cx9mm7gbb",
// 					"createdAt": "2026-03-21T06:23:15.836Z",
// 					"updatedAt": "2026-03-21T06:23:15.836Z",
// 					"publishedAt": "2026-03-21T06:23:15.836Z",
// 					"revisedAt": "2026-03-21T06:23:15.836Z",
// 					"title": "駅・電車・バス",
// 					"phrases": [
// 							{
// 									"fieldId": "phrases",
// 									"phrase": "How many stops to Hyde Park?",
// 									"meaning": "ハイドパークまで何駅？",
// 									"words": []
// 							},
// 							{
// 									"fieldId": "phrases",
// 									"phrase": "How far is it from here?",
// 									"meaning": "ここからどれくらい遠いですか？",
// 									"words": [
// 											{
// 													"fieldId": "words",
// 													"word": "far",
// 													"meaning": "遠い"
// 											}
// 									]
// 							}
// 					]
// 			}
// 	],
// 	"totalCount": 1,
// 	"offset": 0,
// 	"limit": 10
// }
