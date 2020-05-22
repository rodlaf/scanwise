import React from 'react';
import Home from './Containers/Home/index'
import { Switch, Route }  from 'react-router-dom';
import { StateProvider } from './state'

const App = () => {
	return (
		<StateProvider>
			<Switch>
		        <Route exact path="/" component={Home} />
	    	</Switch>
		</StateProvider>
	)
}

export default App