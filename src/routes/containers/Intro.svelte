<script lang="ts">
	import clsx from 'clsx';
	import { fade } from 'svelte/transition';

	let isOpen = false;
	let animation1 = false;
	let lineAnimation = false;
	let animation2 = false;
	export let mainLogo: string;
	export let bgMobile: string;
	export let bgTablet: string;
	export let bgDesktop: string;

	const openInvitation = () => {
		isOpen = true;
		setTimeout(() => {
			animation1 = true;
			setTimeout(() => {
				lineAnimation = true;
				setTimeout(() => {
					animation1 = false;
					setTimeout(() => {
						animation2 = true;
						document.body.classList.remove('overflow-hidden');
					}, 1000);
				}, 2000);
			}, 1000);
		}, 3000);
	};
</script>

<div class="min-h-screen w-full bg-primary-red">
	{#if isOpen}
		<div class="relative min-h-screen w-screen flex flex-col justify-center items-center">
			<img
				src={bgMobile}
				alt="background"
				class="absolute top-0 left-0 h-screen w-screen object-cover md:!hidden"
				in:fade={{ duration: 1000, delay: 1000 }}
			/>
			<img
				src={bgTablet}
				alt="background"
				class="absolute top-0 left-0 h-screen w-screen object-cover hidden md:!block xl:!hidden"
				in:fade={{ duration: 1000, delay: 1000 }}
			/>
			<img
				src={bgDesktop}
				alt="background"
				class="absolute top-0 left-0 h-screen w-screen object-cover hidden xl:!block"
				in:fade={{ duration: 1000, delay: 1000 }}
			/>
			{#if animation1}
				<div
					class="z-10 text-white text-center container"
					in:fade={{ duration: 1000, delay: 0 }}
					out:fade={{ duration: 600, delay: 0 }}
				>
					<div class="font-roman md:!text-2xl italic">The Wedding of</div>
					<div class="flex gap-3 md:!text-2xl font-medium items-center justify-center">
						<div>Darwin</div>
						<div
							class={clsx(
								'border-b border-solid border-red-line transform duration-[3000ms] transition-all ease-linear',
								lineAnimation ? 'w-14' : 'w-0'
							)}
						/>
						<div>Monica</div>
					</div>
					<div class="font-roman italic md:!text-2xl">5th October 2024</div>
				</div>
			{/if}

			{#if animation2}
				<div
					class="z-10 text-white text-center container text-xs/loose md:!text-sm/loose lg:!text-base/loose md:!max-w-lg font-medium"
					in:fade={{ duration: 1000, delay: 0 }}
				>
					The red string of fate binds us, weaving our lives into a tapestry of destiny. Guided by a
					divine hand, we were brought together by the will of the heavens.
				</div>
				<div
					in:fade={{ duration: 1000, delay: 500 }}
					class="z-10 text-white absolute bottom-32 md:!bottom-40 transform -translate-x-1/2 left-1/2 text-sm font-medium border-b border-solid border-red-line pb-2 px-4"
				>
					Scroll Down
				</div>
			{/if}
		</div>
	{:else}
		<div
			class="min-h-screen w-screen relative flex flex-col justify-center items-center"
			out:fade={{ duration: 1000, delay: 0 }}
		>
			<img src={mainLogo} alt="main logo" class="max-w-sm md:!max-w-md" />
			<button
				class="px-6 py-3 bg-primary-button text-white rounded-full absolute bottom-32 md:!bottom-40 transform -translate-x-1/2 left-1/2 hover:opacity-75"
				on:click={() => {
					openInvitation();
				}}
			>
				Open Invitation
			</button>
		</div>
	{/if}
</div>
