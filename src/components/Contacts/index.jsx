import MultiContentSection from './MultiContentSection';
import './style.css';

function Contacts({ onContactUsClick }) {
	return (
		<div className='contact-info-section'>
			<p className='contact-title'>Контакты</p>
			<MultiContentSection onContactUsClick={onContactUsClick} />
		</div>
	);
}

export default Contacts;
