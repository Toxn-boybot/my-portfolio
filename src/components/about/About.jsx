import React from 'react';
import Header from './../header/Header';
import './about.css';
const About = () => {
	return (
		<div className='about'>
			
			<div className='container'>
				<h1 class='text-center'>ABOUT ME</h1>
				{/* Personal info start  */}
				<div class='row'>
					<div class='col-lg-6 personal-info'>
						<h3>PERSONAL INFO</h3>
						<ul class='about-list list-unstyled'>
							<li>
								<span class='title'>Age: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									25 Years
								</span>
							</li>
							<li>
								<span class='title'>Nationality: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Egyptian
								</span>
							</li>

							<li>
								<span class='title'>Address: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Cairo - Egypt
								</span>
							</li>
							<li>
								<span class='title'>Faculty: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Science - Helwan Univeristy
								</span>
							</li>
							<li>
								<span class='title'>Overall Grade: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Good
								</span>
							</li>
							<li>
								<span class='title'>Grad. project grade: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Excellent
								</span>
							</li>

							<li>
								<span class='title'>Graduation Year: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									2021
								</span>
							</li>
							<li>
								<span class='title'>phone: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									+201016236987
								</span>
							</li>
							<li>
								<span class='title'>Travel: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Available
								</span>
							</li>
							<li>
								<span class='title'>Availabality: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									Open To Work
								</span>
							</li>
							<li>
								<span class='title'>Email: </span>
								<span class='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
									mahmoud.saad3911@gmail.com
								</span>
							</li>
						</ul>
					</div>
					<div class='col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0'>
						<div class='row'>
							<div class='col-sm-6'>
								<div class='box-stats with-margin'>
									<h3 class='poppins-font position-relative'>1</h3>
									<p class='m-0 position-relative text-uppercase'>
										year of <span class='d-block'> experience</span>
									</p>
								</div>
							</div>
							<div class='col-sm-6'>
								<div class='box-stats with-margin'>
									<h3 class='poppins-font position-relative'>6</h3>
									<p class='m-0 position-relative text-uppercase'>
										completed <span class='d-block'>projects</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Personal info end  */}
				<hr class='separator'></hr>
				{/* Skills start  */}
				<div className='skills'>
					<h3 class='title text-center'>MY SKILLS</h3>
					<div class='row align-items-center'>
						<div class='col-md-6'>
							<div class='skill mb-4'>
								<div class='d-flex justify-content-between'>
									<h6 class=''>HTML & CSS</h6>
									<h6 class=''>In 2018</h6>
								</div>
								<div
									class='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										class='progress-bar'
										style={{ width: '0', backgroundColor: 'red' }}
									></div>
								</div>
							</div>
							<div class='skill mb-4'>
								<div class='d-flex justify-content-between'>
									<h6 class=''>JavaScript & jQuery</h6>
									<h6 class=''>In 2019</h6>
								</div>
								<div
									class='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										class='progress-bar'
										style={{ width: '0', backgroundColor: '#ffc107' }}
									></div>
								</div>
							</div>
							<div class='skill mb-4'>
								<div class='d-flex justify-content-between'>
									<h6 class=''>Bootstrap & Sass</h6>
									<h6 class=''>In 2020</h6>
								</div>
								<div
									class='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										class='progress-bar'
										style={{ width: '0', backgroundColor: '#6244C5' }}
									></div>
								</div>
							</div>
						</div>
						<div class='col-md-6'>
							<div class='skill mb-4'>
								<div class='d-flex justify-content-between'>
									<h6 class=''>React.js & Next.jS</h6>
									<h6 class=''>in 2021</h6>
								</div>
								<div
									class='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										class='progress-bar'
										style={{ width: '0', backgroundColor: '#0dcaf0' }}
									></div>
								</div>
							</div>

							<div class='skill mb-4'>
								<div class='d-flex justify-content-between'>
									<h6 class=''>Node.js & MongoDB</h6>
									<h6 class=''>In 2022</h6>
								</div>
								<div
									class='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										class='progress-bar'
										style={{ width: '0', backgroundColor: '#198754' }}
									></div>
								</div>
							</div>
							<div class='skill mb-4'>
								<div class='d-flex justify-content-between'>
									<h6 class=''>Express.js</h6>
									<h6 class=''>In 2023</h6>
								</div>
								<div
									class='progress'
									role='progressbar'
									aria-label='Basic example'
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<div
										class='progress-bar'
										style={{ width: '0', backgroundColor: '#c73a0ac7' }}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Skills end */}
				<hr class='separator'></hr>
				{/* Experience & Education Starts  */}
				<div className='experience'>
					<h3 class='title text-center '>EXPERIENCE &amp; EDUCATION</h3>
					<div className='row'>
						<div className='col-lg-6 resume-box'>
							<ul>
								<li>
									<div class='icon'>
										<i class='fa fa-graduation-cap'></i>
									</div>
									<span class='time open-sans-font text-uppercase'>
										2015 - 2021
									</span>
									<h5 class='poppins-font text-uppercase'>
										Joined The Faculty of Science
										<span class='place '>Helwan University</span>
									</h5>
									<p class='open-sans-font'>
										- The Egyptian University for Science.
										<br />- I joined the Computer Science Department 2017.
									</p>
								</li>
							</ul>
						</div>
						<div className='col-lg-6 resume-box'>
							<ul>
								<li>
									<div class='icon'>
										<i class='fa-solid fa-building-columns'></i>
									</div>
									<span class='time open-sans-font text-uppercase'>
										2018 - Present
									</span>
									<h5 class='poppins-font text-uppercase'>
										Web Development Courses
										<span class='place '>Udemy & Youtube</span>
									</h5>
									<p class='open-sans-font'>
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
									<div class='icon'>
										<i class='fa-solid fa-briefcase'></i>
									</div>
									<span class='time open-sans-font text-uppercase'>
										2021 - Present
									</span>
									<h5 class='poppins-font text-uppercase'>
										Personal Projects & Freelance
										<span class='place'></span>
									</h5>
									<p class='open-sans-font'>
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
