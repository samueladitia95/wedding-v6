<script lang="ts">
	import { Marquee } from '@selemondev/svelte-marquee';
	import '@selemondev/svelte-marquee/dist/style.css';

	export let galleriesImages: string[];
</script>

<div class="max-h-[560px] h-[560px]">
	<Marquee fade={false} class="gap-[0px] [--duration:40s] [--gap:0px]" innerClassName="gap-[0px]">
		{#each galleriesImages as src}
			<img {src} alt="gallery" class="max-h-[560px] h-[560px] object-cover" />
		{/each}
	</Marquee>
</div>
