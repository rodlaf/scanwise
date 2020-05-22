import React, {createContext, useContext, useState } from 'react';

export const StateContext = createContext();

const storage = window.localStorage;

const initialState = {
	pathname: "/"
};

export const StateProvider = ({children}) => {
	return (
		<StateContext.Provider value={useState(initialState)}>
	    	{children}
		</StateContext.Provider>
	)
};

export const useStateValue = () => useContext(StateContext);