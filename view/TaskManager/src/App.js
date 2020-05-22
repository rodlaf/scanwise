import React from 'react';
import Home from './Containers/Home/index';
import Items from './Containers/Items/index';
import Scanner from './Containers/Scanner/index';
import NavBar from './Components/NavBar/index';
import { Switch, Route }  from 'react-router-dom';
import { StateProvider } from './state'

const App = () => {
	return (
		<StateProvider>
            <NavBar />
			<Switch>
		        <Route exact path="/" component={Home} />
                <Route exact path="/items" component={Items} />
                <Route exact path="/scanner" component={Scanner} />
	    	</Switch>
		</StateProvider>
	)
}

export default App