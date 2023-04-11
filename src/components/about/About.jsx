import React from 'react';
import Preloader from '../preloader/Preloader';
import Header from './../header/Header';
import './about.css';


const About = () => {
	return (
		<div className='about'>
			<Preloader/>
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
				<hr className='separator'></hr>
				{/* Skills start  */}
				<div className='skills'>
					<h3 className='title text-center'>MY SKILLS</h3>
					<div className='row align-items-center'>
						<div className='col-md-6'>
							<div className='skill mb-4'>
								<div className='d-flex justify-content-between'>
									<h6 className=''>HTML & CSS</h6>
									<h6 className=''>In 2018</h6>
								</div>
								<div
									className='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										className='progress-bar'
										style={{ width: '0', backgroundColor: 'red' }}
									></div>
								</div>
							</div>
							<div className='skill mb-4'>
								<div className='d-flex justify-content-between'>
									<h6 className=''>JavaScript & jQuery</h6>
									<h6 className=''>In 2019</h6>
								</div>
								<div
									className='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										className='progress-bar'
										style={{ width: '0', backgroundColor: '#ffc107' }}
									></div>
								</div>
							</div>
							<div className='skill mb-4'>
								<div className='d-flex justify-content-between'>
									<h6 className=''>Bootstrap & Sass</h6>
									<h6 className=''>In 2020</h6>
								</div>
								<div
									className='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										className='progress-bar'
										style={{ width: '0', backgroundColor: '#6244C5' }}
									></div>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='skill mb-4'>
								<div className='d-flex justify-content-between'>
									<h6 className=''>React.js & Next.jS</h6>
									<h6 className=''>in 2021</h6>
								</div>
								<div
									className='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										className='progress-bar'
										style={{ width: '0', backgroundColor: '#0dcaf0' }}
									></div>
								</div>
							</div>

							<div className='skill mb-4'>
								<div className='d-flex justify-content-between'>
									<h6 className=''>Node.js & MongoDB</h6>
									<h6 className=''>In 2022</h6>
								</div>
								<div
									className='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										className='progress-bar'
										style={{ width: '0', backgroundColor: '#198754' }}
									></div>
								</div>
							</div>
							<div className='skill mb-4'>
								<div className='d-flex justify-content-between'>
									<h6 className=''>Express.js</h6>
									<h6 className=''>In 2023</h6>
								</div>
								<div
									className='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										className='progress-bar'
										style={{ width: '0', backgroundColor: '#c73a0ac7' }}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Skills end */}
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
