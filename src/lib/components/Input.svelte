<script lang="ts">
	import { fly } from 'svelte/transition';
	import clsx from 'clsx';

	export let name: string;
	export let label: string;
	export let error: string[] | undefined = undefined;
	export let value: string = '';
	export let placeholder: string = '';
	$: hasPlaceholder = !!placeholder;
</script>

<div
	class={clsx(
		'relative h-11 w-full font-editor-hand',
		'duration-300 transition-all',
		error ? 'mb-4' : 'mb-0'
	)}
>
	<input
		placeholder={placeholder || label}
		class={placeholder
			? `peer h-full w-full border-b-[1px] border-white bg-transparent pt-4 pb-1.5 text-white outline outline-0 transition-all placeholder-shown:border-white/20 focus:text-white focus:outline-0 placeholder:text-white/40 placeholder:opacity-100 text-sm`
			: `peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 text-white outline outline-0 transition-all placeholder-shown:border-white/20 focus:text-white focus:outline-0 placeholder:opacity-0 placeholder:text-white/40 focus:placeholder:opacity-100 text-sm`}
		bind:value
		required
		{name}
		autocomplete="off"
	/>
	<div
		class={`after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-sm leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm  peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white ${hasPlaceholder ? 'leading-[4.25]' : 'peer-placeholder-shown:leading-[4.25]'}`}
	>
		{label} &nbsp
		<span class="text-error">*</span>
	</div>

	{#if error && error.length}
		<div transition:fly={{ y: -20, duration: 300 }} class="text-xs text-error pt-2">
			{error[0]}
		</div>
	{/if}
</div>
