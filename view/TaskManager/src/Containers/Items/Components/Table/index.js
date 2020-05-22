import React from 'react';
import Header from './Components/Header/index';
import ListItem from './Components/ListItem/index';
import { Bottomer } from './styles'

const Table = () => { 
	return (
        <>
		<Header />
        <ListItem color='#f0f0f0'/>
        <ListItem />
        <ListItem color='#f0f0f0'/>
        <Bottomer />
        </>
	);
}

export default Table