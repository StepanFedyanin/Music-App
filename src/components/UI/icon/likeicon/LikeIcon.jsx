import React from 'react'
import { useState } from 'react'
import IconLike from '../../../resources/likeTrack.svg'
import NoIconLike from '../../../resources/nolikeicon.png'

function LikeIcon(props) {
	const [choeseLike, setChoeseLike] = useState(false || props.likeIcon);
	const ChoiseLike = () => {
		setChoeseLike(true)
	}
	const ChoiseNoLike = () => {
		setChoeseLike(false)
	}
	return (
		<div>
			<div className="">
				{
					choeseLike ?
						<img onClick={ChoiseNoLike} src={IconLike} alt="" />
						:
						<img onClick={ChoiseLike} src={NoIconLike} alt="" />
				}
			</div>
		</div>
	)
}

export default LikeIcon