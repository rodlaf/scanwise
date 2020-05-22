import React from 'react';
import { Container, Title, Text } from './styles'

const Banner = ({ text }) => (
    <Container>
        <Text>Last sanitized</Text>
	    <Title>45 mins ago</Title>
    </Container>
)

export default Banner