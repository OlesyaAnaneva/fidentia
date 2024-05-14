import { useState } from 'react';
import './style.css';

function PostMini({ data }) {
	const [expanded, setExpanded] = useState(false);
	const imagePath = `../../../../admin/server/data/${data.imageLink}`;

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div className={`post-mini-container ${expanded ? 'expanded' : ''}`}>
			<img src={imagePath} alt='Image' className='post-mini-image-container1' />
			<div className='post-mini-info-card1'>
				<div className='post-mini-info-section'>
					<p className='post-mini-info-date-text-style'>{data.timestamp}</p>
					<p className='post-mini-info-heading'>{data.title}</p>
					<p
						className={`post-mini-info-block-text-style ${
							expanded ? 'expanded' : ''
						}`}>
						{data.description}
					</p>
				</div>
				{!expanded && (
					<div className='post-mini-read-more-button-container'>
						<p className='post-mini-read-more-btn' onClick={toggleExpand}>
							Читать далее
						</p>
					</div>
				)}
				{expanded && (
					<div className='post-mini-hide-button-container'>
						<p className='post-mini-hide-btn' onClick={toggleExpand}>
							Скрыть
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default PostMini;
