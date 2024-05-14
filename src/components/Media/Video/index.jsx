import ReactPlayer from 'react-player';

import './style.css';

function Video({ data }) {
	return (
		<div className='video-container'>
			<ReactPlayer
				className='video-player'
				url={data.videoLink}
				width='100%'
				height='100%'
				controls={true}
			/>
			{data.description && (
				<div className='video-info'>
					<p className='video-description'>{data.description}</p>
				</div>
			)}
		</div>
	);
}

export default Video;
