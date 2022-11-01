import React from 'react'
import reapitBtnIcon from '../../resources/reapitTreackItem.svg';
import reapitBtnIconWork from '../../resources/reapitTreackItemWork.svg';

function RepeatTrack({ loopTrack, seLoopTrack }) {
	const changeTrue = () => {
		seLoopTrack(true);
	}
	const changeFalse = () => {
		seLoopTrack(false);
	}
	return (
		<div>
			{
				loopTrack ?
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