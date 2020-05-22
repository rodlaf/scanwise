import React from 'react';
import { Container, Button, Icon } from './styles';
import Happy from '../../../../Images/happy.png';
import Neutral from '../../../../Images/neutral.png';
import Sad from '../../../../Images/sad.png';

const RateButton = () => (
	<Container>
        <Button color='#2aae6f'><Icon src={Happy}/></Button>
        <Button color='#d8a522'><Icon src={Neutral}/></Button >
        <Button color='#c72222'><Icon src={Sad}/></Button>
    </Container>
)

	

export default RateButton