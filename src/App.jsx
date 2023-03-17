import React from 'react';
import About from './components/about/About';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='portfolio' element={<Portfolio />} />
					<Route path='contact' element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
