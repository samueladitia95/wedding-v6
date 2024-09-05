<script lang="ts">
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration';
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	export let bgMobile: string;
	export let bgTablet: string;
	export let bgDesktop: string;

	dayjs.extend(duration);

	let weddingDay = dayjs('October 5, 2024');
	let countdowns = [
		{ type: 'Month', value: 0 },
		{ type: 'Day', value: 0 },
		{ type: 'Hour', value: 0 },
		{ type: 'Minute', value: 0 }
	];
	const eventCalenderLink = 'https://calendar.app.google/S1nQMYdpKQeEFC1R9';

	onMount(() => {
		setInterval(function () {
			const currentTime = dayjs();
			const duration = dayjs.duration(weddingDay.diff(currentTime));

			countdowns = [
				{ type: 'Month', value: duration.months() },
				{ type: 'Day', value: Math.floor(duration.days()) },
				{ type: 'Hour', value: duration.hours() },
				{ type: 'Minute', value: duration.minutes() }
			];
		}, 1000);
	});
	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="min-h-screen relative flex flex-col justify-center"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<img
		src={bgMobile}
		alt="background"
		class="absolute top-0 left-0 h-screen w-screen object-cover md:!hidden"
	/>
	<img
		src={bgTablet}
		alt="background"
		class="absolute top-0 left-0 h-screen w-screen object-cover hidden md:!block xl:!hidden"
	/>
	<img
		src={bgDesktop}
		alt="background"
		class="absolute top-0 left-0 h-screen w-screen object-cover hidden xl:!block"
	/>

	<div class="container text-white text-center z-10 flex flex-col items-center gap-14">
		{#if isShow}
			<div class="text-4.5xl" in:fade={{ duration: 1000, delay: 200 }}>Save the Date</div>
		{/if}
		{#if isShow}
			<div class="flex flex-col gap-6" in:fade={{ duration: 1000, delay: 400 }}>
				<div class="text-2xl">Saturday</div>
				<div class="font-light">5th OF OCTOBER, 2024</div>
			</div>
		{/if}

		<div class="grid grid-cols-2 md:flex gap-y-6 sm:gap-x-12 md:my-16">
			{#each countdowns as countdown, index}
				{#if isShow}
					<div
						class="flex flex-col gap-4 min-w-40"
						transition:fly={{ y: 200, duration: 1000, delay: 500 + 200 * (index + 1) }}
					>
						<p class="text-3xl font-light md:!text-[40px] lg:!text-5xl">
							{countdown.value}
						</p>
						<p class="text-xs font-roman italic md:!text-sm lg:!text-base">{countdown.type}(s)</p>
					</div>
				{/if}
			{/each}
		</div>

		{#if isShow}
			<a
				in:fade={{ duration: 1000, delay: 1000 }}
				href={eventCalenderLink}
				target="_blank"
				class="px-6 py-3 bg-white-54 rounded-full hover:opacity-75">Add to Calendar</a
			>
		{/if}
	</div>
</div>
