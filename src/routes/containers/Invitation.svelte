<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	let groomAndBride = 'Darwin Chan & Monica Pangestu';
	let groomParent = 'Mr. Harmin (+) & Mrs. Dolly';
	let brideParent = 'Mr. Hendi (+) & Mrs. Tjandraningsih';

	export let invImage1: string;
	export let invImage2: string;
	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="min-h-screen bg-semi-white"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<div class="container py-28">
		<div class="flex flex-col xl:!flex-row xl:!gap-10">
			<div class="flex-col gap-6 hidden xl:!flex">
				{#if isShow}
					<img
						src={invImage1}
						alt="invinite 1"
						class="w-[556px] object-cover rounded"
						transition:fly={{ x: -200, duration: 1000, delay: 200 }}
					/>
				{/if}
				{#if isShow}
					<img
						src={invImage2}
						alt="invinite 2"
						class="w-[260px] object-cover rounded"
						transition:fly={{ y: 200, duration: 1000, delay: 400 }}
					/>
				{/if}
			</div>

			<div class="xl:!flex xl:!flex-col xl:!justify-between">
				<div>
					<div class="grid grid-cols-2 md:!grid-cols-3 xl:!grid-cols-1 font-medium">
						{#if isShow}
							<div
								class="text-lg md:!text-2xl md:!col-span-2"
								transition:fly={{ x: 200, duration: 1000, delay: 200 }}
							>
								The Wedding of
							</div>
						{/if}
						{#if isShow}
							<div
								class="text-2xl md:!text-3xl"
								transition:fly={{ x: 200, duration: 1000, delay: 400 }}
							>
								{groomAndBride}
							</div>
						{/if}
					</div>

					<div class="flex flex-col gap-6 mt-4 xl:!hidden">
						{#if isShow}
							<img
								src={invImage1}
								alt="invinite 1"
								class="w-[255px] md:!w-[400px] object-cover rounded"
								transition:fly={{ x: -200, duration: 1000, delay: 600 }}
							/>
						{/if}
						{#if isShow}
							<img
								src={invImage2}
								alt="invinite 2"
								class="w-44 md:!w-[220px] object-cover rounded"
								transition:fly={{ y: 200, duration: 1000, delay: 800 }}
							/>
						{/if}
					</div>
				</div>

				{#if isShow}
					<div
						class="flex flex-col gap-5 mt-10 md:!text-xl xl:!pt-80"
						in:fade={{ duration: 1000, delay: 1000 }}
					>
						<div class="font-medium">Together with our parents</div>
						<div class="flex flex-col gap-2">
							<div>{groomParent}</div>
							<div>{brideParent}</div>
						</div>
					</div>
				{/if}

				{#if isShow}
					<div
						class="text-lg md:!text-2xl xl:!text-3xl md:!max-w-96 xl:!max-w-2xl font-medium mt-40 md:mt-28"
						in:fade={{ duration: 1000, delay: 1000 }}
					>
						Cordially invite you to the wedding of their children
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
