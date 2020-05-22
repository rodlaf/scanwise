import styled from 'styled-components'

export const Container = styled.section`
	font-family: Montserrat;
`

export const Title = styled.h1`
	font-size: 1.7em;
	text-align: center;
	font-weight: 600;
	margin: 0 0 0 0;
`

export const Text = styled.p`
	font-size: 1.5em;
	text-align: center;
	width: 10em;
	font-weight: ${props => props.id == 'item' ? '400' : '600'};
	margin-left:auto;
	margin-right:auto;
	margin-top: ${props => props.id == 'item' ? '0.1em' : '1.3em'};
	margin-bottom: ${props => props.id == 'item' ? '0.8em' : '0.5em'};
	display:blocks
`
export const Banner = styled.h2`
	font-size: 1.8em;
  	text-align: center;
`
export const Logo = styled.img`
	width: 13em;
	margin-left:auto;
	margin-right:auto;
	margin-top: 2em;
	margin-bottom: 2em;
	display:block
`

export const Button = styled.button`
	background: #5e5e5e;
	border: none;
	cursor: pointer;
	color: white;
	width: 100%;
	height: 2.7em;
	font-weight: 600;
	font-size: 1.8em;
	padding: 0em;
	border: 0em;
	font-family: Montserrat;
	:hover {
    	background: #a72a54;
	}
`

export const Link = styled.a`
	color: #5e5e5e;
	font-size: 1.5em;
	text-decoration: none;
	text-align: center;
	width: 10em;
	font-weight: 600;
	margin-left:auto;
	margin-right:auto;
	margin-top: 1em;
	margin-bottom: 1em;
	display:block
`