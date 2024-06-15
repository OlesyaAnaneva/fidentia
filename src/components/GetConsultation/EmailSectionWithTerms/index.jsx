import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/base';
import EmailInputSection from '../EmailInputSection';
import './style.css';
import messages from './messages.json';

function formatTextWithMarkup(text) {
	const parts = text.split('\n');
	return parts.map((part, index) => (
		<React.Fragment key={index}>
			{part}
			<br />
		</React.Fragment>
	));
}

function EmailSectionWithTerms() {
	const [checked, setChecked] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const handleCheckboxChange = (event) => {
		setChecked(event.target.checked);
	};

	const handleConsentClick = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<div className='financial-info-card'>
			<EmailInputSection />
			<div className='consent-agreement-container'>
				<div className='consent-text-container'>
					<Checkbox
						checked={checked}
						onChange={handleCheckboxChange}
						color='primary'
						inputProps={{ 'aria-label': 'secondary checkbox' }}
						sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
					/>
				</div>
				<p className='consent-text-container1' onClick={handleConsentClick}>
					<span>Я соглашаюсь с условиями и даю согласие на </span>
					<span className='personal-data-processing-agreement-confirmation-text'>
						обработку персональных данных
					</span>
				</p>
			</div>
			<Modal open={modalOpen} onClose={handleCloseModal}>
				<div className='modal-content'>
					<h2>{messages.agreement_header}</h2>
					<p>{formatTextWithMarkup(messages.agreement_text)}</p>
					<Button
						onClick={handleCloseModal}
						variant='outlined'
						className='consultation-close-aggr-button-style'>
						Закрыть
					</Button>
				</div>
			</Modal>
		</div>
	);
}

export default EmailSectionWithTerms;
