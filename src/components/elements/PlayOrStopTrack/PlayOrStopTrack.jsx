import React from 'react'
import playBtnIcon from '../../resources/playTrackItem.svg';
import iconPlay from '../../resources/trackPlay.svg'

function PlayOrStopTrack({ playChange, setPlayChange, Play }) {
	return (
		<div>
			{
				playChange ?
					<button
						onClick={() => {
							setPlayChange(false)
							Play(playChange)
						}}
					>
						<img src={playBtnIcon} alt="" />
					</button>
					: <button
						onClick={() => {
							setPlayChange(true)
							Play(playChange)
						}}
					>
						<img src={iconPlay} alt="" />
					</button>
			}
		</div>
	)
}

export default PlayOrStopTrack