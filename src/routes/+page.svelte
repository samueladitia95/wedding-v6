<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import type { PageData } from './$types';
	export let data: PageData;

	import Invitation from './containers/Invitation.svelte';
</script>

<div>
	<Invitation
		invImage1={pb.getFileUrl(data.wedding, data.wedding.Invitation_Image_1)}
		invImage2={pb.getFileUrl(data.wedding, data.wedding.Invitation_Image_2)}
	/>
</div>
