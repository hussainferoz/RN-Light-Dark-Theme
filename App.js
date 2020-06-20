import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import themeReducer from './redux/themeReducer';
import Home from './screens/Home';

const store = createStore(combineReducers({ themeReducer }), applyMiddleware(thunk));


const App = () => (
	<Provider store={store}>
		<Home />
	</Provider>
);

export default App;
