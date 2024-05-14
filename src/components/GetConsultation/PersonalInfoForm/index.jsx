import { Input } from '@mui/base';
import { useState } from 'react';
import './style.css';

function PersonalInfoForm() {
	const [value, setValue] = useState('');
	const [isError, setIsError] = useState(false);

	const handleChange = (event) => {
		const newValue = event.target.value;
		if (/^[А-Яа-яёЁ\s-]*$/.test(newValue)) {
			setIsError(false);
		} else {
			setIsError(true);
		}
		setValue(newValue);
	};

	return (
		<div className='consultation-fio-container'>
			<Input
				value={value}
				onChange={handleChange}
				slotProps={{
					root: {
						className: isError
							? 'consultation-header-input-container error'
							: 'consultation-header-input-container',
					},
					input: {
						className: 'consultation-input-style',
						placeholder: 'ФИО',
						type: 'text',
					},
				}}
			/>
			{isError && <p className='consultation-error-text'>Неверный формат</p>}
		</div>
	);
}

export default PersonalInfoForm;
