import React from 'react';
import { Logo, Title, Container, Text, Button, Link } from './styles'
import RateButton from './Components/RateButton'
import Banner from './Components/Banner'
import logo from '../../Images/logo.png'

const Home = () => { 
	return (
		<Container>
            <Logo src={logo} />
			<Title>Company Name</Title>
			<Text id='item'>Room/Item</Text>
			<Banner>Last Sanitized 45 Minutes ago</Banner>
			<Text>Not Clean?</Text>
			<Button>Request Cleaning</Button>
			<Text>How was your experience?</Text>
			<RateButton />
			<Link href="task-manager">More Information</Link>
		</Container>
	);
}

export default Home