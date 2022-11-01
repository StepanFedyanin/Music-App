import React, { useContext } from 'react';
import cls from './MyMusicContent.module.scss'
import TracksList from '../TracksList/TracksList';
import MyTrackAndAlbum from '../../context/MyTrackAndAlbum';
import { useState } from 'react';
import AlbomLIst from '../AlbomList/AlbomList';
function MyMusicContent() {
	const { myMusic, setMyMusic } = useContext(MyTrackAndAlbum);
	const [trackForMy, setTrackForMy] = useState(myMusic)
	console.log(myMusic.albums);
	console.log(myMusic);



	return (
		<div className={cls.MyMusicContent}>
			<div className=""></div>
			<div className="">
				{
					myMusic.albums != Array ?
						<AlbomLIst title="Мои альбомы" Albomlist={myMusic.albums} />
						: <p style={{ "color": "white" }}>Ваша музыка пустая</p>
				}
				{/* <AlbumListComponent title="Мои плейлисты" Albomlist={AlbomList} /> */}
			</div>
			{
				myMusic.songs != Array ?
					<TracksList trackList={myMusic} TitleList='Моя музыка' />
					: <p style={{ "color": "white" }}>Ваша музыка пустая</p>
			}
		</div>
	)
}
export default MyMusicContent