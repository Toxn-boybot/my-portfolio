import React from 'react';
import './contact.css';
import Header from '../header/Header';
const Contact = () => {
	return (
		<div className='contact'>
			
			<h1 className='text-center'>Contact me</h1>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-lg-4'>
						<h3 className='text-uppercase custom-title mb-0 ft-wt-600 pb-3'>
							Don't be shy !
						</h3>
						<p className='open-sans-font mb-3'>
							Feel free to get in touch with me. I am always open to discussing
							new projects, creative ideas or opportunities to be part of your
							visions.
						</p>
						<p className='open-sans-font custom-span-contact position-relative'>
							<i class='fa fa-envelope-open position-absolute'></i>
							<span class='d-block'>mail me</span>mahmdoud.saad3911@gmail.com
						</p>
						<p className='open-sans-font custom-span-contact position-relative'>
							<i class='fa fa-phone-square position-absolute'></i>
							<span class='d-block'>call me</span>01016236987
						</p>
						<ul className='social list-unstyled pt-1 mb-5'>
							<li className='facebook'>
								<a
									title='Facebook'
									href='https://www.facebook.com/Surplus.Killer/'
									target='_blank'
								>
									<i class='fa-brands fa-facebook-f'></i>
								</a>
							</li>
							<li className='linkedin'>
								<a
									title='linkedin'
									href='https://www.linkedin.com/in/toxn/'
									target='_blank'
								>
									<i class='fa-brands fa-linkedin'></i>
								</a>
							</li>
							<li className='whatsapp'>
								<a
									title='whatsapp'
									href='https://api.whatsapp.com/send?phone=201016236987'
									target='_blank'
								>
									<i class='fa-brands fa-whatsapp'></i>
								</a>
							</li>
							<li className='github'>
								<a
									title='github'
									href='https://github.com/Toxn-boybot'
									target='_blank'
								>
									<i className='fa fa-github'></i>
								</a>
							</li>
						</ul>
					</div>
					{/* Form Start  */}
					<div className='col-12 col-lg-8'>
						<form
							className='contactform'
							enctype='”text/plain”'
							name='”EmailForm”'
							action='https://formspree.io/f/xdovdrzb'
							method='POST'
						>
							<div className='contactform'>
								<div className='row'>
									<div className='col-12 col-md-4'>
										<input
											type='text'
											name='name'
											placeholder='YOUR NAME'
										></input>
									</div>
									<div className='col-12 col-md-4'>
										<input
											type='email'
											name='email'
											placeholder='YOUR EMAIL'
										></input>
									</div>
									<div className='col-12 col-md-4'>
										<input
											type='text'
											name='subject'
											placeholder='YOUR SUBJECT'
										></input>
									</div>

									<div className='col-12'>
										<textarea
											name='message'
											placeholder='YOUR MESSAGE'
										></textarea>
										<button type='submit' class='btn btn-contact'>
											<span data-hover='Send Message'>Send Message</span>
										</button>
									</div>
									<div className='col-12 form-message'>
										<span className='output_message text-center font-weight-600 text-uppercase'></span>
									</div>
								</div>
							</div>
						</form>
					</div>
					{/* Form End */}
				</div>
			</div>
		</div>
	);
};

export default Contact;
