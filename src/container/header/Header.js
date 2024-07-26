import React, { useEffect, useRef, useState } from 'react';
import './Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../../store/useStore';

function Header() {
	const headerRef = useRef(null);
	const [showMenu, setShowMenu] = useState(false);
	const [headerFixed, setHeaderFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setHeaderFixed(window.scrollY >= headerRef.current.offsetHeight);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const [state, dispatch] = useStore();
	const { darkMode } = state;

	const handleToggle = () => {
		dispatch({ type: 'toggle' });
	};

	return (
		<>
			<div
				className={headerFixed === true ? 'header header-fixed' : 'header'}
				ref={headerRef}
				style={{ background: darkMode ? '#051418' : '' }}
			>
				<div className='container header-container'>
					<div className='header-left'>
						<div className='header-name'>Pham Viet Long</div>
					</div>
					<div className='header-right'>
						<ul
							className={
								showMenu === true
									? 'header-menu-list'
									: 'header-menu-list hide-menu'
							}
							style={{ background: darkMode ? '#051418' : '' }}
						>
							<li className='header-item'>
								<a
									href='#home'
									className='header-link'
									onClick={() => setShowMenu(false)}
									style={{ color: darkMode ? 'white' : '' }}
								>
									Home
								</a>
							</li>
							<li className='header-item'>
								<a
									href='#about'
									className='header-link'
									onClick={() => setShowMenu(false)}
									style={{ color: darkMode ? 'white' : '' }}
								>
									About
								</a>
							</li>
							<li className='header-item'>
								<a
									href='#skills'
									className='header-link'
									onClick={() => setShowMenu(false)}
									style={{ color: darkMode ? 'white' : '' }}
								>
									Skills
								</a>
							</li>
							<li className='header-item'>
								<a
									href='#projects'
									className='header-link'
									onClick={() => setShowMenu(false)}
									style={{ color: darkMode ? 'white' : '' }}
								>
									Projects
								</a>
							</li>
							<li className='header-item'>
								<a
									href='https://apps.shopify.com/facebook-multi-pixels'
									className='header-link'
									onClick={() => setShowMenu(false)}
									style={{ color: darkMode ? 'white' : '' }}
								>
									Contact
								</a>
							</li>
							<li
								className='btn-close-menu'
								onClick={() => setShowMenu(false)}
								style={{ color: darkMode ? 'white' : '' }}
							>
								&times;
							</li>
						</ul>
						<div className='btn-show-menu' onClick={() => setShowMenu(true)}>
							<FontAwesomeIcon
								icon={faAlignCenter}
								className='icon-show-menu'
								style={{ color: darkMode ? 'white' : '' }}
							/>
						</div>
						<div className='toggle'>
							<input
								type='checkbox'
								id='switch'
								className='switch-input'
								onClick={() => handleToggle()}
							/>
							<label
								htmlFor='switch'
								className='switch'
								style={{ background: darkMode ? '#37b548' : '#102a42' }}
							></label>
						</div>
					</div>
				</div>
			</div>
			{/*
                <a href='cv.pdf' download='phamvietlong cv.pdf'>download</a> 
            */}
		</>
	);
}

export default Header;
