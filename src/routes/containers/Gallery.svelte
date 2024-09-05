<script lang="ts">
	import { Marquee } from '@selemondev/svelte-marquee';
	import '@selemondev/svelte-marquee/dist/style.css';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	export let galleriesImages: string[];
	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="max-h-[560px] h-[560px] bg-black"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div in:fade={{ duration: 1000, delay: 0 }}>
			<Marquee
				fade={false}
				class="gap-[0px] [--duration:40s] [--gap:0px]"
				innerClassName="gap-[0px]"
			>
				{#each galleriesImages as src}
					<img {src} alt="gallery" class="max-h-[560px] h-[560px] object-cover" />
				{/each}
			</Marquee>
		</div>
	{/if}
</div>
