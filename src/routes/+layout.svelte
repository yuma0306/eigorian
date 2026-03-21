<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/app.css';
	import Wrapper from '$lib/components/Wrapper/Wrapper.svelte';
	import Main from '$lib/components/Main/Main.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { siteData } from '$lib/constants/siteData';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="robots" content="none" />
	<link rel="canonical" href={`https://${siteData.domain}`} />
	<title>{siteData.siteName}</title>
	<meta
		name="description"
		content="マイペンサッパロットは、タイ語とタイ文字タイピングを学習するためのサイトです。"
	/>
	<!-- ogp -->
	<meta property="og:title" content={siteData.siteName} />
	<meta
		property="og:description"
		content="マイペンサッパロットは、タイ語とタイ文字タイピングを学習するためのサイトです。"
	/>
	<meta property="og:locale" content="ja_JP" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://${siteData.domain}`} />
	<meta property="og:site_name" content={siteData.siteName} />
	<meta property="og:image" content={`https://${siteData.domain}/ogp.png`} />
	<meta property="og:image:alt" content={siteData.siteName} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<!-- favicon -->
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content={siteData.siteName} />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<Wrapper>
	<Header />
	<Main>
		{@render children()}
	</Main>
	<Footer />
</Wrapper>
