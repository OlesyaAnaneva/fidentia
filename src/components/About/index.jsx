import AboutBlock from './AboutBlock';
import './style.css';

function About() {
	return (
		<div className='about-container'>
			<div className='about-info-block'>
				<p className='about-info-heading'>
					Ассоциация повышения финансовой и правовой грамотности «Фидентиа».
				</p>
				<p className='about-info-text1'>
					Основной целью деятельности Ассоциации является развитие финансового
					планирования членов Ассоциации и осуществление информационного
					обеспечения.
				</p>
				<p className='about-info-text2'>
					Мы объединяем экспертов в области финансового просвещения и людей,
					желающих повысить уровень своих знаний в области финансовой
					грамотности.
				</p>
			</div>
			<AboutBlock />
		</div>
	);
}

export default About;
