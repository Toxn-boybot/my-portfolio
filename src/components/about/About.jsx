import React from 'react';
import Preloader from '../preloader/Preloader';
import HTML from '../../assets/img/html5.png';
import CSS from '../../assets/img/css.png';
import JS from '../../assets/img/js.png';
import ReactLogo from '../../assets/img/react.png';
import NextLogo from '../../assets/img/nextjs.png';
import ReduxLogo from '../../assets/img/redux.png'
import TailwindLogo from '../../assets/img/tailwind.png'
import BootstrapLogo from '../../assets/img/bootstrap.png'
import MUI from '../../assets/img/mui.png'
import GitLogo from '../../assets/img/git.png'
import SassLogo from '../../assets/img/sass.png'
import NodeLogo from '../../assets/img/nodejs.png'
import ExpressLogo from '../../assets/img/express.png'
import MongoLogo from '../../assets/img/MongoLogo.png'
import './about.css';

const About = () => {
	return (
		<div className='about'>
			<Preloader />
			<div className='container'>
				<h1 className='text-center'>ABOUT ME</h1>
				{/* Personal info start  */}
				<div className='row'>
					<div className='col-lg-6 personal-info'>
						<h3>PERSONAL INFO</h3>
						<ul className='about-list list-unstyled'>
							<li>
								<span className='title'>Age: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									25 Years
								</span>
							</li>
							<li>
								<span className='title'>Nationality: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Egyptian
								</span>
							</li>

							<li>
								<span className='title'>Address: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Cairo - Egypt
								</span>
							</li>
							<li>
								<span className='title'>Faculty: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Science - Helwan Univeristy
								</span>
							</li>
							<li>
								<span className='title'>Overall Grade: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Good
								</span>
							</li>
							<li>
								<span className='title'>Grad. project grade: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Excellent
								</span>
							</li>

							<li>
								<span className='title'>Graduation Year: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									2021
								</span>
							</li>
							<li>
								<span className='title'>phone: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									+201016236987
								</span>
							</li>
							<li>
								<span className='title'>Travel: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Available
								</span>
							</li>
							<li>
								<span className='title'>Availabality: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Open To Work
								</span>
							</li>
							<li>
								<span className='title'>Email: </span>
								<span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									mahmoud.saad3911@gmail.com
								</span>
							</li>
						</ul>
					</div>
					<div className='col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0'>
						<div className='row'>
							<div className='col-sm-6'>
								<div className='box-stats with-margin'>
									<h3 className='poppins-font position-relative'>1</h3>
									<p className='m-0 position-relative text-uppercase'>
										year of <span className='d-block'> experience</span>
									</p>
								</div>
							</div>
							<div className='col-sm-6'>
								<div className='box-stats with-margin'>
									<h3 className='poppins-font position-relative'>6</h3>
									<p className='m-0 position-relative text-uppercase'>
										completed <span className='d-block'>projects</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Personal info end  */}
				<hr className='separator' />
				{/* My Skills Start  */}
				<div className='skills'>
					<h3 className='title text-center'>MY SKILLS</h3>
					<div className='skill-grid'>
						<div className='skill-block'>
							<img src={HTML} alt='' />
							<p>HTML</p>
						</div>
						<div className='skill-block'>
							<img src={CSS} alt='' />
							<p>CSS</p>
						</div>
						<div className='skill-block'>
							<img src={JS} alt='' />
							<p>JavaScript</p>
						</div>
						<div className='skill-block'>
							<img src={SassLogo} alt='' />
							<p>Sass</p>
						</div>
						<div className='skill-block'>
							<img src={ReactLogo} alt='' />
							<p>React.js</p>
						</div>
						<div className='skill-block'>
							<img src={NextLogo} alt='' />
							<p>Next.js</p>
						</div>
						<div className='skill-block'>
							<img src={ReduxLogo} alt='' />
							<p>Redux</p>
						</div>
						<div className='skill-block'>
							<img src={TailwindLogo} alt='' />
							<p>Tailwind.css</p>
						</div>
						<div className='skill-block'>
							<img src={BootstrapLogo} alt='' />
							<p>Bootstrap</p>
						</div>
						<div className='skill-block'>
							<img src={MUI} alt='' />
							<p>Material UI</p>
						</div>
						<div className='skill-block'>
							<img src={GitLogo} alt='' />
							<p>Git & Github</p>
						</div>
						<div className='skill-block'>
							<img src={NodeLogo} alt='' />
							<p>Node.js</p>
						</div>
						<div className='skill-block'>
							<img src={ExpressLogo} alt='' />
							<p>Express.js</p>
						</div>
						<div className='skill-block'>
							<img src={MongoLogo} alt='' />
							<p>MongoDB</p>
						</div>
					</div>
				</div>
				{/* My Skills End */}
				<hr className='separator'></hr>
				{/* Experience & Education Starts  */}
				<div className='experience'>
					<h3 className='title text-center '>EXPERIENCE &amp; EDUCATION</h3>
					<div className='row'>
						<div className='col-lg-6 resume-box'>
							<ul>
								<li>
									<div className='icon'>
										<i className='fa fa-graduation-cap'></i>
									</div>
									<span className='time open-sans-font text-uppercase'>
										2015 - 2021
									</span>
									<h5 className='poppins-font text-uppercase'>
										Joined The Faculty of Science
										<span className='place '>Helwan University</span>
									</h5>
									<p className='open-sans-font'>
										- The Egyptian University for Science.
										<br />- I joined the Computer Science Department 2017.
									</p>
								</li>
							</ul>
						</div>
						<div className='col-lg-6 resume-box'>
							<ul>
								<li>
									<div className='icon'>
										<i className='fa-solid fa-building-columns'></i>
									</div>
									<span className='time open-sans-font text-uppercase'>
										2018 - Present
									</span>
									<h5 className='poppins-font text-uppercase'>
										Web Development Courses
										<span className='place '>Udemy & Youtube</span>
									</h5>
									<p className='open-sans-font'>
										- I started learning all about HTML, CSS & JavaScript from
										Elzero Channel.
										<br />- I learned React.js & Next.js from Maximilian
										Schwarzmüller on Udemy.
										<br />- I learned Node.js, MongoDB & Express.js from Andrew
										Mead on Udemy.
									</p>
								</li>
							</ul>
						</div>
						<div className='col-lg-6 resume-box'>
							<ul>
								<li>
									<div className='icon'>
										<i className='fa-solid fa-briefcase'></i>
									</div>
									<span className='time open-sans-font text-uppercase'>
										2021 - Present
									</span>
									<h5 className='poppins-font text-uppercase'>
										Personal Projects & Freelance
										<span className='place'></span>
									</h5>
									<p className='open-sans-font'>
										- I built personal websites to gather knowledge about the
										frontend development.
										<br />- I offered free service to people I met on facebook
										in order to learn how to build real life projects.
										<br />
										<br />
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
