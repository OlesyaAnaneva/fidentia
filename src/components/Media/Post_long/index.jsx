import { useState } from 'react';
import './style.css';

function PostLong({ data }) {
	const [expanded, setExpanded] = useState(false);
	const imagePath = `../../../../admin/server/data/${data.imageLink}`;

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div className={`post-long-container ${expanded ? 'expanded' : ''}`}>
			<img src={imagePath} alt='Image' className='post-long-image-container' />
			<div className='post-long-info-container'>
				<div className='post-long-info-section'>
					<p className='post-long-info-date-text-style'>{data.date}</p>
					<p className='post-long-info-title-style'>{data.title}</p>
					<p
						className={`post-long-info-block-text-style ${
							expanded ? 'expanded' : ''
						}`}>
						{data.description}
					</p>
				</div>
				{!expanded && (
					<div className='post-long-read-more-button-container'>
						<p className='post-long-read-more-btn' onClick={toggleExpand}>
							Читать далее
						</p>
					</div>
				)}
				{expanded && (
					<div className='post-long-hide-button-container'>
						<p className='post-long-hide-btn' onClick={toggleExpand}>
							Скрыть
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default PostLong;
