import { Input } from '@mui/base';
import { useState } from 'react';
import './style.css';

function EmailInputSection() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);
	const [touched, setTouched] = useState(false);

	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleChange = (event) => {
		const newEmail = event.target.value;
		setEmail(newEmail);
		if (touched) {
			setError(!validateEmail(newEmail));
		}
	};

	const handleBlur = () => {
		setTouched(true);
		setError(!validateEmail(email));
	};

	return (
		<div className='consultation-email-container'>
			<Input
				value={email}
				onChange={handleChange}
				onBlur={handleBlur}
				slotProps={{
					root: {
						className: error
							? 'consultation-header-input-email-container error'
							: 'consultation-header-input-email-container',
					},
					input: {
						className: 'consultation-input-email-style',
						placeholder: 'E-mail',
						type: 'email',
					},
				}}
			/>
			{error && touched && (
				<p className='consultation-email-error-text'>Неверный формат</p>
			)}
		</div>
	);
}

export default EmailInputSection;
