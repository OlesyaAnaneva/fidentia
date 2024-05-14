import { Button } from '@mui/base';
import SvgIcon1 from './icons/SvgIcon1';
import './style.css';

function LoadMoreButton({ onClick }) {
	return (
		<div className='media-load-more-button-container'>
			<Button className='media-load-more-button-with-icon' onClick={onClick}>
				Загрузить еще
				<SvgIcon1 className='media-load-more-button-with-icon-svg-container1' />
			</Button>
		</div>
	);
}

export default LoadMoreButton;
