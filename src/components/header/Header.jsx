import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './header.css';

const Header = () => {
	const [activePage, setActivePage] = useState('home');

	return (
		<>
			<div className='header'>
				<ul>
					<li>
						<Link
							to='/'
							onClick={() => setActivePage('home')}
							className={activePage === 'home' ? 'active' : ''}
						>
							<i className='fa-solid fa-house-chimney'></i>
							<h2>Home</h2>
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							onClick={() => setActivePage('about')}
							className={activePage === 'about' ? 'active' : ''}
						>
							<i className='fa-solid fa-user'></i>
							<h2>About</h2>
						</Link>
					</li>
					<li>
						<Link
							to='/portfolio'
							onClick={() => setActivePage('portfolio')}
							className={activePage === 'portfolio' ? 'active' : ''}
						>
							<i className='fa-solid fa-briefcase'></i>
							<h2>portfolio</h2>
						</Link>
					</li>

					<li>
						<Link
							to='/contact'
							onClick={() => setActivePage('contact')}
							className={activePage === 'contact' ? 'active' : ''}
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
