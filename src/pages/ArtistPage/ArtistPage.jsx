import React, { useState } from 'react'
import ArtistContent from '../../components/elements/ArtistContent/ArtistContent';
import NavBarLeft from '../../components/elements/NavBarLeft/NavBarLeft'

function ArtistPage() {
	// const [albom, setAlbom] = useState([])
	// console.log(PostService);
	// const getPosts = async () => {
	// 	const getPostList = await PostService.getAll()
	// 	setAlbom(getPostList);
	// }
	// awaitAlbom();

	return (
		<div>
			<NavBarLeft />
			<ArtistContent />
		</div>
	)
}

export default ArtistPage