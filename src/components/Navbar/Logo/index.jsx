import './style.css';

function NavLogo() {
	return (
		<div className='navbar-section'>
			<img
				src='/assets/img_45_107_82a2be.svg'
				alt='a black and white drawing of a globe with a grid around it.'
				className='navbar-logo'
			/>
			<div className='navbar-info'>
				<p className='navbar-heading'>ФИДЕНТИА</p>
				<p className='navbar-paragraph'>
					Ассоциация развития финансовой грамотности
				</p>
			</div>
		</div>
	);
}

export default NavLogo;
