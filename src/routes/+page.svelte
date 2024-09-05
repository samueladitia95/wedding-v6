<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import type { PageData } from './$types';
	import Gallery from './containers/Gallery.svelte';
	export let data: PageData;

	import Invitation from './containers/Invitation.svelte';
	import TheDetail from './containers/TheDetail.svelte';

	$: galleries = data.wedding.galleries.map((el: string) => {
		return pb.getFileUrl(data.wedding, el);
	});
</script>

<div>
	<Invitation
		invImage1={pb.getFileUrl(data.wedding, data.wedding.Invitation_Image_1)}
		invImage2={pb.getFileUrl(data.wedding, data.wedding.Invitation_Image_2)}
	/>
	<TheDetail />
	<Gallery galleriesImages={galleries} />
</div>
