import { Button } from '@mui/base';
import SvgIcon1 from './icons/SvgIcon1';
import messages from './messages.json';

import './style.css';

function MultiContentSection({ onContactUsClick }) {
	const openYandexMaps = () => {
		const address = messages.address;
		const encodedAddress = encodeURIComponent(address);
		const url = `https://yandex.ru/maps/?text=${encodedAddress}`;
		window.open(url, '_blank');
	};

	return (
		<div className='contacts-office-card'>
			<div className='contacts-info-container'>
				<div className='contacts-info-data-container'>
					<p className='contacts-office-address-details'>
						<span className='contacts-address-details-text-style-header'>
							{messages.office}
						</span>
						<span className='contacts-address-details-text-style'>
							{messages.address}
						</span>
					</p>
					<p className='contacts-postal-details-style'>
						<span className='contacts-address-details-text-style-header'>
							{messages.post}
						</span>
						<span>{messages.email}</span>
					</p>
					<p className='contacts-postal-details-style'>
						<span className='contacts-address-details-text-style-header'>
							{messages.requisites}
						</span>
						<span>{messages.requisitesdata}</span>
					</p>
					<p className='chairman-info-text-style'>{messages.chairman}</p>
				</div>
				<div className='contacts-buttons-section'>
					<Button
						className='contacts-button-with-icon'
						onClick={openYandexMaps}>
						<SvgIcon1 className='contacts-svg-container' />
						Найти на карте
					</Button>
					<Button className='contacts-button' onClick={onContactUsClick}>
						Связаться с нами
					</Button>
				</div>
			</div>
			<div alt='Image' className='contacts-location-image-section'>
				<div className='contacts-location-image-section-box'>
					<img
						src='/assets/img_57689d4_77c2cf.svg'
						alt='a black and white icon of a globe in a white circle.'
						className='contacts-image-container'
					/>
				</div>
			</div>
		</div>
	);
}

export default MultiContentSection;
