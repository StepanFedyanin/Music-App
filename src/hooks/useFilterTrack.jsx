import { useMemo } from "react";

const useTrack = (tracks, sort) => {
	const sortedPosts = useMemo(() => {
		const sortedTrack = tracks.map(albom => searchTrack(albom.albomList, sort))
		return sortedTrack.flat();
	}, [sort, tracks])
	return sortedPosts;
}
export const searchTrack = (trackList, sortItem) => {
	const track = trackList.filter(track => track.trackName.toLowerCase().includes(sortItem.toLowerCase()))
	return track
}

export default useTrack;