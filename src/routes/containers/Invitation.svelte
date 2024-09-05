<script lang="ts">
	let groomAndBride = 'Darwin Chan & Monica Pangestu';
	let groomParent = 'Mr. Harmin (+) & Mrs. Dolly';
	let brideParent = 'Mr. Hendi (+) & Mrs. Tjandraningsih';

	export let invImage1: string;
	export let invImage2: string;
</script>

<div class="min-h-screen bg-semi-white">
	<div class="container py-28">
		<div class="grid grid-cols-2 font-medium">
			<div class="text-lg">The Wedding of</div>
			<div class="text-2xl">{groomAndBride}</div>
		</div>

		<div>
			<img src={invImage1} alt="invinite 1" class="w-[255px] h-[352px]" />
			<img src={invImage2} alt="invinite 2" class="w-[298px] h-[204px]" />
		</div>

		<div>
			<div>Together with our parents</div>
			<div>
				<div>{groomParent}</div>
				<div>{brideParent}</div>
			</div>
		</div>

		<div>Cordially invite you to the wedding of their children</div>
	</div>
</div>
