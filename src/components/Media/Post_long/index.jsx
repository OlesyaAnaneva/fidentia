import { useState, useEffect, useRef } from 'react';
import './style.css';

function PostLong({ data }) {
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
		<div className={`post-long-container ${expanded ? 'expanded' : ''}`}>
			{imagePath.includes('assets/') &&
				imagePath.split('assets/')[1] !== '' && (
					<div className='post-long-image-container'>
						<img src={imagePath} />
					</div>
				)}
			<div className='post-long-info-container'>
				<div className='post-long-info-section'>
					<p className='post-long-info-date-text-style'>{data.timestamp}</p>
					<p className='post-long-info-title-style'>{data.title}</p>
					<p
						ref={textRef}
						className={`post-long-info-block-text-style ${
							expanded ? 'expanded' : ''
						}`}>
						{data.description}
					</p>
					{!expanded && isOverflowing && (
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
		</div>
	);
}

export default PostLong;
