import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const wedding = await pb.collection('wedding_v6').getFirstListItem('project="default"', {
		order: '+created'
	});

	return { wedding };
};
