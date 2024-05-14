import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

import MainImage from './components/MainImage/index';
import GetConsultation from './components/GetConsultation/index';
import Contacts from './components/Contacts/index';
import About from './components/About/index';
import Media from './components/Media/index';
import './style.css';

function App() {
	const consultationRef = useRef(null);
	const contactsRef = useRef(null);
	const aboutRef = useRef(null);
	const mediaRef = useRef(null);

	const scrollToConsultation = () => {
		consultationRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToContacts = () => {
		contactsRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToAbout = () => {
		aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToMedia = () => {
		mediaRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div className='App'>
			<Navbar
				onContactUsClick={scrollToConsultation}
				onContactsClick={scrollToContacts}
				onAboutClick={scrollToAbout}
				onMediaClick={scrollToMedia}
			/>
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<MainImage />
								<div className='about-global-div' ref={aboutRef}>
									<About />
								</div>
								<div ref={mediaRef}>
									<Media />
								</div>
								<div ref={consultationRef}>
									<GetConsultation />
								</div>
								<div ref={contactsRef}>
									<Contacts onContactUsClick={scrollToConsultation} />
								</div>
							</>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
