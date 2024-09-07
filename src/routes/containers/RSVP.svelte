<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';

	import Input from '$lib/components/Input.svelte';
	import { schemaRsvp } from '$lib/schema';
	import { pb } from '$lib/pocketbase';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	let isLoading: boolean = false;
	let endScreen: Boolean = false;

	const { form, errors, enhance, constraints } = superForm(defaults(zod(schemaRsvp)), {
		SPA: true,
		validators: zod(schemaRsvp),
		onUpdate: async function onUpdate({ form }) {
			if (form.valid) {
				const body = {
					project: 'default',
					name: form.data.name,
					phone: form.data.phone,
					email: form.data.email,
					is_attending_holy_matrimony: form.data.is_attending_holy_matrimony,
					is_attending_dinner_reception: form.data.is_attending_dinner_reception,
					plus_one: form.data.plus_one,
					wishes: form.data.wishes,
					from: form.data.from
				};
				await pb.collection('rsvp_wedding_v6').create(body);
				endScreen = true;
				isLoading = false;
				invalidate('https://dev1.samueladitia.com/api/collections/rsvp_wedding_v6/records');
			}
		}
	});

	let isShow: boolean = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

{#if !endScreen}
	<div
		class="bg-primary-red min-h-screen py-28 flex xl:justify-center w-full"
		use:inview={{
			rootMargin: '-100px',
			unobserveOnEnter: true
		}}
		on:inview_change={handleChange}
	>
		{#if isShow}
			<div
				class="container flex flex-col text-white w-full xl:max-w-[800px]"
				in:fade={{ duration: 1000, delay: 500 }}
			>
				<div class="flex flex-col gap-6">
					<div class="text-4.5xl leading-none mb-4">RSVP & WISHES</div>
					<div>Kindly confirm your attendance by completing the form provided below:</div>
					<div>Before 13th September 2024.</div>
					<div>
						Alongside RSVP, Please take a moment to express your warm regards and best wishes.
					</div>
				</div>

				<form use:enhance class="mt-10">
					<div class="flex flex-col gap-8 text-sm">
						<Input
							name="name"
							label="Fill Your Name"
							bind:value={$form.name}
							{...$constraints.name}
							error={$errors.name}
						/>
						<Input
							name="phone"
							label="Phone Number"
							bind:value={$form.phone}
							{...$constraints.phone}
							error={$errors.phone}
						/>
						<Input
							name="email"
							label="Email"
							bind:value={$form.email}
							{...$constraints.email}
							error={$errors.email}
						/>

						<div class="py-3">
							<div class="text-sm flex">
								Will you be attending the holy matrimony? &nbsp
								<p class="text-error max-w-2 -translate-y-1">*</p>
							</div>
							<div class="flex gap-12 md:gap-28 w-full ml-3 mt-3">
								<div class="flex gap-2 items-center">
									<input
										name="is_attending_holy_matrimony"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-primary-red checked:ring-inset"
										value="Yes"
										bind:group={$form.is_attending_holy_matrimony}
									/>
									<div class="">Yes</div>
								</div>
								<div class="flex gap-2 items-center">
									<input
										name="is_attending_holy_matrimony"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-primary-red checked:ring-inset"
										value="No"
										bind:group={$form.is_attending_holy_matrimony}
									/>
									<div class="">No</div>
								</div>
							</div>
						</div>

						<div class="py-3">
							<div class="text-sm flex">
								Will you be attending the dinner reception? &nbsp
								<p class="text-error max-w-2 -translate-y-1">*</p>
							</div>
							<div class="flex gap-12 md:gap-28 w-full ml-3 mt-3">
								<div class="flex gap-2 items-center">
									<input
										name="is_attending_dinner_reception"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-primary-red checked:ring-inset"
										value="Yes"
										bind:group={$form.is_attending_dinner_reception}
									/>
									<div class="">Yes</div>
								</div>
								<div class="flex gap-2 items-center">
									<input
										name="is_attending_dinner_reception"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-white/20 rounded-full box-content checked:bg-white checked:ring-4 checked:ring-primary-red checked:ring-inset"
										value="No"
										bind:group={$form.is_attending_dinner_reception}
									/>
									<div class="">No</div>
								</div>
							</div>
						</div>

						<Input
							name="plus_one"
							label="Are you bringing a +1?"
							placeholder="If so, please let us know"
							bind:value={$form.plus_one}
							{...$constraints.plus_one}
							error={$errors.plus_one}
						/>
						<Input
							name="wishes"
							label="Wishes"
							placeholder="Write your wishes"
							bind:value={$form.wishes}
							{...$constraints.wishes}
							error={$errors.wishes}
						/>
						<Input
							name="from"
							label="From"
							placeholder="Enter your name here to send your wishes."
							bind:value={$form.from}
							{...$constraints.from}
							error={$errors.from}
						/>

						<button
							class="w-full py-4 rounded-full !bg-white-54 text-white hover:bg-black hover:text-white transition-all duration-300 disabled:bg-bg-disabled disabled:text-text-disabled"
							disabled={isLoading}
							type="submit"
						>
							SUBMIT RSVP & WISHES
						</button>
					</div>
				</form>
			</div>
		{/if}
	</div>
{:else}
	<div
		class="bg-primary-red min-h-screen py-28 items-center flex flex-col justify-center"
		in:fade={{ duration: 1000, delay: 0 }}
	>
		<div class="container flex flex-col text-center text-white gap-3 max-w-[800px]">
			<h1 class="text-4.5xl px-5">Thank You For Your RSVP and Wishes!</h1>
			<p class="text-xs px-8">We Will Contact You For More Information and Details</p>
		</div>
	</div>
{/if}

<style>
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
