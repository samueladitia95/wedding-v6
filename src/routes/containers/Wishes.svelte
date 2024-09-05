<script lang="ts">
	import dayjs from 'dayjs';
	import type { RecordModel } from 'pocketbase';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	export let wishes: RecordModel[] = [];
	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-primary-red min-h-screen max-h-screen xl:max-h-[1150px] overflow-auto no-scrollbar w-full"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<div class="container pb-16 pt-8 xl:!py-28 text-white flex flex-col gap-16 max-w-[800px]">
		{#each wishes as wish, index}
			{#if isShow}
				<div
					class="flex flex-col gap-4"
					transition:fly={{ x: 200, duration: 1000, delay: 200 + 200 * (index + 1) }}
				>
					<p class="pb-3 tracking-wider uppercase">{wish.from}</p>
					<p class="tracking-wide">{wish.wishes}</p>
					<p class="text-sm font-light">
						{dayjs(wish.created).format('dddd, D MMMM YYYY HH:mm')}
					</p>
				</div>
			{/if}
		{/each}
	</div>
</div>
