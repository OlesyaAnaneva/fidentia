import { Button } from '@mui/base';
import './style.css';

function NavSections({
	onContactUsClick,
	onContactsClick,
	onAboutClick,
	onMediaClick,
}) {
	return (
		<div className='navigation-sections'>
			<div className='navigation-links-container'>
				<p className='navigation-link' onClick={onAboutClick}>
					О нас
				</p>
				<p className='navigation-link' onClick={onMediaClick}>
					Новости
				</p>
				<p className='navigation-link' onClick={onContactsClick}>
					Контакты
				</p>
			</div>
			<Button className='contact-button-style' onClick={onContactUsClick}>
				Связаться с нами
			</Button>
		</div>
	);
}

export default NavSections;
