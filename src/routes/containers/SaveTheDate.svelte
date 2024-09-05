<script lang="ts">
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration';

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
</script>

<div class="min-h-screen relative flex flex-col justify-center">
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
		<div class="text-4.5xl">Save the Date</div>

		<div class="flex flex-col gap-6">
			<div class="text-2xl">Saturday</div>
			<div class="font-light">5th OF OCTOBER, 2024</div>
		</div>

		<div class="grid grid-cols-2 md:flex gap-y-6 sm:gap-x-12 md:my-16">
			{#each countdowns as countdown}
				<div class="flex flex-col gap-4 min-w-40">
					<p class="text-3xl font-light md:!text-[40px] lg:!text-5xl">
						{countdown.value}
					</p>
					<p class="text-xs font-roman italic md:!text-sm lg:!text-base">{countdown.type}(s)</p>
				</div>
			{/each}
		</div>

		<a
			href={eventCalenderLink}
			target="_blank"
			class="px-6 py-3 bg-white-54 rounded-full hover:opacity-75">Add to Calendar</a
		>
	</div>
</div>
