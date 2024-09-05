import { pb } from '$lib/pocketbase';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const wedding = await pb.collection('wedding_v6').getFirstListItem('project="default"', {
		sort: '-created'
	});
	let song: string = '';
	if (wedding.song_url) {
		song = pb.files.getUrl(wedding, wedding.song_url);
	}
	const wishes = await pb.collection('rsvp_wedding_v6').getFullList({
		filter: 'project="default"',
		fields: 'wishes,from,created',
		sort: '-created'
	});

	return { wedding, wishes, song };
};
