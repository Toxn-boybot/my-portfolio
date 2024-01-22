import React from 'react';
import './portfolio.css';
import HIMS from '../../assets/img/hims.png';
import Fiverr from '../../assets/img/fiverr.png';
import WeatherApp from '../../assets/img/weatherapp.png';
import Dashboard from '../../assets/img/dashboard.png';
import Eskil from '../../assets/img/eskil.png';
import Header from '../header/Header';
import Preloader from './../preloader/Preloader';
const portfolio = () => {
	return (
		<div className='portfolio'>
           <Preloader/>
            <h1 className='text-center'>Portfolio</h1>
            <h5 className='text-center'>My Recent Work</h5>
            
			<div className=' container portfolio-container'>
                
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={HIMS} alt='' />
					</div>
					<h3>HIMS</h3>
					<p className="details">Institue Landing Page</p>
					<p className="details"><span className="tech">Techs:</span>HTML5 - CSS3 - JS - AOS library</p>
					<div className='portfolio-item-cta'>
						<a
							href='https://github.com/Toxn-boybot/HIMS'
							className='btn'
							target='_blank'
						>
							Github
						</a>
						<a
							href='https://toxn-boybot.github.io/HIMS/'
							className='btn '
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</article>
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={Fiverr} alt='' />
					</div>
					<h3>Fiverr</h3>
					<p className="details">Static E-Commerce</p>
					<p className="details"><span className="tech">Techs:</span>HTML5 - CSS3 - JS - Bootstrap</p>
					<div className='portfolio-item-cta'>
						<a
							href='https://github.com/Toxn-boybot/Fiverr'
							className='btn'
							target='_blank'
						>
							Github
						</a>
						<a
							href='https://toxn-boybot.github.io/Fiverr/'
							className='btn '
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</article>
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={Eskil} alt='' />
					</div>
					<h3>Eskil</h3>
					<p className="details">Dynamic E-Commerce</p>
					<p className="details"><span className="tech">Techs:</span>React.js - Axios - Router - Bootstrap</p>
					<div className='portfolio-item-cta'>
						<a
							href='https://github.com/Toxn-boybot/E-Commerce-ESKIL'
							className='btn'
							target='_blank'
						>
							Github
						</a>
						<a
							href='https://toxn-boybot.github.io/E-Commerce-ESKIL/#/'
							className='btn '
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</article>
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={WeatherApp} alt='' />
					</div>
					<h3>Weather App</h3>
					<p className="details">Institue Landing Page</p>
					<p className="details"><span className="tech">Techs:</span>HTML5 - CSS3 - JS - REST API</p>
					<div className='portfolio-item-cta'>
						<a
							href='https://github.com/Toxn-boybot/Weather-App'
							className='btn'
							target='_blank'
						>
							Github
						</a>
						<a
							href='https://toxn-boybot.github.io/Weather-App/'
							className='btn'
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</article>
				
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={Dashboard} alt='' />
					</div>
					<h3>Admin Dashboard</h3>
					<p className="details">Institue Landing Page</p>
					<p className="details"><span className="tech">Techs:</span>Html5 - CSS3 </p>
					<div className='portfolio-item-cta'>
						<a
							href='https://github.com/Toxn-boybot/Dashboard'
							className='btn'
							target='_blank'
						>
							Github
						</a>
						<a
							href='https://toxn-boybot.github.io/Dashboard/'
							className='btn '
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</article>
			</div>
		</div>
	);
};

export default portfolio;
