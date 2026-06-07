<script lang="ts">
import { resolve } from '$app/paths';
import { paths } from '$lib/constants/paths';
import { siteData } from '$lib/constants/siteData';
</script>

<a class="logo" href={resolve(paths.home)}>{siteData.siteName}</a>

<style>
.logo {
	color: var(--color-white);
}
@media (min-width: 640px) {
	.logo {
		font-size: calc(var(--font-size-3) * 1px);
	}
}
@media (max-width: 639px) {
	.logo {
		font-size: calc(var(--calc-sp) * var(--font-size-3));
	}
}
</style>
