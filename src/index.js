import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import Route from './route'
import './index.scss'
import reducer from '../reducers/stateData'
import thunk from 'redux-thunk';

const store = createStore(combineReducers(reducer), composeWithDevTools(
  applyMiddleware(thunk)));
render(
	<Provider store={store}>
		<Route />
	</Provider>,document.getElementById('root'))
dddddddd