<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import type { PageData } from './$types';
	import Footer from './containers/Footer.svelte';
	import Gallery from './containers/Gallery.svelte';
	export let data: PageData;

	import Invitation from './containers/Invitation.svelte';
	import Rsvp from './containers/RSVP.svelte';
	import SaveTheDate from './containers/SaveTheDate.svelte';
	import TheDetail from './containers/TheDetail.svelte';
	import WeddingGift from './containers/WeddingGift.svelte';
	import Wishes from './containers/Wishes.svelte';

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
	<div class="grid grid-cols-1 xl:!grid-cols-2">
		<Rsvp />
		<Wishes wishes={data.wishes} />
	</div>
	<WeddingGift />
	<Footer />
</div>
