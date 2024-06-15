import { useState } from 'react';
import './style.css';

function PhoneContentBlock() {
	const [phoneNumber, setPhoneNumber] = useState('');

	const handleChange = (event) => {
		const input = event.target.value.replace(/\D/g, '');
		const formattedNumber = formatPhoneNumber(input);
		setPhoneNumber(formattedNumber);
	};

	const formatPhoneNumber = (input) => {
		if (!input) return '';

		let formattedNumber = '';
		const countryCode = input.slice(0, 3);
		formattedNumber += `(${countryCode}) `;

		const remainingDigits = input.slice(3, 11);
		if (remainingDigits.length > 3) {
			formattedNumber += `${remainingDigits.slice(0, 3)}-`;
			formattedNumber += `${remainingDigits.slice(3, 5)}-`;
			formattedNumber += remainingDigits.slice(5, 7);
		} else {
			formattedNumber += remainingDigits;
		}

		return formattedNumber;
	};

	return (
		<div className='consultation-phone-container'>
			<p className='consultation-phone-number-prefix'>+7</p>
			<div className='consultation-phone-vertical-divider' />
			<input
				className='consultation-phone-input'
				type='tel'
				maxLength={15}
				placeholder='(XXX) XXX-XX-XX'
				value={phoneNumber}
				onChange={handleChange}
			/>
		</div>
	);
}

export default PhoneContentBlock;
