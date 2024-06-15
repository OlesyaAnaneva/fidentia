import { useState } from 'react';
import { Button } from '@mui/base';
import PersonalInfoForm from '../PersonalInfoForm';
import PhoneContentBlock from '../PhoneContentBlock';
import EmailSectionWithTerms from '../EmailSectionWithTerms';
import SocialMediaConsultation from '../SocialMediaConsultation';
import './style.css';
import messages from './messages.json';

function ConsultationSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleFormSubmit = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className='consultation-common-container'>
			<div className='consultation-section'>
				<p className='consultation-headline-text-style'>{messages.get}</p>
				<p className='consultation-text'>{messages.fill_form}</p>
				<p className='consultation-social-media-text'>Мы в соц сетях</p>
				<SocialMediaConsultation />
			</div>
			<div className='consultation-form-container'>
				<div className='consultation-center-aligned-contact-info-container'>
					<PersonalInfoForm />
					<PhoneContentBlock />
				</div>
				<EmailSectionWithTerms />
				<Button
					className='consultation-submit-button-style'
					onClick={handleFormSubmit}>
					Отправить заявку
				</Button>
			</div>
			<div
				className={`consultation-modal-overlay ${isModalOpen ? '' : 'hidden'}`}
				onClick={handleCloseModal}>
				<div className='consultation-modal-content'>
					<p className='consultation-modal-text'>Ваша заявка принята.</p>
					<p className='consultation-modal-text'>
						Мы с Вами свяжемся в ближайшее время.
					</p>
					<Button
						className='consultation-submit-button-style'
						onClick={handleCloseModal}>
						Закрыть
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ConsultationSection;
