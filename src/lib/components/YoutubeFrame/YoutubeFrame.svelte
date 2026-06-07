<script lang="ts">
import type { Situation } from '$lib/types';

let { youtubeId }: { youtubeId: Situation['youtubeId'] } = $props();
</script>

<a class="link" href={`https://youtu.be/${youtubeId}`} target="_blank" rel="noopener noreferrer">
	出典（埋め込み動画参照）: @PHOTOGLISH
</a>
<iframe
	width="100%"
	height="100%"
	src={`https://www.youtube.com/embed/${youtubeId}`}
	title="YouTube video player"
	allow="
		accelerometer;
		autoplay;
		clipboard-write;
		encrypted-media;
		gyroscope;
		picture-in-picture;
		web-share;
	"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
	class="frame"
></iframe>

<style>
.frame {
	width: min(100%, calc(800px + 2px));
	border: 1px solid var(--color-gray);
	margin-inline: auto;
	display: block;
	aspect-ratio: 16 / 9;
}
.link {
	display: block;
	width: fit-content;
	margin-inline: auto;
	text-decoration: underline;
	color: var(--color-primary);
	transition: opacity var(--transition);
	@media (hover: hover) {
		&:hover {
			opacity: var(--opacity);
		}
	}
	&:active {
		opacity: var(--opacity);
	}
}
@media (min-width: 640px) {
	.link {
		font-size: calc(var(--font-size-2) * 1px);
		transition: opacity var(--transition);
		&:hover {
			opacity: var(--opacity);
		}
	}
}
@media (max-width: 639px) {
	.link {
		font-size: calc(var(--calc-sp) * var(--font-size-2));
	}
}
</style>
