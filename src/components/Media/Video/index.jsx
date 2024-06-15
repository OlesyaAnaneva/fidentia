import ReactPlayer from 'react-player';
import './style.css';

function Video({ data }) {
	return (
		<div className='video-container'>
			<ReactPlayer
				className='video-player'
				url={data.videoLink}
				width='100%'
				controls={true}
			/>
		</div>
	);
}

export default Video;
