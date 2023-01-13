import React from 'react'
import cls from './TrackNavAdaptive.module.scss'
import PlayOrStopTrack from '../PlayOrStopTrack/PlayOrStopTrack';
import nextBtnIcon from '../../resources/nexttreckItem.svg';
import prefBtnIcon from '../../resources/prefTreckItem.svg';
import randomBtnIcon from '../../resources/randomTreckItom.svg';
import RepeatTrack from '../RepeatTrack/RepeatTrack';
function TrackNavAdaptive({ changeSongPref, changeSongNext, playChange, setPlayChange, Play, loopTrack, seLoopTrack, loadPropgresStyle, progressBarShow, trackNavInfo, changeTrackNavInfo, ...props }) {
	const style = [cls.TrackNavAdaptiveTarget]
	if (trackNavInfo) {
		style.push(cls.TrackNavAdaptiveNone)
	}
	const hideTrackNavAdaptive = () => {
		changeTrackNavInfo(false)
		console.log("work");
	}
	console.log(props);
	return (
		<div className={style.join(' ')} onClick={hideTrackNavAdaptive}>
			<div className={cls.TrackNavAdaptive}>
				<div className={cls.TrackNavAdaptiveinfo}>
					<div className={cls.TrackNavAdaptivePhoto}>
						<img src={props.trackCover} alt="" />
					</div>
					<div className="">
						<div className="">
							<p>{props.trackName.length > 1 ? props.trackName.split('-')[1] : ''}</p>
						</div>
						<div className="">
							<p>{props.trackName.length > 1 ? props.trackName.split('-')[0] : ''}</p>
						</div>
					</div>
				</div>
				<div className={cls.TrackNavAdaptiveTools}>
					<div className={cls.AdaptiveToolItem}>
						<button>
							<img src={randomBtnIcon} alt="" />
						</button>
					</div>
					<div className={cls.AdaptiveToolItem}>
						<button onClick={changeSongPref}>
							<img src={prefBtnIcon} alt="" />
						</button>
					</div>
					<div className={cls.AdaptiveToolItem}>
						<PlayOrStopTrack
							playChange={playChange}
							setPlayChange={setPlayChange}
							Play={Play}
						/>
					</div>
					<div className={cls.AdaptiveToolItem}>
						<button
							onClick={changeSongNext}
						>
							<img src={nextBtnIcon} alt="" />
						</button>
					</div>
					<div className={cls.AdaptiveToolItem}>
						<RepeatTrack
							loopTrack={loopTrack}
							seLoopTrack={seLoopTrack}
						/>
					</div>
				</div>
				<div className="trackTimeBarContainer">
					<div className={loadPropgresStyle}>
						<div ref={progressBarShow} className={cls.trackTimeBarBefore}>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default TrackNavAdaptive