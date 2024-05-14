import SvgIcon1 from './icons/SvgIcon1';
import SvgIcon2 from './icons/SvgIcon2';
import SvgIcon3 from './icons/SvgIcon3';
import SvgIcon4 from './icons/SvgIcon4';
import { Button } from '@mui/base';

import './style.css';

function SocialMedia() {
	const scrollToConsultation = () => {
		document
			.querySelector('.consultation-common-container')
			.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div className='social-media-container'>
			<p className='social-media-text'>Мы в соц сетях</p>
			<div className='social-media-links-container'>
				<div className='social-media-card-container'>
					<a
						href='https://vk.com/fidentia_rus'
						target='_blank'
						rel='noopener noreferrer'>
						<SvgIcon1 className='social-media-svg-container' />
					</a>
				</div>
				<div className='social-media-card-container'>
					<a
						href='https://t.me/fidentia_russia'
						target='_blank'
						rel='noopener noreferrer'>
						<SvgIcon2 className='social-media-svg-container' />
					</a>
				</div>
				<div className='social-media-card-container'>
					<a
						href='https://m.ok.ru/dk?st.cmd=altGroupMain&st.groupId=70000005786998&_prevCmd=userAltGroups&tkn=5643&_aid=groupOwnShowcase'
						target='_blank'
						rel='noopener noreferrer'>
						<SvgIcon3 className='social-media-svg-container' />
					</a>
				</div>
				<div className='social-media-card-container'>
					<a
						href='https://www.youtube.com/'
						target='_blank'
						rel='noopener noreferrer'>
						<SvgIcon4 className='social-media-svg-container' />
					</a>
				</div>
			</div>
			<Button
				className='social-media-contact-button'
				onClick={scrollToConsultation}>
				Связаться с нами
			</Button>
		</div>
	);
}

export default SocialMedia;
