<script lang="ts">
import type { Situation } from '$lib/types';

let { youtubeId }: { youtubeId: Situation['youtubeId'] } = $props();
</script>

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
</style>
