import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
	text-align: center;
	font-family: 'Montserrat';
	${props => props.status === 'clicked' ? 
	'color: #8300ab; background-image: linear-gradient(white, #d0bcd6);' : 
	'color: #8a8a8a; :hover {background-image: linear-gradient(white, #d1d1d1)};'
	}
	text-decoration: none;
	font-weight: 400;
	font-size: 1.3em;
	padding-top: 2.7em;
`

export const Line = styled.div`
	visibility: ${props => props.status === 'clicked' ? 'visible' : 'hidden' };
	background-color: #8300ab;
	height: .1em;
	width: 7em;
	margin-top: 1.3em;
	${StyledLink}:hover & {
		${props => props.status === 'not-clicked' ? 'visibility: visible; background-color: #8a8a8a;' : ''} 
	}
`


