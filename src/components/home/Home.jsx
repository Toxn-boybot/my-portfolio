import React from 'react';
import './home.css';
import mobileImg from '../../assets/img/me.jpg';
import Header from '../header/Header';
import myCV from '../../assets/CV/Mahmoud Saad Resume.pdf';

const Home = () => {
	return (
		<div className='home'>
			<Header/>
			<section className='container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1'>
				<div className='color-block d-none d-lg-block'></div>
				<div className='row home-details-container align-items-center'>
					<div className='col-lg-4 bg position-fixed d-none d-lg-block'></div>
					<div className='col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left'>
						<div>
							<img
								src={mobileImg}
								className='img-fluid main-img-mobile d-block d-lg-none d-lg-none'
								alt='my picture'
							/>
							<h6 className='text-uppercase open-sans-font mb-0 d-none  d-lg-block'>
								hi there !
							</h6>
							<h1 className='text-uppercase poppins-font'>
								<span>I'm</span> Mahmoud Saad
							</h1>
							<h1 className='text-uppercase poppins-font typing'>
								<span>Web Developer</span>
							</h1>
							<p className='open-sans-font'>
								I'm a Full-Stack Web Developer focused on crafting clean
								user‑friendly experiences, I am passionate about building
								excellent software that improves the lives of those around me.
							</p>
							<div className='buttonCol'>
								<a href={myCV} download className='btn'>
									Download CV
								</a>
								<a href='/about'>
									<button className='goToAbout'>
										<span className='buttonText'>About Me</span>
										<span className='buttonIcon'>
											<i class='fa-solid fa-arrow-right'></i>
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
