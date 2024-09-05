<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import type { PageData } from './$types';
	import Footer from './containers/Footer.svelte';
	import Gallery from './containers/Gallery.svelte';
	export let data: PageData;

	import Invitation from './containers/Invitation.svelte';
	import SaveTheDate from './containers/SaveTheDate.svelte';
	import TheDetail from './containers/TheDetail.svelte';
	import WeddingGift from './containers/WeddingGift.svelte';

	$: galleries = data.wedding.galleries.map((el: string) => {
		return pb.getFileUrl(data.wedding, el);
	});
</script>

<div>
	<Invitation
		invImage1={pb.getFileUrl(data.wedding, data.wedding.Invitation_Image_1)}
		invImage2={pb.getFileUrl(data.wedding, data.wedding.Invitation_Image_2)}
	/>
	<SaveTheDate
		bgMobile={pb.getFileUrl(data.wedding, data.wedding.save_the_date_mobile)}
		bgTablet={pb.getFileUrl(data.wedding, data.wedding.save_the_date_tablet)}
		bgDesktop={pb.getFileUrl(data.wedding, data.wedding.save_the_date_desktop)}
	/>
	<TheDetail />
	<Gallery galleriesImages={galleries} />
	<WeddingGift />
	<Footer />
</div>
