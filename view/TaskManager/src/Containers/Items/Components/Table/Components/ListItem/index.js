import React from 'react';
import { Container, Text } from './styles';

const ListItem = ({ color }) => (
    <Container style={{backgroundColor: color}}>
        <Text style={{marginRight: 'auto', textAlign: 'start', marginLeft: '2.5em'}}>Data</Text>
        <Text>Data</Text>
        <Text>Data</Text>
        <Text>Data</Text>
    </Container>
)


export default ListItem;