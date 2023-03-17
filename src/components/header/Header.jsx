import React from 'react';
import './header.css';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';


const Header = () => {
	const [active, setActive] = useState('/');

	return (
		<>
		<div className='header'>
			<ul>
				<li className=''>
					<Link
						to='/'
						onClick={() => {
							setActive('/');
						}}
						className={active === '/' ? 'active' : ''}
					>
						<i className='fa-solid fa-house-chimney'></i>
						<h2>Home</h2>
					</Link>
				</li>
				<li className=''>
					<Link
						to='/about'
						onClick={() => {
							setActive('#about');
						}}
						className={active === '#about' ? 'active' : ''}
					>
						<i className='fa-solid fa-user'></i>
						<h2>About</h2>
					</Link>
				</li>
				<li className=''>
					<Link
						to='/portfolio'
						onClick={() => {
							setActive('#portfolio');
						}}
						className={active === '#portfolio' ? 'active' : ''}
					>
						<i className='fa-solid fa-briefcase'></i>
						<h2>portfolio</h2>
					</Link>
				</li>

				<li className=''>
					<Link
						to='/contact'
						onClick={() => {
							setActive('#contact');
						}}
						className={active === '#contact' ? 'active' : ''}
					>
						<i className='fa-solid fa-envelope'></i>
						<h2>Contact</h2>
					</Link>
				</li>
			</ul>
			
		</div>
		<Outlet />
		</>
	);
};

export default Header;
