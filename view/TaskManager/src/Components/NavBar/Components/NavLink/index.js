import React from 'react';
import { StyledLink, Line } from './styles';
import { useStateValue } from '../../../../state';

const NavLink = ({ text, to}) => {
	const [ state, setState ] = useStateValue();
	const toggle = () => {
		setState({...state, pathname: to});
	}
	return (
		<StyledLink onClick={() => toggle()} status={state.pathname === to ? 'clicked' : 'not-clicked'} to={to}>
			{text}
			<Line status={state.pathname === to ? 'clicked' : 'not-clicked'} />
		</StyledLink>
	)
}


export default NavLink