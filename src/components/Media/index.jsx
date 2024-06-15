import { useState } from 'react';
import LoadMoreButton from './LoadMoreButton';
import Post_mini from './Post_mini';
import Post_long from './Post_long';
import Video from './Video';
import './style.css';

import postsData from '../../../admin/server/data/posts.json';
import videoData from '../../../admin/server/data/videos.json';

const Media = () => {
	const initialVisibleRows = Math.min(
		Math.ceil((videoData.length + postsData.length) / 4),
		3
	);
	const [visibleRows, setVisibleRows] = useState(initialVisibleRows);

	const handleLoadMore = () => {
		setVisibleRows((prev) => prev + 4);
	};

	const renderComponents = () => {
		const components = [];
		let videoIndex = 0;
		let postIndex = 0;

		for (let i = 0; i < visibleRows; i++) {
			if (i % 4 === 0) {
				if (videoIndex < videoData.length && postIndex < postsData.length) {
					components.push(
						<div className='media-row' key={`video-post-mini-${i}`}>
							<Video data={videoData[videoIndex]} />
							<Post_mini data={postsData[postIndex]} />
						</div>
					);
					videoIndex++;
					postIndex++;
				} else if (videoIndex < videoData.length) {
					components.push(
						<div className='media-row' key={`video-${i}`}>
							<Video data={videoData[videoIndex]} />
						</div>
					);
					videoIndex++;
				} else {
					const rowItems = [];
					for (let j = 0; j < 3 && postIndex < postsData.length; j++) {
						rowItems.push(
							<Post_mini
								data={postsData[postIndex]}
								key={`post-mini-${postIndex}`}
							/>
						);
						postIndex++;
					}
					components.push(
						<div className='media-row' key={`post-mini-row-${i}`}>
							{rowItems}
						</div>
					);
				}
			} else if ((i - 1) % 4 === 0 || (i - 2) % 4 === 0) {
				if (postIndex < postsData.length) {
					components.push(
						<div className='media-row' key={`post-long-${postIndex}`}>
							<Post_long data={postsData[postIndex]} />
						</div>
					);
					postIndex++;
				}
			}
		}

		return components;
	};

	const hasMoreVideos = videoData.length > Math.floor(visibleRows / 4);
	const hasMorePosts = postsData.length > visibleRows * 3;

	const showLoadMoreButton = hasMoreVideos || hasMorePosts;

	const hasMedia = videoData.length > 0 || postsData.length > 0;

	return (
		<>
			{hasMedia && (
				<div className='media-common-container'>
					<p className='media-common-heading'>Что нового</p>
					<div className='media-container'>{renderComponents()}</div>
					{showLoadMoreButton && <LoadMoreButton onClick={handleLoadMore} />}
				</div>
			)}
		</>
	);
};

export default Media;
