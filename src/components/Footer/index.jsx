import './style.css';
import messages from './messages.json';
import SocialMedia from './SocialMedia';

function Footer() {
	const scrollToMedia = () => {
		document
			.querySelector('.media-common-container')
			.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToAbout = () => {
		document
			.querySelector('.about-container')
			.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToContacts = () => {
		document
			.querySelector('.contact-info-section')
			.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='footer-container'>
			<div className='footer-logo-section'>
				<img
					src='/assets/img_45_120_588bfd.svg'
					alt='a white logo on a black background that looks like a globe.'
					className='footer-logo'
				/>
				<p className='footer-heading'>ФИДЕНТИА</p>
				<p className='footer-description'>
					Ассоциация развития финансовой грамотности
				</p>
			</div>
			<div className='footer-info-section'>
				<div className='footer-navigation'>
					<span className='footer-nav-item' onClick={scrollToAbout}>
						О нас
					</span>
					<span className='footer-nav-item' onClick={scrollToMedia}>
						Новости
					</span>
					<span className='footer-nav-item' onClick={scrollToContacts}>
						Контакты
					</span>
				</div>
				<div className='footer-details-container'>
					<div className='footer-info-card-left-column'>
						<p className='contact-info-block'>
							<span className='primary-text-block'>{messages.office}</span>
							<span className='address-details'>{messages.address}</span>
						</p>
						<p className='contact-info-style'>
							<span className='primary-text-block'>{messages.post}</span>
							<span className='address-details'>{messages.email}</span>
						</p>
					</div>
					<div className='footer-info-card-right-column'>
						<p className='contact-info-style'>
							<span className='primary-text-block'>{messages.requisites}</span>
							<span>{messages.requisitesdata}</span>
						</p>
						<SocialMedia />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
