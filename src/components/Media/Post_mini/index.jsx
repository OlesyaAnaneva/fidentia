import { useState, useEffect, useRef } from 'react';
import './style.css';

function PostMini({ data }) {
	const [expanded, setExpanded] = useState(false);
	const imagePath = `../../../../admin/server/data/${data.imageLink}`;

	const [isOverflowing, setIsOverflowing] = useState(false);
	const textRef = useRef(null);

	useEffect(() => {
		if (textRef.current) {
			setIsOverflowing(
				textRef.current.scrollHeight > textRef.current.clientHeight
			);
		}
	}, [data.description]);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div className={`post-mini-container ${expanded ? 'expanded' : ''}`}>
			{data.imageLink && (
				<img src={imagePath} className='post-mini-image-container' />
			)}
			<div className='post-mini-info-card'>
				<div className='post-mini-info-section'>
					<p className='post-mini-info-date-text-style'>{data.timestamp}</p>
					<p className='post-mini-info-heading'>{data.title}</p>
					<p
						ref={textRef}
						className={`post-mini-info-block-text-style ${
							expanded ? 'expanded' : ''
						}`}>
						{data.description}
					</p>
				</div>
				<div className='post-mini-read-more-button-container'>
					{!expanded && isOverflowing ? (
						<p className='post-mini-read-more-btn' onClick={toggleExpand}>
							Читать далее
						</p>
					) : (
						<p className='post-mini-read-more-btn-white' onClick={toggleExpand}>
							Читать далее
						</p>
					)}
				</div>
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
