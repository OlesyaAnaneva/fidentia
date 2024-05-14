import SvgIcon1 from './icons/SvgIcon1';
import SvgIcon2 from './icons/SvgIcon2';
import SvgIcon3 from './icons/SvgIcon3';
import SvgIcon4 from './icons/SvgIcon4';
import './style.css';

function SocialMediaConsultation() {
	return (
		<div className='consultation-social-media-links-container'>
			<div className='consultation-card-container'>
				<a
					href='https://vk.com/fidentia_rus'
					target='_blank'
					rel='noopener noreferrer'>
					<SvgIcon1 className='consultation-svg-container' />
				</a>
			</div>
			<div className='consultation-card-container'>
				<a
					href='https://t.me/fidentia_russia'
					target='_blank'
					rel='noopener noreferrer'>
					<SvgIcon2 className='consultation-svg-container' />
				</a>
			</div>
			<div className='consultation-card-container'>
				<a
					href='https://m.ok.ru/dk?st.cmd=altGroupMain&st.groupId=70000005786998&_prevCmd=userAltGroups&tkn=5643&_aid=groupOwnShowcase'
					target='_blank'
					rel='noopener noreferrer'>
					<SvgIcon3 className='consultation-svg-container' />
				</a>
			</div>
			<div className='consultation-card-container'>
				<a
					href='https://www.youtube.com/'
					target='_blank'
					rel='noopener noreferrer'>
					<SvgIcon4 className='consultation-svg-container' />
				</a>
			</div>
		</div>
	);
}

export default SocialMediaConsultation;
