import React from 'react';
import './portfolio.css';
import HIMS from '../../assets/img/hims.png';
import Fiverr from '../../assets/img/fiverr.png';
import WeatherApp from '../../assets/img/weatherapp.png';
import Dashboard from '../../assets/img/dashboard.png';
import Header from '../header/Header';
const portfolio = () => {
	return (
		<div className='portfolio'>
           
            <h1 className='text-center'>Portfolio</h1>
            <h5 className='text-center'>My Recent Work</h5>
            
			<div className=' container portfolio-container'>
                
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={HIMS} alt='' />
					</div>
					<h3>HIMS</h3>
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
						<img src={WeatherApp} alt='' />
					</div>
					<h3>Weather App</h3>
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
