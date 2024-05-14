import './style.css';

function AboutBlock() {
	return (
		<div className='about-block-container'>
			<div className='trend-watch-container'>
				<p className='headline-text-style'>
					Следим за актуальностью каждого курса
				</p>
				<p className='expert-insights-paragraph'>
					Эксперты из «Фидентии» и других крупных компаний делятся опытом и
					знаниями и помогают читателям сразу применять полученные знания в
					работе.
				</p>
			</div>
			<div className='expert-section'>
				<div className='expert-gallery'>
					<img
						src='/assets/img_5_500_a7e63b.jpeg'
						alt='Image'
						className='circular-image-container'
					/>
					<img
						src='/assets/img_5_501_786e0f.jpeg'
						alt='Image'
						className='circular-image-avatar'
					/>
					<img
						src='/assets/img_5_502_88e97d.jpeg'
						alt='Image'
						className='circular-image-avatar'
					/>
					<img
						src='/assets/img_5_503_5c5a73.jpeg'
						alt='Image'
						className='mystical-avatar'
					/>
				</div>
				<p className='expert-count-text-style'>{"Уже\n230 экспертов"}</p>
			</div>
		</div>
	);
}

export default AboutBlock;
