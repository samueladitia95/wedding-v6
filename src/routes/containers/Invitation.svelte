<script lang="ts">
	let groomAndBride = 'Darwin Chan & Monica Pangestu';
	let groomParent = 'Mr. Harmin (+) & Mrs. Dolly';
	let brideParent = 'Mr. Hendi (+) & Mrs. Tjandraningsih';

	export let invImage1: string;
	export let invImage2: string;
</script>

<div class="min-h-screen bg-semi-white">
	<div class="container py-28">
		<div class="grid grid-cols-2 md:!grid-cols-3 font-medium">
			<div class="text-lg md:!text-2xl md:!col-span-2">The Wedding of</div>
			<div class="text-2xl md:!text-3xl">{groomAndBride}</div>
		</div>

		<div class="flex flex-col gap-6 mt-4">
			<img src={invImage1} alt="invinite 1" class="w-[255px] md:!w-[400px] object-cover rounded" />
			<img src={invImage2} alt="invinite 2" class="w-44 md:!w-[220px] object-cover rounded" />
		</div>

		<div class="flex flex-col gap-5 mt-10 md:!text-xl">
			<div class="font-medium">Together with our parents</div>
			<div class="flex flex-col gap-2">
				<div>{groomParent}</div>
				<div>{brideParent}</div>
			</div>
		</div>

		<div class="text-lg md:!text-2xl md:max-w-96 font-medium mt-40 md:mt-28">
			Cordially invite you to the wedding of their children
		</div>
	</div>
</div>
