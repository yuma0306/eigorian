<script lang="ts">
import Inner from '$lib/components/Inner/Inner.svelte';
import { siteData } from '$lib/constants/siteData';
</script>

<footer class="footer">
	<Inner>
		<a
			class="footer__link"
			href={siteData.contactFormUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			お問い合わせ
		</a>
		<small class="footer__text">&copy; {new Date().getFullYear()} {siteData.siteName}</small>
	</Inner>
</footer>

<style>
.footer {
	background-color: var(--color-primary);
}
.footer__text {
	display: block;
	text-align: center;
	color: var(--color-white);
}
.footer__link {
	display: block;
	text-align: center;
	color: var(--color-white);
	text-decoration: underline;
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
	.footer {
		padding: calc(var(--spacing-2) * 1px);
	}
	.footer__text {
		font-size: calc(var(--font-size-1) * 1px);
	}
	.footer__link {
		margin-bottom: calc(var(--spacing-1) * 1px);
		font-size: calc(var(--font-size-1) * 1px);
	}
}
@media (max-width: 639px) {
	.footer {
		padding: calc(var(--calc-sp) * var(--spacing-2));
	}
	.footer__text {
		font-size: calc(var(--calc-sp) * var(--font-size-1));
	}
	.footer__link {
		margin-bottom: calc(var(--calc-sp) * var(--spacing-1));
		font-size: calc(var(--calc-sp) * var(--font-size-1));
	}
}
</style>
