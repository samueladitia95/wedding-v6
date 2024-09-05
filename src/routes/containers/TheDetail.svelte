<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	const details = [
		{
			isActive: true,
			name: 'Holy Matrimony',
			time: '13:00 PM',
			location: 'Gereja Maria Diangkat ke Surga, Katedral Jakarta',
			address: 'Gereja Maria Diangkat ke Surga, Katedral Jakarta',
			coordinate: 'https://maps.app.goo.gl/d7kFthEg8ugiPLjdA'
		},
		{
			isActive: true,
			name: 'DINNER RECEPTION',
			time: '18:00 PM',
			location: 'Azalia Hall',
			address: 'Jl. Teluk Bitung No. 41, Jakarta Pusat',
			coordinate: 'https://maps.app.goo.gl/XyZncKobfvWsckkD6'
		}
	];
	$: detailsFiltered = details.filter((el) => el.isActive);

	const attires = [
		{
			isActive: true,
			name: 'Holy matrimony',
			desc: 'Semi-Formal Attire'
		},
		{
			isActive: true,
			name: 'Dinner Reception',
			desc: 'Formal Attire, No Silver & Maroon, No Batik'
		}
	];
	$: attiresFiltered = attires.filter((el) => el.isActive);

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-black min-h-screen flex flex-col justify-center"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<div class="container py-28 text-white md:!text-center">
		<div class="flex flex-col gap-12">
			{#if isShow}
				<div class="text-4.5xl font-medium" in:fade={{ duration: 1000, delay: 500 }}>
					The Details
				</div>
			{/if}
			<div class="flex flex-col xl:!grid xl:!grid-cols-6 gap-12">
				<div class="hidden xl:!block" />
				{#each detailsFiltered as detail, index}
					{#if isShow}
						<div
							class="flex flex-col items-start md:!items-center gap-8 col-span-2"
							transition:fly={{ x: 200, duration: 1000, delay: 500 + 200 * (index + 1) }}
						>
							<div class="flex flex-col gap-4">
								<div class="">{detail.name}</div>
								<div>{detail.time}</div>
							</div>

							<div class="flex flex-col gap-2">
								<div>{detail.location}</div>
								<div class="text-sm italic font-roman">{detail.address}</div>
							</div>

							<a
								class="px-6 py-3 bg-white-54 rounded-full"
								href={detail.coordinate}
								target="_blank"
							>
								Get Direction
							</a>
						</div>
					{/if}
				{/each}
				<div class="hidden xl:!block" />
			</div>
		</div>

		<div class="mt-40 flex flex-col gap-12">
			{#if isShow}
				<div class="flex flex-col gap-6" in:fade={{ duration: 1000, delay: 1500 }}>
					<div class="text-4.5xl font-medium">The Attire</div>
					<div>
						We kindly encourage our guests to wear <br class="xl:!hidden" /> these attire below for our
						special day
					</div>
				</div>
			{/if}

			{#each attiresFiltered as attire, index}
				{#if isShow}
					<div
						class="flex flex-col gap-4"
						transition:fly={{ x: 200, duration: 1000, delay: 1500 + 200 * (index + 1) }}
					>
						<div class="font-jakarta">{attire.name}</div>
						<div class="font-arizona-var">{attire.desc}</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
