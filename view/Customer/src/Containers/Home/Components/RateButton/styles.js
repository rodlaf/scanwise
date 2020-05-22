import styled from 'styled-components'

export const Container = styled.section`
	font-family: Montserrat;
`

export const Button = styled.button`
	background: ${props => props.color}
	border: none;
	cursor: pointer;
    color: white;
    width: 33.333333%
	width: calc(100% /3);
	height: 3em;
	font-weight: bold;
	font-size: 1.5em;
	padding: 0em;
	font-family: Montserrat;
	:hover {
    	background: #a72a54;
	}
`
export const Icon = styled.img`
    width: 2.2em;
    margin-left:auto;
    margin-right:auto;
    margin-top: auto;
    margin-bottom: auto;
    display:block
`