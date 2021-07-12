import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<Link to='/' className='navbar-brand'>
					Movified
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink className='nav-link' aria-current='page' to='/'>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/movies'>
								Movies
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/customers'>
								Customers
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='nav-link disabled'
								to='/rentals'
								tabindex='-1'
								aria-disabled='true'
							>
								Rentals
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
