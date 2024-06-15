import './style.css';

function MainImage() {
	return (
		<div className='main-image-container'>
			<p className='main-image-heading'>
				Берем курс на повышение финансовой и правовой грамотности
			</p>
			<img src='/assets/image.png' alt='Image' className='main-image' />
		</div>
	);
}

export default MainImage;
