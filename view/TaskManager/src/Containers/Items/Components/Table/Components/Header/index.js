import React from 'react';
import { Container, Text } from './styles';

const Header = () => (
    <Container>
        <Text style={{marginRight: 'auto', textAlign: 'start', marginLeft: '2.5em'}}>Description</Text>
        <Text>No. Scanned</Text>
        <Text>Avg. Rating</Text>
        <Text>Last Cleaned</Text>
    </Container>
)

export default Header;