import { pb } from '$lib/pocketbase';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const wedding = await pb.collection('wedding_v6').getFirstListItem('project="default"', {
		sort: '-created'
	});
	const wishes = await pb.collection('rsvp_wedding_v6').getFullList({
		filter: 'project="default"',
		fields: 'wishes,from,created',
		sort: '-created'
	});

	return { wedding, wishes };
};
