import React from 'react'
import NavBarLeft from '../../components/elements/NavBarLeft/NavBarLeft'
import NewMusic from '../../components/elements/NewMusic/NewMusic'
import TrackNav from '../../components/elements/TrackNav/TrackNav'

function NewMusicPage() {
	return (
		<div>
			<NavBarLeft />
			<NewMusic />
			<TrackNav />
		</div>
	)
}

export default NewMusicPage