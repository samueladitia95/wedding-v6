<script lang="ts">
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
</script>

<div class="bg-black min-h-screen">
	<div class="container py-28 text-white">
		<div class="flex flex-col gap-12">
			<div class="text-4.5xl font-medium">The Details</div>
			{#each details as detail}
				<div class="flex flex-col items-start gap-8">
					<div class="flex flex-col gap-4">
						<div class="">{detail.name}</div>
						<div>{detail.time}</div>
					</div>

					<div class="flex flex-col gap-2">
						<div>{detail.location}</div>
						<div class="text-sm italic">{detail.address}</div>
					</div>

					<a class="px-6 py-3 bg-white-54 rounded-full" href={detail.coordinate} target="_blank">
						Get Direction
					</a>
				</div>
			{/each}
		</div>

		<div class="mt-40 flex flex-col gap-12">
			<div class="flex flex-col gap-6">
				<div class="text-4.5xl font-medium">The Attire</div>
				<div>We kindly encourage our guests to wear these attire below for our special day</div>
			</div>

			{#each attires as attire}
				<div class="flex flex-col gap-4">
					<div class="font-jakarta">{attire.name}</div>
					<div class="font-arizona-var">{attire.desc}</div>
				</div>
			{/each}
		</div>
	</div>
</div>
