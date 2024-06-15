import NavSections from './Sections/index';
import NavLogo from './Logo/index';
import './style.css';

const Navbar = ({
	onContactUsClick,
	onContactsClick,
	onAboutClick,
	onMediaClick,
}) => {
	return (
		<div className='navbar-container'>
			<div className='navbar-header'>
				<NavLogo />
				<NavSections
					className='navbar-sections'
					onContactUsClick={onContactUsClick}
					onContactsClick={onContactsClick}
					onAboutClick={onAboutClick}
					onMediaClick={onMediaClick}
				/>
			</div>
		</div>
	);
};

export default Navbar;
