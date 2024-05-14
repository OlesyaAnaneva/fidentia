import { useState } from 'react';
import LoadMoreButton from './LoadMoreButton';
import Post_mini from './Post_mini';
import Post_long from './Post_long';
import Video from './Video';
import './style.css';

import postsData from '../../../admin/server/data/posts.json';
import videoData from '../../../admin/server/data/videos.json';

const Media = () => {
	const [visibleRows, setVisibleRows] = useState(4);

	const handleLoadMore = () => {
		setVisibleRows((prev) => prev + 4);
	};

	const renderComponents = () => {
		const components = [];
		if (videoData.length === 0 && postsData.length === 0) {
			return null;
		}
		if (videoData.length >= 1 && postsData.length === 0) {
			const videosToRender = videoData.slice(0, visibleRows);
			videosToRender.forEach((video, index) => {
				components.push(
					<div className='media-row' key={`video-${index}`}>
						<Video data={video} />
					</div>
				);
			});
		} else if (videoData.length >= 1 || postsData.length >= 0) {
			for (let i = 0; i < visibleRows; i++) {
				switch ((i + 1) % 12) {
					case 1:
					case 4:
					case 7:
					case 10:
						if (videoData[Math.floor(i / 3)]) {
							components.push(
								<div className='media-row'>
									<Video
										key={`video-${i}`}
										data={videoData[Math.floor(i / 3)]}
									/>
								</div>
							);
							if (postsData[i]) {
								components.push(
									<div className='media-row'>
										<Post_mini key={`post-mini-${i}`} data={postsData[i]} />
									</div>
								);
							} else {
								components.push(
									<div className='media-row'>
										<Post_long key={`post-long-${i}`} data={postsData[i]} />
									</div>
								);
							}
						} else {
							components.push(
								<div className='media-row'>
									<Post_long key={`post-long-${i}`} data={postsData[i]} />
								</div>
							);
						}
						break;
					case 2:
					case 3:
					case 5:
					case 6:
					case 8:
					case 9:
						if (postsData[i]) {
							components.push(
								<div className='media-row'>
									<Post_long key={`post-long-${i}`} data={postsData[i]} />
								</div>
							);
						}
						if (postsData[i + 1]) {
							components.push(
								<div className='media-row'>
									<Post_mini key={`post-mini-${i}`} data={postsData[i + 1]} />
								</div>
							);
						}
						if (postsData[i + 2]) {
							components.push(
								<div className='media-row'>
									<Post_mini key={`post-mini-${i}`} data={postsData[i + 2]} />
								</div>
							);
						}
						if (postsData[i + 3]) {
							components.push(
								<div className='media-row'>
									<Post_mini key={`post-mini-${i}`} data={postsData[i + 3]} />
								</div>
							);
						}
						i += 3;
						break;
					case 11:
						if (postsData[i]) {
							components.push(
								<div className='media-row'>
									<Post_mini key={`post-mini-${i}`} data={postsData[i]} />
								</div>
							);
						}
						break;
					case 0:
						if (postsData[i]) {
							components.push(
								<div className='media-row'>
									<Post_mini key={`post-mini-${i}`} data={postsData[i]} />
								</div>
							);
						}
						if (videoData[Math.floor(i / 3)]) {
							components.push(
								<div className='media-row'>
									<Video
										key={`video-${i}`}
										data={videoData[Math.floor(i / 3)]}
									/>
								</div>
							);
						}
						break;
					default:
						break;
				}
			}
		}

		return components;
	};

	const hasMoreVideos = videoData.length > visibleRows;
	const hasMorePosts = postsData.length > 0 && postsData.length - 1 !== visibleRows;

	return (
		<div className='media-common-container'>
			<p className='media-common-heading'>Что нового</p>
			<div className='media-container'>{renderComponents()}</div>
			{(hasMoreVideos || hasMorePosts) && (
				<LoadMoreButton onClick={handleLoadMore} />
			)}
		</div>
	);
};

export default Media;
