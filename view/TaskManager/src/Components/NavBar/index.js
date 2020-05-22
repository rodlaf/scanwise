import React from 'react';
import NavLink from './Components/NavLink/index';
import { Bar, Logo } from './styles';
import logo from '../../Images/logo.png';

const NavBar = () => (
		<Bar>
            <Logo src={logo} />
			<NavLink text="HOME" to="/" />
			<NavLink text="ITEMS" to="/items" />
			<NavLink text="SCANNER" to="/scanner" />
		</Bar>
)

export default NavBar