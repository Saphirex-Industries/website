<script lang='ts'>
	import '$lib/styles/styles.scss';

	import logo from '$lib/images/logo-3000x2000.webp';
	import logo_fallback from '$lib/images/logo-3000x2000.png';
	import GitHub from '../components/GitHub.svelte';
</script>

<svelte:head>
	<title>Saphirex</title>
</svelte:head>

<span class='root'>
	<span class='container'>
		<picture>
			<source srcset={logo} type='image/webp' />
			<img src={logo_fallback} alt='Saphirex Logo' />
		</picture>
	</span>
</span>
<span class='social_links'>
	<GitHub />
</span>

<style lang='scss'>
	@import '$lib/styles/glow-effect.scss';

	.root {
		width: 100%;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		background: linear-gradient(to right, #1c3f4c, #132a33, #0F2027);

		.container {
			width: 50%;

			img {
				@extend .glow;

				width: 100%;
			}
		}
	}

	.social_links {
		position: absolute;

		bottom: 1.5vh;
		right: 1.5vh;
	}
</style>
