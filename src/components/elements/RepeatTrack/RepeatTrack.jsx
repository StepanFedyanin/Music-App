import React from 'react'
import { useState } from 'react';
import reapitBtnIcon from '../../resources/reapitTreackItem.svg';
import reapitBtnIconWork from '../../resources/reapitTreackItemWork.svg';

function RepeatTrack() {
	const [changeView, setChangeView] = useState(false)
	const changeTrue = () => {
		setChangeView(true);
	}
	const changeFalse = () => {
		setChangeView(false);
	}
	return (
		<div>
			{
				changeView ?
					<div onClick={changeFalse} className="">
						<img src={reapitBtnIconWork} alt="" />
					</div>
					:
					<div onClick={changeTrue} className="">
						<img src={reapitBtnIcon} alt="" />
					</div>

			}
		</div>
	)
}

export default RepeatTrack