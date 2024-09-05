<script lang="ts">
	import dayjs from 'dayjs';
	import type { RecordModel } from 'pocketbase';

	export let wishes: RecordModel[] = [];
</script>

<div
	class="bg-primary-red min-h-screen max-h-screen xl:max-h-[1150px] overflow-auto no-scrollbar w-full"
>
	<div class="container pb-16 pt-8 xl:!py-28 text-white flex flex-col gap-16 max-w-[800px]">
		{#each wishes as wish}
			<div class="flex flex-col gap-4">
				<p class="pb-3 tracking-wider uppercase">{wish.from}</p>
				<p class="tracking-wide">{wish.wishes}</p>
				<p class="text-sm font-light">
					{dayjs(wish.created).format('dddd, D MMMM YYYY HH:mm')}
				</p>
			</div>
		{/each}
	</div>
</div>
